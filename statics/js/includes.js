// ===================================
// INCLUDES LOADER
// ===================================

// Function to load HTML includes
async function loadIncludes() {
    try {
        // Load navigation
        const navResponse = await fetch('includes/nav.html');
        const navHTML = await navResponse.text();
        document.getElementById('nav-placeholder').innerHTML = navHTML;

        // Load footer
        const footerResponse = await fetch('includes/footer.html');
        const footerHTML = await footerResponse.text();
        document.getElementById('footer-placeholder').innerHTML = footerHTML;

        // Set active page in navigation
        setActivePage();

        // Initialize nav events after loading
        initializeNavEvents();

    } catch (error) {
        console.error('Error loading includes:', error);
    }
}

// Set active page based on current URL
function setActivePage() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop().replace('.html', '') || 'index';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');

        // Skip anchor links
        if (href && href.startsWith('#')) {
            return;
        }

        const linkPage = link.getAttribute('data-page') || (href ? href.replace('.html', '') : '');

        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Initialize navigation events
function initializeNavEvents() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        // Toggle mobile menu
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Load includes when DOM is ready
document.addEventListener('DOMContentLoaded', loadIncludes);
