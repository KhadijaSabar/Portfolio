// Visitor tracking - identification automatique par IP
// Aucun parametre dans l'URL, tout est invisible

var tracker = {
    visitor: {},
    startTime: Date.now(),
    sectionsViewed: [],
    maxScroll: 0,
    clicks: [],

    init: function() {
        this.identifyVisitor();
        this.trackSections();
        this.trackScroll();
        this.trackClicks();
        this.trackTimeOnPage();
    },

    // Identifier le visiteur via son IP (organisation, ville, pays)
    identifyVisitor: function() {
        var self = this;

        // ipinfo.io - gratuit jusqu'a 50 000 requetes/mois
        fetch('https://ipinfo.io/json?token=YOUR_TOKEN_HERE')
            .then(function(r) { return r.json(); })
            .then(function(data) {
                self.visitor = {
                    ip: data.ip || 'unknown',
                    city: data.city || 'unknown',
                    region: data.region || 'unknown',
                    country: data.country || 'unknown',
                    org: data.org || 'unknown',
                    company: (data.org || '').replace(/^AS\d+\s*/, '') || 'unknown',
                    timezone: data.timezone || 'unknown'
                };

                if (typeof gtag === 'function') {
                    gtag('event', 'visitor_identified', {
                        'visitor_org': self.visitor.company,
                        'visitor_city': self.visitor.city,
                        'visitor_region': self.visitor.region,
                        'visitor_country': self.visitor.country,
                        'language': currentLang || 'fr',
                        'page_url': window.location.href,
                        'referrer': document.referrer || 'direct',
                        'device': self.getDeviceType(),
                        'screen': window.innerWidth + 'x' + window.innerHeight
                    });
                }
            })
            .catch(function() {
                self.visitor = { company: 'unknown', city: 'unknown' };
                if (typeof gtag === 'function') {
                    gtag('event', 'visitor_identified', {
                        'visitor_org': 'unknown',
                        'language': currentLang || 'fr',
                        'referrer': document.referrer || 'direct',
                        'device': self.getDeviceType()
                    });
                }
            });
    },

    getDeviceType: function() {
        var w = window.innerWidth;
        if (w < 768) return 'mobile';
        if (w < 1024) return 'tablet';
        return 'desktop';
    },

    trackSections: function() {
        var self = this;
        var sectionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var sectionId = entry.target.id;
                    if (self.sectionsViewed.indexOf(sectionId) === -1) {
                        self.sectionsViewed.push(sectionId);
                        if (typeof gtag === 'function') {
                            gtag('event', 'section_view', {
                                'section': sectionId,
                                'visitor_org': self.visitor.company || 'loading',
                                'time_elapsed': Math.round((Date.now() - self.startTime) / 1000)
                            });
                        }
                    }
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll('section[id]').forEach(function(section) {
            sectionObserver.observe(section);
        });
    },

    trackScroll: function() {
        var self = this;
        var milestones = [25, 50, 75, 100];
        var reached = [];

        window.addEventListener('scroll', function() {
            var scrollTop = window.scrollY;
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight <= 0) return;
            var scrollPercent = Math.round((scrollTop / docHeight) * 100);

            if (scrollPercent > self.maxScroll) {
                self.maxScroll = scrollPercent;
            }

            milestones.forEach(function(milestone) {
                if (scrollPercent >= milestone && reached.indexOf(milestone) === -1) {
                    reached.push(milestone);
                    if (typeof gtag === 'function') {
                        gtag('event', 'scroll_depth', {
                            'depth': milestone,
                            'visitor_org': self.visitor.company || 'unknown'
                        });
                    }
                }
            });
        });
    },

    trackClicks: function() {
        var self = this;

        document.addEventListener('click', function(e) {
            var link = e.target.closest('a');
            if (!link) return;

            var href = link.getAttribute('href') || '';
            var label = '';

            if (href.indexOf('github.com') > -1) label = 'github';
            else if (href.indexOf('linkedin.com') > -1) label = 'linkedin';
            else if (href.indexOf('mailto:') > -1) label = 'email';
            else if (href.indexOf('tel:') > -1) label = 'phone';
            else if (link.classList.contains('project-link')) label = 'project-link';
            else if (link.classList.contains('btn')) label = 'cta-button';
            else return;

            self.clicks.push(label);

            if (typeof gtag === 'function') {
                gtag('event', 'contact_click', {
                    'click_type': label,
                    'visitor_org': self.visitor.company || 'unknown',
                    'visitor_city': self.visitor.city || 'unknown',
                    'time_elapsed': Math.round((Date.now() - self.startTime) / 1000)
                });
            }
        });
    },

    trackTimeOnPage: function() {
        var self = this;
        var intervals = [30, 60, 120, 300];
        var sent = [];

        setInterval(function() {
            var elapsed = Math.round((Date.now() - self.startTime) / 1000);

            intervals.forEach(function(seconds) {
                if (elapsed >= seconds && sent.indexOf(seconds) === -1) {
                    sent.push(seconds);
                    if (typeof gtag === 'function') {
                        gtag('event', 'time_on_page', {
                            'seconds': seconds,
                            'visitor_org': self.visitor.company || 'unknown',
                            'sections_viewed': self.sectionsViewed.join(','),
                            'max_scroll': self.maxScroll
                        });
                    }
                }
            });
        }, 5000);

        window.addEventListener('beforeunload', function() {
            if (typeof gtag === 'function') {
                gtag('event', 'visit_summary', {
                    'total_seconds': Math.round((Date.now() - self.startTime) / 1000),
                    'visitor_org': self.visitor.company || 'unknown',
                    'visitor_city': self.visitor.city || 'unknown',
                    'sections_viewed': self.sectionsViewed.join(','),
                    'max_scroll': self.maxScroll,
                    'clicks': self.clicks.join(','),
                    'language': currentLang || 'fr',
                    'referrer': document.referrer || 'direct'
                });
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        tracker.init();
    }, 500);
});
