// ======================================================
// SYN.js — Imperium-SYN / N-Sequenzen / Physik / Mathe
// ======================================================

// 1) N-SEQUENZEN — Imperium-Daten
export const SYN_N = [
  { N:10, NC:"D", H:1, B:2,  T:3,  ID:10, RAW:"ULTRA-U" },
  { N:20, NC:"N", H:2, B:4,  T:6,  ID:20, RAW:"ULTRA-U" },
  { N:30, NC:"B", H:3, B:6,  T:9,  ID:30, RAW:"ULTRA-U" },
  { N:40, NC:"K", H:4, B:8,  T:12, ID:40, RAW:"ULTRA-U" },
  { N:50, NC:"I", H:5, B:10, T:15, ID:50, RAW:"ULTRA-U" },
  { N:60, NC:"X", H:6, B:12, T:18, ID:60, RAW:"ULTRA-U" },
  { N:70, NC:"M", H:7, B:14, T:21, ID:70, RAW:"ULTRA-U" },
  { N:80, NC:"S", H:8, B:16, T:24, ID:80, RAW:"ULTRA-U" },
  { N:90, NC:"U", H:9, B:18, T:27, ID:90, RAW:"ULTRA-U" }
];

// 2) PHYSIK — echte Achsen
export const SYN_PHYSIK = {
  ROOT: x => Math.sqrt(x),
  CURVE: x => Math.sin(x * 0.33),
  WARP: x => Math.cos(x * 0.66),
  SIX: x => x * 6,
  INFINITY: x => x * Infinity
};

// 3) MATHE — Imperium-Formeln
export const SYN_MATHE = {
  NC: x => x * 0.81,
  ORBIT: x => x * 0.33,
  CUBE3: x => x ** 3,
  ZOOM: x => x * 0.33,
  NC_ZOOM: x => x * 0.81
};

// 4) RUN — Lebensläufe
export const SYN_RUN = {
  RUN21: x => ({
    energy: x * 0.5,
    pipeline: x / 21,
    nc: x * 0.81,
    orbit: x * 0.33
  }),
