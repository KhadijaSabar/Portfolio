function createSkillCard(skill) {
    return `
        <div class="skill-card animate-on-scroll">
            <div class="skill-header">
                <span class="skill-icon">${skill.icon}</span>
                <h3 class="skill-title">${skill.category}</h3>
            </div>
            <ul class="skill-list">
                ${skill.technologies.map(tech => `
                    <li class="skill-item">
                        <span class="skill-bullet"></span>
                        ${tech}
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

function createProjectCard(project) {
    let badgeHTML = '';
    if (project.status === 'in-progress') {
        badgeHTML = '<div class="in-progress-badge">En cours</div>';
    } else if (project.featured) {
        badgeHTML = '<div class="featured-badge">Projet Vedette</div>';
    }

    return `
        <div class="project-card animate-on-scroll ${project.featured ? 'featured' : ''} ${project.status === 'in-progress' ? 'in-progress' : ''}">
            ${badgeHTML}
            <div class="project-icon">
                <span>⟡</span>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => `
                    <span class="tech-tag">${tech}</span>
                `).join('')}
            </div>
            <div class="project-links">
                ${project.github ? `
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                        <span class="link-icon">→</span>
                        GitHub
                    </a>
                ` : ''}
                ${project.demo ? `
                    <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link">
                        <span class="link-icon">↗</span>
                        Demo
                    </a>
                ` : ''}
            </div>
        </div>
    `;
}

function createContactCard(contact) {
    return `
        <a href="${contact.link}" class="contact-card animate-on-scroll" target="${contact.type !== 'email' && contact.type !== 'phone' ? '_blank' : '_self'}" rel="noopener noreferrer">
            <div class="contact-icon">${contact.icon}</div>
            <div class="contact-info">
                <p class="contact-label">${contact.label}</p>
                <p class="contact-value">${contact.value}</p>
            </div>
        </a>
    `;
}

function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (skillsGrid) {
        skillsGrid.innerHTML = skills.map(skill => createSkillCard(skill)).join('');
    }
}

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
    }
}

function renderContact() {
    const contactGrid = document.getElementById('contactGrid');
    if (contactGrid) {
        contactGrid.innerHTML = contactMethods.map(contact => createContactCard(contact)).join('');
    }
}

function initComponents() {
    renderSkills();
    renderProjects();
    renderContact();
}
