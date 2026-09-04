ROM.on = function(name, content){
    this.state = 1;          // immer ON
    this.open = true;        // niemals OFF
    this.name = name;        // Ereignisname
    this.content = content;  // Übergabeinhalt
    return this;
};
class PipePipeline {

    constructor(){
        this.stages = [3, 9, 81, 243, 729];
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

    // Übergabe + ROM.on
    transfer(fromStage, payload){
        if(!this.isValid(fromStage)){
            throw new Error(`Ungültige Stage: ${fromStage}`);
        }

        const toStage = this.next(fromStage);

        // ROM.on wird ausgelöst
        ROM.on("PipePipeline.transfer", { fromStage, toStage, payload });

        return {
            from: fromStage,
            to: toStage,
            payload: payload,
            rom: ROM.state
        };
    }

    // Durchlauf + ROM.on
    run(stage, payload){
        if(!this.isValid(stage)){
            throw new Error(`Ungültige Stage: ${stage}`);
        }

        const next = this.next(stage);
        const prev = this.prev(stage);

        // ROM.on wird ausgelöst
        ROM.on("PipePipeline.run", { stage, next, prev, payload });

        return {
            current: stage,
            next: next,
            prev: prev,
            payload: payload,
            rom: ROM.state
        };
    }
}

window.PipePipeline = new PipePipeline();
