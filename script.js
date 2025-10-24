// Smooth scroll for in-page anchors only (href beginning with '#').
// For regular links (to other pages), let the browser navigate normally.
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        // find element by hash selector (e.g., '#section')
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            // update the address bar hash without jumping
            if (history && history.pushState) {
                history.pushState(null, '', href);
            } else {
                // fallback
                location.hash = href;
            }
        }
    });
});

// Make project images and titles open their project link (if present)
document.querySelectorAll('.project-card').forEach(card => {
    const link = card.querySelector('.project-info a');
    const img = card.querySelector('.project-image img');
    const title = card.querySelector('.project-info h3');
    if (link) {
        const href = link.getAttribute('href');
        if (href && href !== '#') {
            if (img) {
                img.style.cursor = 'pointer';
                img.addEventListener('click', () => window.open(href, '_blank'));
            }
            if (title) {
                // make title clickable
                title.style.cursor = 'pointer';
                title.addEventListener('click', () => window.open(href, '_blank'));
            }
        }
    }
});
