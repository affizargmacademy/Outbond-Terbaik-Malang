document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const nav = document.querySelector('nav');
    const upBtn = document.querySelector('.up-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        if (window.scrollY > 500) {
            upBtn.classList.add('show');
        } else {
            upBtn.classList.remove('show');
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = 'auto';
        });
    }

    // Scroll to Top
    if (upBtn) {
        upBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // TOC Generation for Blog Pages
    const tocList = document.getElementById('toc-list');
    const postBody = document.querySelector('.post-body');

    if (tocList && postBody) {
        const headings = postBody.querySelectorAll('h2, h3');
        headings.forEach((heading, index) => {
            const id = `heading-${index}`;
            heading.setAttribute('id', id);

            const li = document.createElement('a');
            li.href = `#${id}`;
            li.textContent = heading.textContent;
            li.style.paddingLeft = heading.tagName === 'H3' ? '1rem' : '0';
            tocList.appendChild(li);
        });

        const tocToggle = document.querySelector('#toc h4');
        if (tocToggle) {
            tocToggle.addEventListener('click', () => {
                tocList.style.display = tocList.style.display === 'none' ? 'flex' : 'none';
                const icon = tocToggle.querySelector('i');
                if (icon) icon.style.transform = tocList.style.display === 'none' ? 'rotate(180deg)' : 'rotate(0)';
            });
        }
    }

    // Share Buttons Logic
    const shareBtns = document.querySelectorAll('.share-btn');
    shareBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = btn.dataset.platform;
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);

            let shareUrl = '';
            if (platform === 'wa') shareUrl = `https://wa.me/?text=${title}%20${url}`;
            if (platform === 'fb') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            if (platform === 'tw') shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;

            if (shareUrl) window.open(shareUrl, '_blank');
        });
    });
});
