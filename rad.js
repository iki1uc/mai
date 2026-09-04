ROM.on = function(name, content){
    this.state = 1;          // immer ON
    this.open = true;        // niemals OFF
    this.name = name;        // Ereignisname
    this.content = content;  // Übergabeinhalt
    return this;
};
MassHWTranswarp.set = function(qi, iqq, delta){

    // ROM.on wird automatisch ausgelöst
    ROM.on("MassHWTranswarp.set", { qi, iqq, delta });

    return {
        qi,
        iqq,
        delta,
        rom: ROM.state
    };
};
