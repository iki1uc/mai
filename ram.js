// ram.js – RAM mit A81‑Achse und bio‑Übergabe
const axis = A81_AXIS.build();
Verfahren.useA81(axis);

// RAM koppelt sich an die Achse
ramRAW.axis = axis;

// Bio‑Übergabe
ramRAW.bio = function(){
    const raw = this.energy;

    const bio = raw / 7; // saubere Übergabe

    return {
        o2: bio * 3,      // Feuer
        h2o: bio * 2,     // ICE
        co2: bio * 1,     // Gefahr
        axis: bio * 1,    // A81‑Stabilität

        rune: {
            slide: bio * 3,
            wette: bio * 1,
            score: bio * 1
        }
    };
};
 
