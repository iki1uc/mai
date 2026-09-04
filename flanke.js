// Flanke.js — MAI‑gerechte Übergabe‑PUMPE

class Flanke {

    constructor(){
        this.mode   = "ICE";     // ICE / FEUER
        this.stage  = null;      // PFAD-Wert
        this.target = null;      // Übergabe-Ziel
        this.honor  = null;      // Urnen-Echo
        this.hit    = false;     // Treffer-PUMPE
    }

    // Urnen-Eintrag übernehmen
    loadFromUrne(entry){
        this.stage = entry.stage;
        this.mode  = entry.element;   // ICE / FEUER
        this.honor = entry.honor;
        this.hit   = true;            // Treffer-PUMPE aktiv
    }

    // Übergabe vorbereiten
    prepare(targetStage){
        this.target = targetStage;

        return {
            mode: this.mode,
            from: this.stage,
            to: this.target,
            honor: this.honor,
            hit: this.hit
        };
    }

    // Treffer zurücksetzen
    reset(){
        this.hit = false;
    }
}

window.Flanke = new Flanke();
