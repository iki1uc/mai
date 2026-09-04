// gpu.js — MAI‑gerechte PFAD‑Pumpe

const axis = A81_AXIS.build();

// GPU‑Kern: reine PFAD‑Pipes (3 / 6 / 9 / 12)
gpu.core = {
    pipe3:  axis.pipe3,   // Mikro‑PFAD
    pipe6:  axis.pipe6,   // Übergangs‑PFAD
    pipe9:  axis.pipe9,   // Haupt‑PFAD
    pipe12: axis.pipe12   // Orbit‑PFAD
};
