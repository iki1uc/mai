const axis = A81_AXIS.build({
    wasser: PUMPE.wasser(81),
    o2:     PUMPE.o2(81),
    co2:    PUMPE.co2(81),
    atom:   PUMPE.atom(81)
});

Pipeline9.useA81(axis);
