const t = TimeHW.update();
const PFAD = [3, 9, 81, 27, 3];

const axis = PFAD[Math.floor((t.elapsed / 1000) % PFAD.length)];

const sync = arg.sync(axis);

Pipeline9.useA81(sync);
