// ========================================
// PARTICLES EFFECT - POEIRA SUBINDO (OTIMIZADO)
// ========================================

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 20 : 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const randomLeft = Math.random() * window.innerWidth;
        const randomDuration = Math.random() * 20 + 15;
        const randomDelay = Math.random() * 5;
        const randomSize = Math.random() * 3 + 1;
        
        particle.style.left = randomLeft + 'px';
        particle.style.bottom = '-10px';
        particle.style.width = randomSize + 'px';
        particle.style.height = randomSize + 'px';
        particle.style.animationDuration = randomDuration + 's';
        particle.style.animationDelay = randomDelay + 's';
        
        particlesContainer.appendChild(particle);
    }
}

window.addEventListener('DOMContentLoaded', createParticles);

// Recria partículas ao redimensionar
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const particlesContainer = document.getElementById('particles');
        if (particlesContainer) {
            particlesContainer.innerHTML = '';
            createParticles();
        }
    }, 250);
});

// ========================================
// LOADING SCREEN
// ========================================

window.addEventListener('load', () => {
    setTimeout(() => {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.classList.add('hidden');
        }
    }, 2000);
});

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// SCROLL ANIMATIONS (OTIMIZADO)
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// ========================================
// CONTACT FORM MODAL
// ========================================

const modal = document.getElementById('successModal');
const form = document.getElementById('contactForm');
const closeModal = document.querySelector('.modal-close');

if (form && modal && closeModal) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        form.reset();
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

// ========================================
// PARALLAX EFFECT (OTIMIZADO PARA MOBILE)
// ========================================

let ticking = false;
const isMobileDevice = window.innerWidth <= 768;

window.addEventListener('scroll', () => {
    if (!ticking && !isMobileDevice) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');

            if (heroContent && scrolled < 1000) {
                const speed = 0.5;
                heroContent.style.transform = `translateY(${scrolled * speed}px)`;
            }

            ticking = false;
        });

        ticking = true;
    }
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.style.padding = window.innerWidth <= 480 ? '15px 15px' : '20px 60px';
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        nav.style.padding = window.innerWidth <= 480 ? '15px 15px' : '30px 60px';
        nav.style.background = 'linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 100%)';
    }

    lastScroll = currentScroll;
}, { passive: true });

// ========================================
// GALLERY HOVER EFFECTS (DESKTOP ONLY)
// ========================================

if (!isMobileDevice) {
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.filter = 'contrast(1.3) brightness(0.9)';
            }
        });

        item.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.filter = 'contrast(1.2)';
            }
        });
    });
}

// ========================================
// TOUCH SUPPORT PARA GALLERY (MOBILE)
// ========================================

if (isMobileDevice) {
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('touchstart', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.filter = 'contrast(1.2) brightness(0.95)';
            }
        });

        item.addEventListener('touchend', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.filter = 'contrast(1.2)';
            }
        });
    });
}

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log('%c MODE SKETCH ', 'background: #000; color: #fff; font-size: 20px; padding: 10px;');
console.log('%c Todos os modos de arte ', 'background: #500000; color: #fff; font-size: 14px; padding: 5px;');
