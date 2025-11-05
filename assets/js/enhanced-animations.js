/**
 * Enhanced Animations for Tech Queens Website
 * Targeting Gen Z Women with smooth, modern interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Counter Animation for Statistics
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-target]');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                    // Add sparkle effect when animation completes
                    addSparkleEffect(counter);
                }
            };
            
            updateCounter();
        });
    }
    
    // Add sparkle effect to completed counters
    function addSparkleEffect(element) {
        element.style.animation = 'sparkle 1s ease-in-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 1000);
    }
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate counters when they come into view
                if (entry.target.id === 'community-highlights') {
                    setTimeout(animateCounters, 500);
                }
                
                // Add fade-in animation
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    const sectionsToObserve = document.querySelectorAll('#community-highlights, #gallery-showcase');
    sectionsToObserve.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(section);
    });
    
    // Add dynamic hover effects to cards
    const cards = document.querySelectorAll('.modern-card, .testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-16px) scale(1.03)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Gallery lightbox effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add pulse effect on click
            this.style.animation = 'pulse 0.3s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    });
    
    // Add typing effect to hero title
    function typewriterEffect() {
        const titleElement = document.querySelector('.text-highlight-animated');
        if (!titleElement) return;
        
        const text = titleElement.textContent;
        titleElement.textContent = '';
        titleElement.style.borderRight = '2px solid #ff6b6b';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                titleElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    titleElement.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        // Start typing effect after page load
        setTimeout(typeWriter, 1000);
    }
    
    // Initialize typing effect
    typewriterEffect();
    
    // Add smooth scroll behavior for anchor links
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
    
    // Add floating animation to specific elements
    function addFloatingAnimation() {
        const floatingElements = document.querySelectorAll('.hero-image-floating');
        floatingElements.forEach((element, index) => {
            element.style.animation = `float-gentle ${4 + index}s ease-in-out infinite`;
            element.style.animationDelay = `${index * 0.5}s`;
        });
    }
    
    addFloatingAnimation();
    
    // Testimonial card auto-rotate highlight
    function rotateTestimonialHighlight() {
        const testimonials = document.querySelectorAll('.testimonial-card');
        let currentIndex = 0;
        
        setInterval(() => {
            // Remove highlight from all testimonials
            testimonials.forEach(card => {
                card.classList.remove('highlight-active');
            });
            
            // Add highlight to current testimonial
            if (testimonials[currentIndex]) {
                testimonials[currentIndex].classList.add('highlight-active');
            }
            
            currentIndex = (currentIndex + 1) % testimonials.length;
        }, 4000); // Rotate every 4 seconds
    }
    
    // Start testimonial rotation after a delay
    setTimeout(rotateTestimonialHighlight, 3000);
    
    // Add parallax effect to hero background
    function addParallaxEffect() {
        const hero = document.querySelector('.landing-hero-bg-enhanced');
        if (!hero) return;
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
    
    addParallaxEffect();
});

// Add CSS for additional animations
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); color: #ff6b6b; }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(0.95); }
        100% { transform: scale(1); }
    }
    
    .highlight-active {
        background: linear-gradient(135deg, #fff9e6 0%, #fffbe6 100%) !important;
        border-color: #ffe066 !important;
        box-shadow: 0 12px 48px rgba(255, 224, 102, 0.3) !important;
    }
    
    .highlight-active::before {
        transform: scaleX(1) !important;
    }
    
    /* Smooth transitions for all interactive elements */
    .modern-card,
    .testimonial-card,
    .gallery-item,
    .stat-circle-inner,
    .btn-gradient-primary,
    .hero-btn-secondary {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    
    /* Enhanced focus states for accessibility */
    .modern-card:focus-within,
    .testimonial-card:focus-within,
    .gallery-item:focus-within {
        outline: 3px solid #ffe066;
        outline-offset: 4px;
    }
`;

document.head.appendChild(style);