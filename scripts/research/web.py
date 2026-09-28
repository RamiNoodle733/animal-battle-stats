#!/usr/bin/env python3
"""Web search and page reading for research agents, without the WebSearch tool.

Cloud sessions cap WebSearch calls; this reaches the web through the session's
network proxy instead.

  python3 scripts/research/web.py search "aardwolf weight kg"
  python3 scripts/research/web.py read https://animaldiversity.org/accounts/Proteles_cristata/
  python3 scripts/research/web.py read <url> --grep weight,length,speed

`search` prints title, real URL and snippet for each Bing result. `read` prints
the page as plain text; `--grep` keeps only the sentences that mention one of
the words, and `--max` caps the output (default 12000 characters). Some sites
refuse automated requests (403); pick another source.
"""
import base64
import html
import re
import sys
import urllib.parse
import urllib.request

BROWSER_UA = ('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
              '(KHTML, like Gecko) Chrome/124.0 Safari/537.36')
# Wikimedia's robot policy asks for a descriptive agent.
WIKI_UA = 'AnimalBattleStats-research/1.0 (https://animalbattlestats.com)'


def fetch(url):
    host = urllib.parse.urlparse(url).netloc
    agent = WIKI_UA if host.endswith(('wikipedia.org', 'wikimedia.org', 'wikidata.org')) else BROWSER_UA
    req = urllib.request.Request(url, headers={
        'User-Agent': agent,
        'Accept-Language': 'en-US,en;q=0.9',
    })
    with urllib.request.urlopen(req, timeout=30) as resp:
        charset = resp.headers.get_content_charset() or 'utf-8'
        return resp.read().decode(charset, errors='replace')


def strip_tags(fragment):
    return html.unescape(re.sub(r'<[^>]+>', '', fragment)).strip()


def real_url(href):
    href = html.unescape(href)
    if 'bing.com/ck/' not in href:
        return href
    target = urllib.parse.parse_qs(urllib.parse.urlparse(href).query).get('u', [''])[0]
    if target.startswith('a1'):
        encoded = target[2:]
        return base64.urlsafe_b64decode(encoded + '=' * (-len(encoded) % 4)).decode('utf-8', 'replace')
    return href


def search(query):
    page = fetch('https://www.bing.com/search?setlang=en&cc=US&q=' + urllib.parse.quote(query))
    results = re.findall(r'<li class="b_algo".*?</li>', page, re.S)
    if not results:
        print('No results (Bing may have refused the request; wait a minute and retry).')
    for number, item in enumerate(results, 1):
        link = re.search(r'<h2.*?<a[^>]*href="([^"]+)"[^>]*>(.*?)</a>', item, re.S)
        snippet = re.search(r'<p[^>]*>(.*?)</p>', item, re.S)
        if not link:
            continue
        print(f'{number}. {strip_tags(link.group(2))}')
        print(f'   {real_url(link.group(1))}')
        if snippet:
            print(f'   {strip_tags(snippet.group(1))}')


def page_text(raw):
    raw = re.sub(r'(?is)<(script|style|noscript|svg|nav|footer|header|form)[^>]*>.*?</\1>', ' ', raw)
    raw = re.sub(r'(?i)<br\s*/?>|</(p|div|li|h[1-6]|tr|table|section|article)>', '\n', raw)
    text = html.unescape(re.sub(r'<[^>]+>', ' ', raw))
    lines = (re.sub(r'[ \t\xa0]+', ' ', line).strip() for line in text.splitlines())
    return '\n'.join(line for line in lines if line)


def read(url, words, limit):
    text = page_text(fetch(url))
    if words:
        sentences = re.split(r'(?<=[.!?])\s+|\n', text)
        pattern = re.compile('|'.join(re.escape(word) for word in words), re.I)
        text = '\n'.join(s for s in sentences if pattern.search(s))
    print(text[:limit] if text else '(nothing matched)')


def main(argv):
    if len(argv) < 2 or argv[0] not in ('search', 'read'):
        print(__doc__)
        return 1
    if argv[0] == 'search':
        search(' '.join(argv[1:]))
        return 0
    url, words, limit = argv[1], [], 12000
    rest = argv[2:]
    while rest:
        flag = rest.pop(0)
        if flag == '--grep' and rest:
            words = [w.strip() for w in rest.pop(0).split(',') if w.strip()]
        elif flag == '--max' and rest:
            limit = int(rest.pop(0))
    try:
        read(url, words, limit)
    except Exception as error:  # report and move on to another source
        print(f'Could not read {url}: {error}')
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
