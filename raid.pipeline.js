class RaidPipeline {

    constructor(){
        this.stages = [3, 9, 81, 243, 729];
        this.mode = "ICE";
    }

    setMode(mode){
        if(mode !== "ICE" && mode !== "FEUER"){
            throw new Error(`Ungültiger RAID-Modus: ${mode}`);
        }
        this.mode = mode;
    }

    isValid(stage){
        return this.stages.includes(stage);
    }

    next(stage){
        const index = this.stages.indexOf(stage);
        if(index === -1) throw new Error(`Ungültige Stage: ${stage}`);
        return this.stages[index + 1] || null;
    }

    prev(stage){
        const index = this.stages.indexOf(stage);
        if(index <= 0) return null;
        return this.stages[index - 1];
    }

    // RAID-Übergabe (ICE/FEUER) + ROM.on
    transfer(stage, payload){
        if(!this.isValid(stage)){
            throw new Error(`Ungültige Stage: ${stage}`);
        }

        ROM.on(); // <<< AUTO-BEFEHL

        const nextStage = this.next(stage);

        return {
            mode: this.mode,
            from: stage,
            to: nextStage,
            payload: payload,
            rom: ROM.state
        };
    }

    // RAID-Pipeline-Durchlauf + ROM.on
    run(stage, payload){
        if(!this.isValid(stage)){
            throw new Error(`Ungültige Stage: ${stage}`);
        }

        ROM.on(); // <<< AUTO-BEFEHL

        return {
            mode: this.mode,
            current: stage,
            next: this.next(stage),
            prev: this.prev(stage),
            payload: payload,
            rom: ROM.state
        };
    }
}

window.RaidPipeline = new RaidPipeline();
