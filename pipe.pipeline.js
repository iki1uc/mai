PumpHW.flow = function(){
    const event = ROM.name;
    const data  = ROM.content;

    // y‑Zustand erzeugen
    const y = this.computeY(event, data);

    // Fluss erzeugen
    const flow = this.route(event, y);

    return flow;
};
