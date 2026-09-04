// ======================================================
// ANIME-QUANT — Anime-Frames statt Symbole (NEU)
// ======================================================
Engine.animeQuant = function(t){
  
  // Anime-Frame-Liste (du kannst beliebig erweitern)
  const animeFrames = [
    "ANIME-FRAME-01",
    "ANIME-FRAME-02",
    "ANIME-FRAME-03",
    "ANIME-FRAME-04",
    "ANIME-FRAME-05",
    "ANIME-FRAME-06",
    "ANIME-FRAME-07",
    "ANIME-FRAME-08",
    "ANIME-FRAME-09"
  ];

  // Frame auswählen
  const frameIndex = Math.floor((t * 10) % animeFrames.length);

  return {
    anime: animeFrames[frameIndex],
    index: frameIndex,
    axis: "ANIME-QUANT",
    mode: "ULTRA-ANIME"
  };
};
