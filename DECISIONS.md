# DECISIONS.md

Ce fichier trace les décisions importantes prises sur le projet `odetourdubois`.

## Format

Chaque décision suit ce format :

```
## [DATE] Titre de la décision

**Contexte :** pourquoi cette décision a été nécessaire.
**Décision :** ce qui a été choisi.
**Conséquences :** impact attendu.
```

---

## [2026-05-31] Stack technique : Astro

**Contexte :** Recréation d'un site iWeb statique de 9 pages (galeries photos, pages informatives). React jugé excessif pour ce volume et ce niveau d'interactivité.
**Décision :** Astro avec build statique, zéro framework JS côté client.
**Conséquences :** Composants réutilisables (navbar, galerie), HTML/CSS pur en sortie, hébergement statique trivial (GitHub Pages, Netlify, etc.).

---

## [2026-05-31] Design responsive

**Contexte :** Le site original est en largeur fixe 700px (iWeb), non adapté aux mobiles.
**Décision :** Responsive design avec navbar burger sur mobile, galeries en grille 3→2→1 colonnes selon la largeur d'écran.
**Conséquences :** Amélioration significative de l'expérience mobile tout en conservant l'esthétique de l'original.

---

## [2026-05-31] Système de galerie avec lightbox vanilla JS

**Contexte :** iWeb utilisait un système Photocast RSS + JS propriétaire pour les galeries. Impossible à réutiliser.
**Décision :** Galerie CSS Grid + lightbox vanilla JS intégrée dans `Gallery.astro`. Navigation clavier (←/→/Esc), clic sur le fond pour fermer.
**Conséquences :** Aucune dépendance externe, performances optimales, UX améliorée par rapport à l'original.

---

## [2026-05-31] Système de thèmes (4 variantes)

**Contexte :** Le site original utilise 3 ambiances visuelles différentes selon les pages (fond noir, gris clair, blanc, crème).
**Décision :** Propriété `theme` dans le layout Astro avec 4 valeurs : `dark` (noir), `light` (gris #f7f6f6), `white` (blanc), `cream` (#fffded).
**Conséquences :** Fidélité visuelle à l'original, application cohérente via le layout partagé.

---

## [2026-05-31] Images hébergées localement

**Contexte :** Les images du site original sont servies via des URLs iWeb non pérennes.
**Décision :** Toutes les images (43 photos de sculptures + assets statiques) téléchargées et stockées dans `public/images/`.
**Conséquences :** Indépendance totale du site source, noms de fichiers normalisés (espaces → underscores, apostrophes supprimées).
