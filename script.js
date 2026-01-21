// Loading screen animation and site initialization
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    // Start the loading sequence
    setTimeout(() => {
        // Hide loading screen after animation completes
        loadingScreen.style.opacity = '0';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
            mainContent.classList.add('show');
        }, 800); // Wait for fade out
        
    }, 2500); // Total loading time: 2.5 seconds
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        }
    });
    
    // Animate photos on scroll (optional enhancement)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const photoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all photo items
    document.querySelectorAll('.photo-item').forEach(photo => {
        photo.style.opacity = '0';
        photo.style.transform = 'translateY(30px)';
        photo.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        photoObserver.observe(photo);
    });
    
    // Add click handlers for photos (could expand to lightbox in future)
    document.querySelectorAll('.photo-item').forEach(photo => {
        photo.addEventListener('click', function() {
            // Currently just a subtle animation on click
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
});

// Prevent loading screen from showing again on page refresh
window.addEventListener('beforeunload', function() {
    document.getElementById('loading-screen').style.display = 'none';
});