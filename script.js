document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));

    // --- Block Reveal Animation for Hero Title ---
    // Simple adding of class for sequencing
    const heroSpans = document.querySelectorAll('.block-reveal');
    heroSpans.forEach((span, index) => {
        setTimeout(() => {
            span.classList.add('visible');
        }, index * 200 + 500); // Staggered start
    });


    // --- Mobile Menu Toggle ---
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Accordion for Solutions ---
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const card = header.closest('.accordion-card');
            const icon = header.querySelector('.accordion-icon');

            // Toggle active class
            const isActive = card.classList.contains('active');

            // Close all other accordions (Optional depending on design preference, here we just toggle the clicked one)
            /* document.querySelectorAll('.accordion-card').forEach(c => {
                c.classList.remove('active');
                const i = c.querySelector('.accordion-icon');
                if(i) i.textContent = '▼';
            }); */

            if (!isActive) {
                card.classList.add('active');
                if (icon) icon.textContent = '▲';
            } else {
                card.classList.remove('active');
                if (icon) icon.textContent = '▼';
            }
        });
    });
});
