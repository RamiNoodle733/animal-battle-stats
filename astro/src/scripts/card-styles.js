// The card viewer's and share sheet's styles (styles/cards.css), shipped
// inside their script and added the first time either opens, so no page
// links them up front.
import css from '../styles/cards.css?inline';

if (!document.getElementById('abs-card-styles')) {
    const style = document.createElement('style');
    style.id = 'abs-card-styles';
    style.textContent = css;
    document.head.append(style);
}
