document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                navLinks.style.padding = '1rem';
                navLinks.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                navLinks.style.zIndex = '50';
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (window.innerWidth < 768 && navLinks.style.display === 'flex') {
                    mobileMenuBtn.click();
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            
            // Add visible class to each element with appear-animation or slide-in-animation
            if (entry.target.classList.contains('appear-animation') || 
                entry.target.classList.contains('slide-in-animation')) {
                entry.target.style.animationPlayState = 'running';
            }
            
            // For elements with hidden class, swap to visible class
            if (entry.target.classList.contains('hidden')) {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('visible');
            }
            
            observer.unobserve(entry.target);
        });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.appear-animation, .slide-in-animation, .hidden').forEach(element => {
        // Pause animations initially
        if (element.classList.contains('appear-animation') || 
            element.classList.contains('slide-in-animation')) {
            element.style.animationPlayState = 'paused';
        }
        
        appearOnScroll.observe(element);
    });

    // Phone mockup hover effects
    document.querySelectorAll('.phone-mockup').forEach(mockup => {
        mockup.addEventListener('mouseenter', () => {
            const svg = mockup.querySelector('.phone-svg');
            if (svg) {
                svg.style.transform = 'rotateY(0) rotateX(0)';
                svg.style.filter = 'drop-shadow(0px 30px 40px rgba(0, 0, 0, 0.3))';
            }
        });
        
        mockup.addEventListener('mouseleave', () => {
            const svg = mockup.querySelector('.phone-svg');
            if (svg) {
                svg.style.transform = 'rotateY(-10deg) rotateX(5deg)';
                svg.style.filter = 'drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.2))';
            }
        });
    });

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY < 600) { // Only apply effect when near the hero section
                const heroImage = document.querySelector('.hero-image');
                const heroContent = document.querySelector('.hero-content');
                
                if (heroImage) {
                    heroImage.style.transform = `translateY(${scrollY * 0.1}px)`;
                }
                
                if (heroContent) {
                    heroContent.style.transform = `translateY(${scrollY * 0.05}px)`;
                }
            }
        });
    }

    // Initialize animations immediately for elements in viewport
    setTimeout(() => {
        document.querySelectorAll('.appear-animation, .slide-in-animation').forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.style.animationPlayState = 'running';
            }
        });

        document.querySelectorAll('.hidden').forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.remove('hidden');
                element.classList.add('visible');
            }
        });
    }, 100);

    // Microinteractions for buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.transform = '';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });
}); 