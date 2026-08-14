/**
 * ============================================
 *  CONFIG SMART LINK — MODIFICA SOLO QUESTO FILE
 * ============================================
 * Per ogni nuovo singolo/release, copia il progetto
 * intero e cambia solo i valori qui sotto.
 */

const SMART_LINK_CONFIG = {

  // --- INFO RELEASE ---
  trackTitle: "Curve Magiche",
  artistName: "Wet Shapo",

  // --- IMMAGINI ---
  // Metti i file dentro /assets/images/
  coverCardImage: "assets/images/cover-card.png",  // cover già stilizzata (bordo+glow) usata nella card
  coverRawImage: "assets/images/cover-raw.jpg",     // cover pulita, usata per condivisioni social (og:image)
  bgGlowImage: "assets/images/bg-glow.png",         // glow sfocato di sfondo
  signatureImage: "assets/images/signature.png",    // la firma "Wet Shapo" in alto a sx

  // --- SOCIAL ---
  instagram: {
    username: "@wetshapo",
    url: "https://instagram.com/wetshapo"
  },

  // --- PIATTAFORME STREAMING ---
  // "url": "#" = placeholder, sostituisci col link vero appena ce l'hai
  // "icon": path del logo ufficiale (in /assets/icons/)
  // "hasWordmark": true se il file contiene già il nome scritto (es. "Spotify"),
  //                false se è solo l'icona/glifo e serve aggiungere il nome a fianco
  platforms: [
    {
      name: "Spotify",
      icon: "assets/icons/spotify.png",
      hasWordmark: true,
      url: "https://open.spotify.com/album/7rhLbyRkx2QgjTZiRvUXgE?uid=7798987aeb32abf83f4e&uri=spotify%3Atrack%3A004NPpo6ZPNtiVC9mZFt8g
          ",
      enabled: true
    },
    {
      name: "YouTube",
      icon: "assets/icons/youtube.png",
      hasWordmark: true,
      iconHeight: 48,
      iconOffsetX: -15,
      iconMaxWidth: 220,
      buttonLabel: "Guarda ora",
      url: "https://www.youtube.com/watch?v=f2KRKc359rI",
      enabled: true
    },
    {
      name: "Apple Music",
      icon: "assets/icons/apple-music.svg",
      hasWordmark: false,
      url: "Spotify: https://open.spotify.com/album/7rhLbyRkx2QgjTZiRvUXgE?uid=7798987aeb32abf83f4e&uri=spotify%3Atrack%3A004NPpo6ZPNtiVC9mZFt8g

Apple Music: https://music.apple.com/it/album/curve-magiche/6792318206?i=6792318207&l=en-GB

Amazon music: https://music.amazon.it/tracks/B0H9FPGTTJ/?ref=dm_sh_37ZS58hEk4TVURMwzoDgAx9NJ

Youtube: watch",
      enabled: true
    },
    {
      name: "Amazon Music",
      icon: "assets/icons/amazon-music.svg",
      hasWordmark: true,
      url: "Spotify: https://open.spotify.com/album/7rhLbyRkx2QgjTZiRvUXgE?uid=7798987aeb32abf83f4e&uri=spotify%3Atrack%3A004NPpo6ZPNtiVC9mZFt8g

Apple Music: https://music.apple.com/it/album/curve-magiche/6792318206?i=6792318207&l=en-GB

Amazon music: https://music.amazon.it/tracks/B0H9FPGTTJ/?ref=dm_sh_37ZS58hEk4TVURMwzoDgAx9NJ

Youtube: watch",
      enabled: true
    }
  ],

  // --- COLORI TEMA (dal design Figma) ---
  theme: {
    glowLeft: "#851E29",   // rosso
    glowRight: "#3B2A64",  // viola
    background: "#000000"
  }
};
