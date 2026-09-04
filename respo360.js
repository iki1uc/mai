export function buildRespo360(natura, runes){
    const circle = [];

    for(let i = 0; i < 360; i++){
        const axis = i % 12;

        circle.push({
            degree: i,
            axis: axis,
            type: "CIRCLE",
            level: "360°",

            // bios → bio
            o2: natura.o2[axis],     // Energie
            h2o: natura.h2o[axis],   // Stabilität
            co2: natura.co2[axis],   // Druck

            // Runen (slide / wette / score)
            rune: runes[axis],

            // Narrativ (Feuer / ICE / Gefahr)
            narrativ:
                natura.co2[axis] > natura.o2[axis]
                    ? "GEFAHR"
                    : natura.h2o[axis] > natura.o2[axis]
                        ? "ICE"
                        : "FEUER",

            // Achsenstatus
            axisState:
                natura.co2[axis] > natura.o2[axis]
                    ? "WARNUNG"
                    : "AKTIV"
        });
    }

    return circle;
}
