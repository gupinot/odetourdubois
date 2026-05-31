# Journal des décisions — odetourdubois

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
