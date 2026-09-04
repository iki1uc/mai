// gpu.fussball.js
// Roh‑Ebene der GPU als Fußball‑Engine
// 3E-Modus = Energie, Echo, Effekt → Lauf, Pass, Wirkung

export const gpuFussball = {
    minute: 0,      // Spielminute / Frame
    lauf: 0,        // Laufleistung
    passEcho: 0,    // Rückmeldung vom Team
    wirkung: 0,     // Einfluss auf den Spielzug

    // Spieler startet im Rohzustand
    reset() {
        this.minute = 0;
        this.lauf = 0;
        this.passEcho = 0;
        this.wirkung = 0;
        return this;
    },

    // Reiner Spieltick ohne Boosts
    tick() {
        this.minute++;
        this.lauf = this.minute;
        this.passEcho = Math.floor(this.minute / 4);
        this.wirkung = Math.floor(this.minute / 12);

        return {
            minute: this.minute,
            lauf: this.lauf,
            passEcho: this.passEcho,
            wirkung: this.wirkung
        };
    },

    // Fair‑Play‑Check (Schiedsrichter)
    fair() {
        return this.lauf >= 0 && this.passEcho >= 0 && this.wirkung >= 0;
    }
};
