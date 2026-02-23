function initNavigation() {
    var nav = document.getElementById('nav');
    var navToggle = document.getElementById('navToggle');
    var navMenu = document.getElementById('navMenu');
    var navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    window.addEventListener('scroll', function() {
        var current = '';
        var sections = document.querySelectorAll('.section, .hero');

        sections.forEach(function(section) {
            var sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                var offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initScrollAnimations() {
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
        observer.observe(el);
    });
}

function initLanguageToggle() {
    var langBtn = document.getElementById('langToggle');
    if (!langBtn) return;

    langBtn.addEventListener('click', function() {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
        document.documentElement.lang = currentLang;
        updatePageLanguage();
        initComponents();
        setTimeout(function() {
            initScrollAnimations();
        }, 100);
    });
}

function updatePageLanguage() {
    var elements = document.querySelectorAll('[data-fr][data-en]');
    elements.forEach(function(el) {
        var text = currentLang === 'fr' ? el.getAttribute('data-fr') : el.getAttribute('data-en');
        if (text) {
            el.innerHTML = text;
        }
    });
}

function addComponentStyles() {
    var styles = `
        .skill-card {
            background: var(--bg-card);
            border: 1px solid rgba(6, 182, 212, 0.2);
            border-radius: var(--border-radius);
            padding: 2rem;
            transition: var(--transition);
        }

        .skill-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
            box-shadow: var(--shadow-hover);
        }

        .skill-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .skill-icon {
            font-size: 2rem;
        }

        .skill-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        .skill-list {
            list-style: none;
        }

        .skill-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.5rem 0;
            color: var(--text-secondary);
        }

        .skill-bullet {
            width: 8px;
            height: 8px;
            background: var(--primary);
            border-radius: 50%;
        }

        .project-card {
            background: var(--bg-card);
            border: 1px solid rgba(6, 182, 212, 0.2);
            border-radius: var(--border-radius);
            padding: 2rem;
            transition: var(--transition);
            position: relative;
            overflow: hidden;
        }

        .project-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
            box-shadow: var(--shadow-hover);
        }

        .project-card.featured {
            border-color: var(--primary);
            background: linear-gradient(135deg, var(--bg-card) 0%, rgba(6, 182, 212, 0.05) 100%);
        }

        .project-card.in-progress {
            border-color: #f59e0b;
            background: linear-gradient(135deg, var(--bg-card) 0%, rgba(245, 158, 11, 0.05) 100%);
        }

        .featured-badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: var(--primary);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
        }

        .in-progress-badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: #f59e0b;
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
        }

        .project-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .project-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 1rem;
        }

        .project-description {
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }

        .project-technologies {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        }

        .tech-tag {
            padding: 0.375rem 0.75rem;
            background: rgba(6, 182, 212, 0.1);
            border: 1px solid rgba(6, 182, 212, 0.3);
            border-radius: 20px;
            font-size: 0.875rem;
            color: var(--primary);
        }

        .project-links {
            display: flex;
            gap: 1rem;
        }

        .project-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: var(--bg-darker);
            border: 1px solid var(--primary);
            border-radius: 8px;
            color: var(--primary);
            text-decoration: none;
            font-weight: 500;
            transition: var(--transition);
        }

        .project-link:hover {
            background: var(--primary);
            color: white;
        }

        .link-icon {
            font-size: 1.25rem;
        }

        .contact-card {
            background: var(--bg-card);
            border: 1px solid rgba(6, 182, 212, 0.2);
            border-radius: var(--border-radius);
            padding: 2rem;
            display: flex;
            align-items: center;
            gap: 1.5rem;
            text-decoration: none;
            transition: var(--transition);
        }

        .contact-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
            box-shadow: var(--shadow-hover);
        }

        .contact-icon {
            font-size: 2.5rem;
            min-width: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .contact-icon svg {
            width: 40px;
            height: 40px;
            fill: var(--primary);
        }

        .contact-info {
            flex: 1;
            min-width: 0;
        }

        .contact-label {
            font-size: 0.875rem;
            color: var(--text-muted);
            margin-bottom: 0.25rem;
        }

        .contact-value {
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-primary);
            word-break: break-word;
        }
    `;

    var styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

document.addEventListener('DOMContentLoaded', function() {
    addComponentStyles();
    initComponents();
    initNavigation();
    initSmoothScroll();
    initLanguageToggle();

    setTimeout(function() {
        initScrollAnimations();
    }, 100);
});
