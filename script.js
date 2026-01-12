// ========================================
// PARTICLES EFFECT - POEIRA RÁPIDA (OTIMIZADA)
// ========================================

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 40 : 60;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const randomLeft = Math.random() * window.innerWidth;
        const randomDuration = Math.random() * 12 + 8;
        const randomDelay = Math.random() * 2;
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
// LOADING SCREEN - FADE OUT RÁPIDO COM GIF
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
// MOUSE PARALLAX GRADIENT
// ========================================

const mouseGradient = document.getElementById('mouseGradient');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    const gradientX = (mouseX / window.innerWidth) * 100;
    const gradientY = (mouseY / window.innerHeight) * 100;
    
    mouseGradient.style.backgroundImage = `radial-gradient(
        600px at ${gradientX}% ${gradientY}%,
        rgba(120, 0, 20, 0.15) 0%,
        transparent 100%
    )`;
}, { passive: true });

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

const isMobileDevice = window.innerWidth <= 768;

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

// LIGHTBOX GALERIA
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', function() { // Corrigido: removido o ")" extra
        const lightbox = document.createElement('div');
        
        // Estilização básica para o lightbox aparecer
        lightbox.style.cssText = `
            position: fixed;
            top: 0; 
            left: 0; 
            width: 100%; 
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            cursor: pointer;
        `;

        const fullImg = document.createElement('img');
        fullImg.src = this.src; // Pega a imagem que foi clicada
        fullImg.style.maxWidth = '90%';
        fullImg.style.maxHeight = '90%';

        lightbox.appendChild(fullImg);
        document.body.appendChild(lightbox);

        // Remove o lightbox ao clicar nele
        lightbox.onclick = () => lightbox.remove();
    });
});