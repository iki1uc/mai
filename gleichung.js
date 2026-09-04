// Gleichung.js — MAI‑gerechte PUMPE

class Gleichung {

    constructor(){
        this.stage = 3;          // PFAD-Start
        this.transwarp = true;   // 3×-Pumpe
        this.continuum = false;  // Quadratische Pumpe
    }

    // PFAD-Wert setzen
    setStage(v){
        this.stage = v;
        return this.stage;
    }

    // Transwarp = Stage × 3
    transwarpStep(){
        return this.transwarp ? this.stage * 3 : this.stage;
    }

    // Continuum = Stage²
    continuumStep(){
        return this.continuum ? this.stage * this.stage : this.stage;
    }

    // MAI-Massenpumpe: Stage × Transwarp × Continuum
    massPump(){
        const t = this.transwarpStep();
        const c = this.continuumStep();

        return {
            impuls: this.stage * t,
            kraft:  t * c,
            energie: c * this.stage,
            accel: (t + c) / this.stage
        };
    }

    // Gesamter MAI-Fluss
    run(){
        const t = this.transwarpStep();
        const c = this.continuumStep();
        const m = this.massPump();

        return {
            stage: this.stage,
            transwarp: t,
            continuum: c,
            impuls: m.impuls,
            kraft: m.kraft,
            energie: m.energie,
            accel: m.accel
        };
    }
}

window.Gleichung = new Gleichung();
