# Portfolio - Khadija Sabar

Mon portfolio pour présenter mes compétences et projets en développement full-stack et mobile.

🌐 **[Voir le site en ligne](https://portfolio-ten-eta-tun2euy5sd.vercel.app/)**

## Aperçu

Site one-page responsive avec :
- Design dark mode, thème cyan/bleu
- Traduction français / anglais
- Animations au scroll
- Navigation fluide + menu hamburger mobile
- Zéro dépendance, tout en vanilla JS/CSS

## Structure

```
Portfolio/
├── index.html
├── images/
│   └── canada-flag.png
├── scripts/
│   ├── data.js             # Données (infos, projets, compétences)
│   ├── components.js       # Génération dynamique des cartes
│   └── main.js             # Nav, scroll, animations, traduction
└── styles/
    ├── main.css            # Styles + responsive
    └── animations.css      # Keyframes
```

## Stack

- HTML5
- CSS3 (Variables, Grid, Flexbox, Media Queries)
- JavaScript ES6+ (IntersectionObserver, DOM)
- Déployé sur Vercel (auto-deploy depuis GitHub)

## Fonctionnalités principales

**Traduction FR/EN** — Bouton dans la navbar. Utilise `data-fr` / `data-en` sur le HTML statique et des objets bilingues dans `data.js` pour le contenu dynamique.

**Contenu dynamique** — Les sections Compétences, Projets et Contact sont générées par JS depuis `data.js`. Ajouter un projet = modifier un tableau.

**Responsive** — CSS Grid `auto-fit` + media queries. Menu hamburger sur mobile.

## Personnalisation

Modifier les projets dans `scripts/data.js` :
```javascript
{
    title: "Mon Projet",
    description: { fr: "...", en: "..." },
    technologies: ["React", "Node.js"],
    github: "https://github.com/...",
    featured: true,
    status: "completed"
}
```

Changer les couleurs dans `styles/main.css` :
```css
:root {
    --primary: #06b6d4;
    --secondary: #3b82f6;
}
```

## Déploiement

Auto-deploy sur Vercel à chaque push sur `main`. HTML/CSS/JS statique, aucune config spéciale.

## Contact

- Email : ksabar179@gmail.com
- GitHub : [@KhadijaSabar](https://github.com/KhadijaSabar)
- LinkedIn : [Khadija Sabar](https://www.linkedin.com/in/khadija-sabar-03b4b5207/)
