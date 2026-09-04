const Game = {
    minute: 0,
    state: ROM.mind,      // aktueller Spielzug
    gpu: gpuRAW,          // Ticks
    schuss: Schuss,       // Aktionen
    axis: axis,           // Spielfluss

    tick() {
        const t = this.gpu.render();   // Spielminute
        this.minute = t.frame;

        return {
            minute: this.minute,
            lauf: t.energy,
            echo: t.echo,
            wirkung: t.effect,
            spielzug: this.state
        };
    }
};
