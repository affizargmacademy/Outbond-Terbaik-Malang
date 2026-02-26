document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Floating Up Button Visibility
    const upBtn = document.querySelector('.floating-up');
    if (upBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                upBtn.classList.add('show');
            } else {
                upBtn.classList.remove('show');
            }
        });

        upBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // TOC Toggle
    const tocHeader = document.querySelector('.toc-header');
    const tocContent = document.querySelector('.toc-content');
    if (tocHeader && tocContent) {
        tocHeader.addEventListener('click', () => {
            if (tocContent.style.display === 'none') {
                tocContent.style.display = 'block';
                tocHeader.querySelector('i').className = 'fas fa-chevron-up';
            } else {
                tocContent.style.display = 'none';
                tocHeader.querySelector('i').className = 'fas fa-chevron-down';
            }
        });

        // Auto-generate TOC based on H2 and H3
        const articleBody = document.querySelector('.article-body');
        const tocList = tocContent.querySelector('ul');
        if (articleBody && tocList) {
            const headings = articleBody.querySelectorAll('h2, h3');
            headings.forEach((heading, index) => {
                const id = `heading-${index}`;
                heading.id = id;

                const li = document.createElement('li');
                li.className = heading.tagName.toLowerCase();

                const a = document.createElement('a');
                a.href = `#${id}`;
                a.textContent = heading.textContent;

                li.appendChild(a);
                tocList.appendChild(li);
            });
        }
    }

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileBtn && mobileNav) {
        mobileBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }

    // Sharing Functions
    window.shareToWA = () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(document.title);
        window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
    };

    window.shareToFB = () => {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    };

    window.shareToTW = () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(document.title);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    };
});
