const personalInfo = {
    name: "Khadija Sabar",
    title: { fr: "Ingénieure Full Stack & Mobile", en: "Full Stack & Mobile Engineer" },
    email: "ksabar179@gmail.com",
    phone: "+1 613-360-2425",
    github: "https://github.com/KhadijaSabar",
    linkedin: "https://www.linkedin.com/in/khadija-sabar-03b4b5207/",
    location: { fr: "Québec et Ontario, Canada", en: "Quebec and Ontario, Canada" }
};

const skills = [
    {
        category: { fr: "Frontend & Mobile", en: "Frontend & Mobile" },
        icon: "▣",
        technologies: ["React", "Flutter", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"]
    },
    {
        category: { fr: "Backend & Langages", en: "Backend & Languages" },
        icon: "◈",
        technologies: ["Java", "Python", "C#", ".NET", "Node.js", "Django", "PHP", "C++", "C"]
    },
    {
        category: { fr: "Architecture & DevOps", en: "Architecture & DevOps" },
        icon: "◉",
        technologies: ["Microservices", "Eureka (Netflix OSS)", "Docker", "DevOps", "CI/CD", "Git", "GitHub"]
    },
    {
        category: { fr: "Base de données", en: "Databases" },
        icon: "▦",
        technologies: ["MySQL", "PostgreSQL", "SQL", "Database Design"]
    }
];

const projects = [
    {
        title: "Real-time Monitoring Dashboard",
        description: {
            fr: "Application full-stack de monitoring système en temps réel avec WebSocket, affichant CPU, RAM et disque avec graphiques interactifs.",
            en: "Full-stack real-time system monitoring application with WebSocket, displaying CPU, RAM and disk usage with interactive charts."
        },
        technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Python"],
        github: "https://github.com/KhadijaSabar/realtime-monitoring-dashboard",
        demo: null,
        image: null,
        featured: true,
        status: "completed"
    },
    {
        title: "CanadaHotels - Réservation d'Hôtels",
        titleEn: "CanadaHotels - Hotel Booking",
        description: {
            fr: "Application mobile Flutter de réservation d'hôtels de luxe au Canada avec authentification JWT, recherche en temps réel, filtres avancés, système de réservation complet et gestion de profil utilisateur.",
            en: "Flutter mobile application for luxury hotel booking in Canada with JWT authentication, real-time search, advanced filters, complete booking system and user profile management."
        },
        technologies: ["Flutter", "Dart", "Node.js", "PostgreSQL", "JWT", "Provider"],
        github: "https://github.com/KhadijaSabar/canada-hotels-app",
        demo: null,
        image: null,
        featured: true,
        status: "completed"
    },
    {
        title: "Architecture Unifiée Django-Java",
        titleEn: "Unified Django-Java Architecture",
        description: {
            fr: "Intégration d'applications Django et Java Spring Boot via microservices pour infrastructure DevOps chez Atos.",
            en: "Integration of Django and Java Spring Boot applications via microservices for DevOps infrastructure at Atos."
        },
        technologies: ["Django", "Java", "Spring Boot", "Microservices"],
        github: null,
        demo: null,
        image: null,
        featured: false,
        status: "in-progress"
    }
];

const contactMethods = [
    {
        type: "email",
        label: "Email",
        value: personalInfo.email,
        link: `mailto:${personalInfo.email}`,
        icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>`
    },
    {
        type: "phone",
        label: { fr: "Téléphone", en: "Phone" },
        value: personalInfo.phone,
        link: `tel:${personalInfo.phone}`,
        icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a.994.994 0 011.02-.24c1.12.45 2.33.69 3.57.69.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.24 2.45.68 3.57.11.37.03.77-.25 1.02l-2.2 2.2z"/></svg>`
    },
    {
        type: "github",
        label: "GitHub",
        value: "@KhadijaSabar",
        link: personalInfo.github,
        icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
    },
    {
        type: "linkedin",
        label: "LinkedIn",
        value: "Khadija Sabar",
        link: personalInfo.linkedin,
        icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
    }
];

let currentLang = 'fr';
