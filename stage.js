class Stage {

    constructor(){
        this.stage = null;

        // PFAD-Matrix (bios → bio)
        this.matrix = [3, 9, 81, 243, 729];
    }

    // Stage erkennen
    detect(size){
        if(!this.matrix.includes(size)){
            throw new Error(`Unbekannte Stage-Größe: ${size}`);
        }
        return size;
    }

    // Stage setzen + NATURA + arg.sync + PUMPE
    set(size){
        const stage = this.detect(size);
        this.stage = stage;

        // NATURA (bios)
        this.natura = PUMPE.natur(stage);

        // arg.sync (bio)
        this.sync = arg.sync(stage);

        // PFAD (3→9→81→243→729→3)
        this.next = this.nextStage(stage);
        this.prev = this.prevStage(stage);

        // Zeitfluss
        this.time = TimeHW.update();

        return this.output();
    }

    // PFAD: nächste Stage
    nextStage(stage){
        const index = this.matrix.indexOf(stage);
        return this.matrix[index + 1] || 3; // ↺ Reset
    }

    // PFAD: vorherige Stage
    prevStage(stage){
        const index = this.matrix.indexOf(stage);
        return index > 0 ? this.matrix[index - 1] : 729; // Rückführung
    }

    // Ausgabe
    output(){
        return {
            stage: this.stage,
            next: this.next,
            prev: this.prev,
            natura: this.natura,
            sync: this.sync,
            time: this.time,
            tag: "Stage.bio"
        };
    }

    // Stage holen
    get(){
        return this.output();
    }
}

window.Stage = new Stage();
