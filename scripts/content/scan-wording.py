"""Scan everything the site shows for wording the owner does not want: Greek
and Roman mythology, other religions' gods and figures, and supernatural or
shirk ideas (luck, fate, magic, oracles, demons...). Prints each word with
where it appears. Real species names (Tasmanian devil, Komodo dragon,
vampire bat, Goliath tigerfish...) are reported separately, as names of animals.

    python scripts/content/scan-wording.py [--context word]
"""
import collections
import os
import re
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
WORDS = (
    r"titan\w*|olymp\w*|zeus|hera|ares|athena|apollo|artemis|hermes|hades|poseidon|aphrodite|dionysus|hephaestus|demeter|"
    r"persephone|kronos|cronus|gaia|atlas|prometheus|hercul\w*|heracles|achilles|perseus|medusa|gorgon\w*|hydra|kraken|"
    r"cerberus|cyclops|minotaur|centaur\w*|pegasus|phoenix|chimera|sirens?|harp(?:y|ies)|nemesis|odyss\w*|spartan\w*|"
    r"trojan\w*|pantheon|colossus|oracle\w*|muses?|nymph\w*|jupiter|neptune|vulcan|cupid|aurora|myth\w*|legend\w*|gods?|"
    r"goddess\w*|godlike|godly|demigod\w*|deit(?:y|ies)|divin\w*|holy|sacred|bless\w*|heaven\w*|hell|hellish|devil\w*|"
    r"demon\w*|satan\w*|angel\w*|spirits?|souls?|ghost\w*|haunt\w*|curse\w*|magic\w*|mystic\w*|wizard\w*|witch\w*|"
    r"sorcer\w*|warlock\w*|voodoo|totem\w*|karma|fate|destin\w*|luck\w*|miracle\w*|pray\w*|worship\w*|idol\w*|"
    r"reincarnat\w*|immortal\w*|zombie\w*|vampire\w*|dragon\w*|unicorn\w*|yeti|bigfoot|avatar\w*|juggernaut\w*|"
    r"behemoth\w*|leviathan\w*|goliath\w*|zodiac|horoscope|omen\w*|superstiti\w*|psychic\w*|prophe\w*"
)
RX = re.compile(r"\b(" + WORDS + r")\b", re.I)
ROOTS = ['astro/src', 'lib', 'api', 'data', 'public', 'animal_stats.json', 'manifest.json', 'js']
SKIP_DIRS = {'node_modules', '.cache', 'dist'}
SKIP_FILES = {'moderation.json', 'moderation.js', 'scan-wording.py'}
EXTENSIONS = ('.astro', '.js', '.mjs', '.json', '.css', '.txt', '.md', '.html')


def files():
    for root in ROOTS:
        path = os.path.join(ROOT, root)
        if os.path.isfile(path):
            yield path
            continue
        for directory, dirs, names in os.walk(path):
            dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
            for name in names:
                if name.endswith(EXTENSIONS) and name not in SKIP_FILES:
                    yield os.path.join(directory, name)


def main():
    context = sys.argv[sys.argv.index('--context') + 1].lower() if '--context' in sys.argv else None
    counts = collections.Counter()
    where = collections.defaultdict(collections.Counter)
    for path in files():
        try:
            text = open(path, encoding='utf-8').read()
        except (UnicodeDecodeError, OSError):
            continue
        rel = os.path.relpath(path, ROOT).replace(os.sep, '/')
        for match in RX.finditer(text):
            word = match.group(1).lower()
            counts[word] += 1
            where[word][rel] += 1
            if context and word.startswith(context):
                start, end = max(0, match.start() - 70), min(len(text), match.end() + 70)
                print(f'{rel}: ...{text[start:end]}...'.replace('\n', ' '))
    if not context:
        for word, count in counts.most_common():
            print(f'{count:6} {word:18} {dict(where[word].most_common(4))}')


if __name__ == '__main__':
    main()
