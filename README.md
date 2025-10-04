# Site Web ETS Financier Ibn Abass Memem

Site web professionnel multi-pages pour ETS Financier Ibn Abass Memem - Services financiers au Togo.

## 🌟 Caractéristiques

- **Design Modern & Responsive** : Compatible avec tous les appareils (desktop, tablette, mobile)
- **Multi-pages** : Architecture organisée en 6 pages principales
- **Animations fluides** : Effets visuels attractifs et professionnels
- **Palette de couleurs** : Noir (#0a0a0a), Doré (#d4af37), Bleu foncé (#0f1c2e)
- **Navigation & Footer modulaires** : Système d'inclusion pour faciliter la maintenance

## 📁 Structure du Projet

```
ibnabass.com/
├── index.html              # Page d'accueil
├── apropos.html           # Page À Propos
├── services.html          # Page Services
├── actualite.html         # Page Actualités
├── agences.html           # Page Agences
├── contact.html           # Page Contact
├── _template.html         # Template pour nouvelles pages
├── includes/
│   ├── nav.html          # Navigation (à inclure)
│   └── footer.html       # Footer (à inclure)
├── statics/
│   ├── css/
│   │   └── style.css     # Styles principaux
│   ├── js/
│   │   ├── app.js        # Scripts principaux
│   │   └── includes.js   # Système d'inclusion
│   └── img/
│       └── logo.jpeg     # Logo de l'entreprise
├── bache.jpeg            # Image de présentation
└── README.md             # Ce fichier
```

## 🚀 Démarrage Rapide

### Option 1 : Utilisation avec le système d'inclusion (Recommandé)

1. **Modifier toutes les pages** pour utiliser le système d'inclusion :

Remplacer le `<nav>` par :
```html
<div id="nav-placeholder"></div>
```

Remplacer le `<footer>` et le bouton scroll-top par :
```html
<div id="footer-placeholder"></div>
```

Ajouter avant la balise `</body>` :
```html
<script src="statics/js/includes.js"></script>
<script src="statics/js/app.js"></script>
```

2. **Lancer un serveur local** :
```bash
# Avec Python 3
python -m http.server 8000

# Avec PHP
php -S localhost:8000

# Avec Node.js (http-server)
npx http-server -p 8000
```

3. Ouvrir http://localhost:8000 dans votre navigateur

### Option 2 : Utilisation directe (Sans serveur)

Ouvrir directement `index.html` dans un navigateur. Les includes ne fonctionneront pas, mais le site sera fonctionnel.

## 📄 Pages du Site

### 1. **Accueil** (`index.html`)
- Hero section avec animation
- Aperçu des services
- Section "Pourquoi nous choisir"
- Call-to-action

### 2. **À Propos** (`apropos.html`)
- Présentation de l'entreprise
- Nos valeurs
- Mission & Vision
- Statistiques animées

### 3. **Nos Services** (`services.html`)
- 6 services détaillés :
  - Épargne et Tontine
  - Transfert d'Argent
  - Keaz Spot
  - Conversion des Devises
  - Échange d'Argent
  - Services Mobile Money

### 4. **Actualité** (`actualite.html`)
- Articles d'actualités
- Newsletter inscription

### 5. **Agences** (`agences.html`)
- Localisation des agences
- Horaires d'ouverture
- Services disponibles par agence
- Section carte (à intégrer)

### 6. **Contact** (`contact.html`)
- Formulaire de contact
- Coordonnées complètes
- Quick contact (WhatsApp, Phone, Messenger)
- FAQ

## 🎨 Personnalisation

### Modifier les couleurs

Éditer les variables CSS dans `statics/css/style.css` :

```css
:root {
    --primary-black: #0a0a0a;
    --dark-blue: #0f1c2e;
    --gold: #d4af37;
    --light-gold: #f4d03f;
}
```

### Ajouter une nouvelle page

1. Copier `_template.html`
2. Renommer le fichier
3. Modifier le contenu
4. Ajouter le lien dans `includes/nav.html`

### Modifier la navigation ou le footer

Éditer directement :
- `includes/nav.html` pour la navigation
- `includes/footer.html` pour le footer

Les modifications seront automatiquement appliquées à toutes les pages.

## 🔧 Fonctionnalités JavaScript

### Animations
- Scroll animations avec Intersection Observer
- Fade-in effects
- Parallax sur hero section
- Hover effects sur les cartes

### Interactions
- Menu hamburger responsive
- FAQ accordion
- Compteurs animés (stats)
- Smooth scroll
- Bouton scroll-to-top

### Formulaires
- Contact form avec validation
- Newsletter subscription

## 📱 Responsive Design

Le site est entièrement responsive avec 3 breakpoints :

- **Desktop** : > 968px
- **Tablette** : 768px - 968px
- **Mobile** : < 768px

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec animations
- **JavaScript (Vanilla)** : Interactions sans framework
- **Font Awesome** : Icônes
- **Google Fonts** : Poppins

## 📞 Informations de Contact

- **Téléphone** : +228 92 50 69 27 / +228 94 99 52 40
- **Adresse** : Quartier Kétôm, BPN 14, Tchaoudjo - TOGO
- **Horaires** : Lundi - Samedi : 8h00 - 18h00

## 🔄 Mise à Jour

Pour mettre à jour la navigation ou le footer sur toutes les pages :

1. Modifier `includes/nav.html` ou `includes/footer.html`
2. Rafraîchir le navigateur
3. Les changements sont appliqués partout automatiquement

## 📝 Notes Importantes

- Le logo de l'entreprise est dans `statics/img/logo.jpeg`
- Les images d'actualités utilisent des URLs externes (Unsplash) - à remplacer par vos propres images
- Le formulaire de contact affiche une alerte - à connecter à un backend
- La carte Google Maps est en placeholder - à intégrer avec votre clé API

## 🚀 Déploiement

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Netlify / Vercel
Glisser-déposer le dossier complet sur leur interface

## 📄 Licence

© 2024 ETS Financier Ibn Abass Memem. Tous droits réservés.
