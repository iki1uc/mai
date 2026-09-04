class StagePipeline {

    constructor(){
        this.stages = [3, 9, 81, 243, 729];
    }

    isValid(stage){
        return this.stages.includes(stage);
    }

    next(stage){
        const index = this.stages.indexOf(stage);
        if(index === -1) throw new Error(`Ungültige Stage: ${stage}`);

        // PFAD-Reset: 729 → 3 ↺
        return this.stages[index + 1] || 3;
    }

    prev(stage){
        const index = this.stages.indexOf(stage);
        if(index <= 0) return 729; // Rückführung
        return this.stages[index - 1];
    }

    // Übergabe + PUMPE + arg.sync
    transfer(fromStage, data){
        if(!this.isValid(fromStage)){
            throw new Error(`Ungültige Stage: ${fromStage}`);
        }

        const toStage = this.next(fromStage);

        // NATURA + arg.sync + PUMPE
        const sync = arg.sync(fromStage);
        const pump = PUMPE.natur(fromStage);

        return {
            from: fromStage,
            to: toStage,
            payload: data,
            sync,
            pump,
            time: TimeHW.update()
        };
    }

    // Pipeline-Durchlauf
    run(stage){
        if(!this.isValid(stage)){
            throw new Error(`Ungültige Stage: ${stage}`);
        }

        const sync = arg.sync(stage);
        const pump = PUMPE.natur(stage);

        return {
            current: stage,
            next: this.next(stage),
            prev: this.prev(stage),
            sync,
            pump,
            time: TimeHW.update()
        };
    }
}

window.StagePipeline = new StagePipeline();
