# Journal des décisions — odetourdubois

---

## 2026-05-31 — Lightbox : maximisation de l'image

**Contexte :** Dans la lightbox des pages Sculptures, l'image affichée était trop petite par rapport à l'espace disponible. Les contraintes `max-width: 90vw` et `max-height: 82vh` ne suffisaient pas car elles limitent sans forcer le grossissement, et l'image restait à sa taille naturelle.

**Décision :** Refonte du layout de la lightbox :
- `#lb-content` → `position: absolute; top: 2.5rem; bottom: 0.5rem; left: 4rem; right: 4rem` pour occuper tout l'espace disponible (en laissant de la place au bouton fermer et aux flèches de navigation)
- `#lb-content` → `display: flex; flex-direction: column; align-items: center; justify-content: center`
- `#lb-img` → `flex: 1; min-height: 0; min-width: 0; max-width: 100%; object-fit: contain` pour forcer l'image à remplir la hauteur disponible tout en respectant les proportions
- `#lb-caption` → `flex-shrink: 0` pour que la légende ne soit pas écrasée

**Conséquences :** L'image occupe désormais la quasi-totalité de la surface d'affichage de la lightbox, quelle que soit la taille de l'écran, tout en conservant les proportions d'origine.

---

## 2026-05-31 — Navigation : taille de police

**Contexte :** La police du header dans la version refaite était trop petite (0.875rem) comparée au site original iWeb, qui affiche un nav plus lisible sur deux lignes.

**Décision :** Uniformiser la taille de police du nav à `1.2rem` pour tous les thèmes. Les surcharges par thème (`font-size: 0.8rem` sur light et cream) ont été supprimées.

**Conséquences :** Le nav se comporte de façon cohérente entre les thèmes et se rapproche visuellement de l'original.

---

## 2026-05-31 — Page d'accueil : layout vertical

**Contexte :** L'image de la page d'accueil (funambule.jpg) n'occupait pas correctement l'espace vertical disponible : trop petite, avec beaucoup d'espace vide en haut et en bas.

**Décision :** Refonte du layout en flex column full-height :
- `html, body` → `height: 100%` + `body` en `flex-direction: column`
- `main` → `flex: 1; min-height: 0` pour prendre tout l'espace restant sous le nav
- `.welcome` → `height: 100%`, colonne flex avec `justify-content: center`
- `.image-wrap` → `flex: 1; min-height: 0` (le `min-height: 0` est indispensable pour permettre au flex child de se réduire en dessous de sa taille naturelle)
- `.hero` → `height: 100%; max-height: 100%; width: auto; object-fit: contain` pour remplir la hauteur allouée
- Marge haut/bas via `padding: 2.5rem 0` sur `.welcome`

**Conséquences :** L'image occupe précisément la hauteur disponible entre le nav et le logo, quelle que soit la résolution de l'écran. Le `padding` de `.welcome` garantit un espace visuel en haut et en bas.

---

## 2026-05-31 — Pages secondaires : thème unifié dark

**Contexte :** Les pages Salle exposition (cream), Expositions (light), Biographie (light) et Contact (white) utilisaient des thèmes différents des pages sculptures, créant une incohérence visuelle.

**Décision :** Passage de toutes ces pages en `theme="dark"` (fond noir) pour uniformiser avec les pages sculptures. Les couleurs de texte de la page Contact ont été adaptées au fond sombre (gris clairs au lieu de bruns/gris foncés).

**Conséquences :** Cohérence visuelle sur l'ensemble du site. Toutes les pages partagent le même fond noir.

---

## 2026-05-31 — Pages secondaires : layout vertical centré

**Contexte :** Les pages Salle exposition, Expositions et Biographie affichaient leur image en haut à gauche sans centrage, contrairement à la page Bienvenue qui centre l'image verticalement.

**Décision :** Application du même pattern flex full-height que la page Bienvenue :
- `main` dans Layout.astro → `display: flex; flex-direction: column` (correction structurelle indispensable)
- `.page-content` et `.welcome` → `flex: 1; min-height: 0` (au lieu de `height: 100%` qui ne se résolvait pas sans flex parent)
- `.image-wrap` → `flex: 1; min-height: 0` + flex centré
- `.page-img` → `height: 100%; max-height: 100%; width: auto; object-fit: contain`
- `padding: 2.5rem 0` sur `.page-content` pour les marges haut/bas

**Conséquences :** L'image est centrée verticalement et occupe toute la hauteur disponible sous le nav, cohérent avec la page Bienvenue. La correction de `main` en flex container bénéficie à toutes les pages actuelles et futures.

---

## 2026-05-31 — Biographie & Expositions : hauteur maximale de l'image

**Contexte :** Sur les grandes résolutions, l'image pouvait s'étirer au-delà d'une taille lisible.

**Décision :** `max-height: min(100%, 1050px)` sur `.page-img` dans biographie.astro et expositions.astro — l'image ne dépasse jamais la hauteur disponible ET ne dépasse jamais 1050px.

**Conséquences :** Affichage maîtrisé sur grands écrans tout en conservant le comportement fluid sur petits écrans.

---

## 2026-05-31 — Contact : taille de police du mail et téléphone

**Contexte :** Le mail et le téléphone étaient affichés en `1rem`, trop petit par rapport au reste de la page.

**Décision :** Police passée à `1.4rem` sur `.contact-info`.

**Conséquences :** Meilleure lisibilité et meilleure hiérarchie visuelle sur la page Contact.
