class Schuss {

    constructor(){
        this.ready = false;
        this.stage = null;
        this.nextStage = null;
        this.payload = null;

        // bios → bio
        this.sync = null;      // arg.sync
        this.pump = null;      // PUMPE
        this.time = null;      // TimeHW
    }

    // Zünder laden (von Flanke)
    load(flankeData){
        this.stage     = flankeData.from;
        this.nextStage = flankeData.to;
        this.payload   = flankeData;

        // NATURA + arg.sync + PUMPE + Zeitfluss
        this.sync = arg.sync(this.stage);
        this.pump = PUMPE.natur(this.stage);
        this.time = TimeHW.update();

        this.ready = true;
    }

    // Zündung ausführen
    fire(){
        if(!this.ready){
            throw new Error("Schuss nicht bereit!");
        }

        return {
            fired: true,

            // PFAD
            from: this.stage,
            to: this.nextStage,

            // Mode (ICE / FEUER)
            mode: this.payload.mode,

            // Honor-Level
            honor: this.payload.honor,

            // bios → bio
            sync: this.sync,
            pump: this.pump,
            time: this.time,

            // Originaldaten
            payload: this.payload,

            tag: "Schuss.bio"
        };
    }
}

window.Schuss = new Schuss();
