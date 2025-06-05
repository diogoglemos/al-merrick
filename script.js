document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const exitButton = document.querySelector('.exit-button');
    const body = document.body;

    // Function to close menu
    const closeMenu = () => {
        menuToggle.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        body.classList.remove('menu-open');
    };

    // Toggle menu
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileNavOverlay.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Close menu with exit button
    exitButton.addEventListener('click', closeMenu);

    // Close menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    mobileNavOverlay.addEventListener('click', (e) => {
        if (e.target === mobileNavOverlay) {
            closeMenu();
        }
    });
}); 