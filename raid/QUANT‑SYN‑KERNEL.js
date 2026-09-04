// ======================================================
// QUANT‑SYN‑KERNEL.js — iki1uc / ENTKORREKTOR
// ======================================================

// ----------------------------------------------
// QUANT — Grundwerte
// ----------------------------------------------
export const QUANT = {
  q1: 1,
  q3: 3,
  q6: 6,
  q9: 9,
  q18: 18,
  q27: 27,
  q64: 64,
  q128: 128
};

// ----------------------------------------------
// SYN — Synchronisationsflags
// ----------------------------------------------
export const SYN = {
  ALL: true,
  ULTRA: false,       // entkorrigiert
  ENGINE: true,
  MATRIX: true,
  AXIOM: true
};

// ----------------------------------------------
// 1) QUANT‑AXIOM — reine ORG‑Achse
// ----------------------------------------------
export function QUANT_AXIOM(x) {
  return x; // ENTKORREKTOR: reine ORG‑Achse
}

// ----------------------------------------------
// 2) QUANT‑PUMPE — Antrieb / Impuls
// ----------------------------------------------
export function QUANT_PUMPE(x) {
  const sixCut = x / 6;
  return {
    sixCut,
    impulse: sixCut * 0.33,
    orbit: x * 0.33
  };
}

// ----------------------------------------------
// 3) QUANT‑PIPELINE — ORG → REORG → NC
// ----------------------------------------------
export function QUANT_PIPELINE(x) {
  return {
    raw: x,
    org: x,
    reorg: x * 0.33,
    nc: x * 0.81
  };
}

// ----------------------------------------------
// 4) QUANT‑NC — Tiefenachse
// ----------------------------------------------
export function QUANT_NC(x) {
  return x * 0.81;
}

// ----------------------------------------------
// 5) QUANT‑RUN3 — Dreifachlauf
// ----------------------------------------------
export function QUANT_RUN3(x) {
  return {
    org: QUANT_AXIOM(x),
    reorg: x * 0.33,
    nc: x * 0.81
  };
}

// ----------------------------------------------
// 6) QUANT‑ENGINE — Vollumfang
// ----------------------------------------------
export function QUANT_ENGINE(x) {
  return {
    axiom: QUANT_AXIOM(x),
    pumpe: QUANT_PUMPE(x),
    pipe: QUANT_PIPELINE(x),
    run3: QUANT_RUN3(x),
    nc: QUANT_NC(x)
  };
}
