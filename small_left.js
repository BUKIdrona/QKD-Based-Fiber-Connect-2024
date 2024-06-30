const toggleButton = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('navMenu');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    })