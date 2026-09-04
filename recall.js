const rawEnergy = MassHW.calcEnergie(TimeHW.delta);

// Saubere Übergabe: bios → bio
const bioEnergy = rawEnergy / 7;

// Bio‑Slots
const natura = {
    o2: bioEnergy * 3,      // Energie / Feuer
    h2o: bioEnergy * 2,     // Stabilität / ICE
    co2: bioEnergy * 1,     // Druck / Gefahr
    axis: bioEnergy * 1     // A81‑Stabilität
};

// Runen‑Übergabe
const runes = {
    slide: natura.o2,       // Bewegung
    wette: natura.co2,      // Risiko
    score: natura.axis      // Ergebnis / Abschluss
};
