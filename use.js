const arg = {
    sync(x){
        return {
            inth:    INTH.compute(x),
            sch:     SCH.flow(x),
            djinn:   DJINN.react(x),
            atalar:  ATALAR.remember(x),
            atlanar: ATLANAR.stabilize(x),
            pump:    PUMPE.natur(x),
            axis:    A81_AXIS.build(x),
            tag:     "arg.sync"
        };
    }
};
