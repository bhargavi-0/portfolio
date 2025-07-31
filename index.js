// Typing effect for roles
        const roles = ["Full-Stack Developer","Problem Solver"];
        let roleIndex = 0, charIndex = 0, forward = true;
        const el = document.getElementById("typing-roles");

        function type() {
            const current = roles[roleIndex];
            if (forward) {
                el.textContent = current.slice(0, ++charIndex);
                if (charIndex === current.length) {
                    forward = false;
                    setTimeout(type, 1500);
                    return;
                }
            } else {
                el.textContent = current.slice(0, --charIndex);
                if (charIndex === 0) {
                    forward = true;
                    roleIndex = (roleIndex + 1) % roles.length;
                }
            }
            setTimeout(type, 80);
        }
        type();

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        mobileMenu.querySelectorAll('a').forEach(link => 
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'))
        );

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', e => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        // Particle system
        const particlesContainer = document.getElementById('particles');
        if (particlesContainer) {
            for (let i = 0; i < 50; i++) {
                const p = document.createElement('div');
                p.className = 'particle';
                p.style.left = Math.random() * 100 + '%';
                p.style.animationDelay = Math.random() * 6 + 's';
                p.style.animationDuration = (Math.random() * 3 + 4) + 's';
                particlesContainer.appendChild(p);
            }
        }

        // Form submission
        document.getElementById('contact-form').addEventListener('submit', e => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            e.target.reset();
        });

        // GSAP
        if (typeof gsap !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            gsap.from('.hero-content', { duration: 1.5, y: 50, opacity: 0, ease: 'power3.out' });
            gsap.utils.toArray('.section-hidden').forEach(el => 
                gsap.fromTo(el, { y: 30, opacity: 0 }, {
                    y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
                    scrollTrigger: { trigger: el, start: 'top 95%', toggleActions: 'play none none reverse' }
                })
            );
            gsap.utils.toArray('.skill-progress').forEach(bar => 
                gsap.fromTo(bar, { scaleX: 0 }, {
                    scaleX: 1, duration: 1.5, ease: 'power2.out',
                    scrollTrigger: { trigger: bar, start: 'top 95%', toggleActions: 'play none none reverse' }
                })
            );
        } else {
            document.body.classList.add('no-js');
        }