// Popola la pagina usando i dati da config.js
// Non serve toccare questo file per i futuri singoli.

document.addEventListener("DOMContentLoaded", () => {
  const cfg = SMART_LINK_CONFIG;

  // Titoli
  document.getElementById("track-title").textContent = cfg.trackTitle;
  document.getElementById("artist-name").textContent = cfg.artistName;
  document.title = `${cfg.trackTitle} — ${cfg.artistName}`;

  // Immagini
  document.getElementById("cover").src = cfg.coverCardImage;
  document.getElementById("cover").alt = `Cover di ${cfg.trackTitle}`;
  document.getElementById("signature").src = cfg.signatureImage;
  document.getElementById("signature").alt = `Firma ${cfg.artistName}`;

  // Instagram
  const igLink = document.getElementById("instagram-link");
  igLink.href = cfg.instagram.url;
  document.getElementById("instagram-username").textContent = cfg.instagram.username;

  // Tema colori (variabili CSS)
  document.documentElement.style.setProperty("--glow-left", cfg.theme.glowLeft);
  document.documentElement.style.setProperty("--glow-right", cfg.theme.glowRight);
  document.documentElement.style.setProperty("--bg", cfg.theme.background);
  document.documentElement.style.setProperty("--bg-glow-image", `url("${cfg.bgGlowImage}")`);

  // Card piattaforme
  const card = document.getElementById("platforms-card");
  cfg.platforms
    .filter(p => p.enabled)
    .forEach(platform => {
      const row = document.createElement("a");
      row.className = "platform-row";
      row.href = platform.url;
      row.target = "_blank";
      row.rel = "noopener";

      const left = document.createElement("div");
      left.className = "platform-left";

      const img = document.createElement("img");
      img.className = "platform-icon";
      img.src = platform.icon;
      img.alt = platform.name;
      // Override opzionali per singola piattaforma (usati solo da YouTube per ora,
      // il file ufficiale ha spazio vuoto interno che lo fa apparire più piccolo/spostato).
      // Se un'altra piattaforma non ha questi campi in config.js, qui non succede nulla
      // e resta tutto come prima.
      if (platform.iconHeight) img.style.height = `${platform.iconHeight}px`;
      if (platform.iconOffsetX) img.style.marginLeft = `${platform.iconOffsetX}px`;
      if (platform.iconMaxWidth) img.style.maxWidth = `${platform.iconMaxWidth}px`;
      // Se l'icona ufficiale non è ancora stata caricata in /assets/icons,
      // mostra il nome della piattaforma come fallback invece di un'immagine rotta.
      img.onerror = () => {
        img.remove();
        const fallback = document.createElement("div");
        fallback.className = "platform-icon-fallback";
        fallback.textContent = platform.name;
        left.prepend(fallback);
      };

      left.appendChild(img);

      if (!platform.hasWordmark) {
        const label = document.createElement("span");
        label.className = "platform-name";
        label.textContent = platform.name;
        left.appendChild(label);
      }

      const btn = document.createElement("span");
      btn.className = "btn-listen";
      btn.textContent = platform.buttonLabel || "Ascolta ora";

      row.appendChild(left);
      row.appendChild(btn);
      card.appendChild(row);
    });
});
