// ram.bio.js – RAM mit bios→bio Übergabe
export const ramBIO = {
    buffer: [],
    energy: 0,
    echo: 0,
    effect: 0,

    o2: 0,
    h2o: 0,
    co2: 0,

    rune: {
        slide: 0,
        wette: 0,
        score: 0
    },

    axis: 0,

    reset() {
        this.buffer = [];
        this.energy = 0;
        this.echo = 0;
        this.effect = 0;

        this.o2 = 0;
        this.h2o = 0;
        this.co2 = 0;

        this.rune.slide = 0;
        this.rune.wette = 0;
        this.rune.score = 0;

        this.axis = 0;

        return this;
    },

    write(value) {
        this.buffer.push(value);

        // Rohwerte
        this.energy = this.buffer.length;
        this.echo = Math.floor(this.energy / 2);
        this.effect = Math.floor(this.energy / 4);

        // bios → bio Übergabe (/7)
        const bio = this.energy / 7;

        this.o2 = bio * 3;     // Feuer
        this.h2o = bio * 2;    // ICE
        this.co2 = bio * 1;    // Gefahr
        this.axis = bio * 1;   // A81

        // Runen
        this.rune.slide = this.o2;
        this.rune.wette = this.co2;
        this.rune.score = this.axis;

        return {
            raw: value,
            energy: this.energy,
            echo: this.echo,
            effect: this.effect,

            o2: this.o2,
            h2o: this.h2o,
            co2: this.co2,

            rune: this.rune,
            axis: this.axis
        };
    },

    read(index) {
        return this.buffer[index] ?? null;
    },

    fair() {
        return this.energy >= 0 && this.echo >= 0 && this.effect >= 0;
    }
};
