# Smart Link — Wet Shapo

Landing statica riutilizzabile per ogni nuovo singolo. HTML/CSS/JS puro, nessuna build, nessuna dipendenza.

## 📁 Struttura

```
smart-link/
├── index.html          → struttura pagina (non toccare, salvo head scripts)
├── style.css            → stile (fedele al design Figma)
├── script.js             → logica, legge config.js e genera la pagina
├── config.js            → 🔧 UNICO FILE DA MODIFICARE per ogni singolo
├── vercel.json
├── assets/
│   ├── images/
│   │   ├── cover-card.png      → cover già stilizzata (bordo+glow), usata nella card
│   │   ├── cover-raw.jpg       → cover pulita, usata per og:image (condivisioni social)
│   │   ├── bg-glow.png         → glow sfocato di sfondo
│   │   └── signature.png       → firma/logo artista
│   └── icons/
│       ├── spotify.png
│       ├── youtube.png
│       ├── apple-music.svg
│       ├── amazon-music.svg
│       └── instagram.svg
```

## 🔁 Come riutilizzarla per un nuovo singolo

1. Duplica la cartella del progetto (o il repo GitHub, vedi sotto)
2. Apri `config.js` e cambia:
   - `trackTitle`, `artistName`
   - i path immagini in `assets/images/` (sostituisci i file)
   - i link `url` di ogni piattaforma in `platforms`
   - eventualmente i colori in `theme`
3. Fatto. Non serve toccare HTML/CSS/JS.

⚠️ Le icone delle piattaforme in `assets/icons/` sono i loghi **ufficiali e non modificati**
presi dalle pagine brand asset di ciascuna piattaforma. Se un logo non include già la scritta
(es. Apple Music, che è solo icona), imposta `hasWordmark: false` in `config.js` e il nome
verrà aggiunto automaticamente a fianco. Se un file manca, la pagina mostra il nome della
piattaforma come fallback (non si rompe).

## 📊 Aggiungere Google Analytics / Meta Pixel

Apri `index.html`, cerca:

```html
<!-- HEAD_SCRIPTS_START -->

<!-- HEAD_SCRIPTS_END -->
```

Incolla lo snippet ufficiale tra questi due commenti. Non serve altro.

## 🐙 Pubblicare su GitHub

```bash
cd smart-link
git init
git add .
git commit -m "Smart link: Curve Magiche"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/NOME-REPO.git
git push -u origin main
```

Per il singolo successivo, due strade:
- **Nuovo repo**: ripeti i passaggi sopra in una nuova cartella
- **Stesso repo, branch diversi**: `git checkout -b nome-nuovo-singolo` e modifichi `config.js`

## ▲ Deploy su Vercel

1. Vai su [vercel.com](https://vercel.com) → accedi con GitHub
2. "Add New Project" → seleziona il repo appena creato
3. Framework Preset: **Other** (nessuna build necessaria)
4. Deploy

Ogni push su `main` fa un redeploy automatico. Dominio gratuito tipo `nome-progetto.vercel.app`,
oppure colleghi un dominio custom da Vercel → Settings → Domains (~10–15€/anno se lo compri altrove tipo Namecheap/GoDaddy).

## 🖼️ Note sulle immagini

- `cover.jpg` → consigliato quadrato, minimo 600x600px
- `signature.png` → PNG trasparente, la firma verrà ruotata automaticamente via CSS
