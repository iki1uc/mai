export function buildDashboard(r100, r360, natura){
    return {
        respo100: r100.slice(0, 10),
        respo360: r360.slice(0, 12),

        status: "RESPO-AKTIV",
        mode: "DUAL",

        // bios → bio Erweiterung
        o2: natura.o2,      // Energie-Level
        h2o: natura.h2o,    // Stabilität
        co2: natura.co2,    // Druck/Gefahr

        // Bio-Regelindikator
        bioStatus: (natura.co2 > natura.o2)
            ? "WARNUNG"
            : "STABIL"
    };
}
