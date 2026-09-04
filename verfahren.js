class PUMPE {
    constructor(){
        this.wasser = 0;
        this.o2 = 0;
        this.co2 = 0;
        this.atom = 0;
    }

    // NATURA – Grundwerte
    natur(x){
        this.wasser = x * 0.33;      // Stabilität
        this.o2     = x * 0.12;      // Energie
        this.co2    = x * 0.08;      // Rückfluss
        this.atom   = Math.sqrt(x);  // Strukturwechsel
        return this.output();
    }

    // OMNI – Fusion aller vier
    omni(x){
        this.wasser = x * 0.33;
        this.o2     = x * 0.12;
        this.co2    = x * 0.08;
        this.atom   = Math.sqrt(x) * 1.5;
        return this.output();
    }

    // Djinn – reaktiv
    djinn(x){
        this.wasser = x * 0.20;
        this.o2     = x * 0.18;
        this.co2    = x * 0.10;
        this.atom   = Math.sqrt(x) * 0.9;
        return this.output();
    }

    // Atlanter – stabil
    atlanter(x){
        this.wasser = x * 0.40;
        this.o2     = x * 0.10;
        this.co2    = x * 0.05;
        this.atom   = Math.sqrt(x) * 0.7;
        return this.output();
    }

    // Atalar – Erinnerung
    atalar(x){
        this.wasser = x * 0.25;
        this.o2     = x * 0.15;
        this.co2    = x * 0.12;
        this.atom   = Math.sqrt(x) * 1.2;
        return this.output();
    }

    // Ausgabe
    output(){
        return {
            wasser: this.wasser,
            o2: this.o2,
            co2: this.co2,
            atom: this.atom,
            energie: this.o2 - this.co2 + this.atom,
            stabil: this.wasser - this.co2,
            tag: "PUMPE"
        };
    }
}

window.PUMPE = new PUMPE();
