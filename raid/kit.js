// ------------------------------------------------------
// ULTRA-PORT — 6a6y6out IN/OUT
// ------------------------------------------------------
export const ULTRA_PORT = {

  IN: {
    ID: "6a6y6out",
    MODE: "ULTRA-IN",
    PORT: "BOOST-IN"
  },

  OUT: {
    ID: "6a6y6out",
    MODE: "ULTRA-OUT",
    PORT: "BOOST-OUT"
  },

  flow(x) {
    return {
      id: this.IN.ID,
      mode: this.IN.MODE,
      in: this.IN.PORT,
      out: this.OUT.PORT,

      a: AXIOM["6a"](x),
      y: AXIOM["6y"](x, x),
      iy: AXIOM["6iy"](x),
      outState: AXIOM["6out"](x),

      ultra: {
        zoom: ULTRA.PREFETCH.zoom,
        achse: ULTRA.ACHSE,
        matrix: ULTRA.MATRIX,
        verdichtung: ULTRA.VERDICHTUNG
      },

      mode: "ULTRA-PORT",
      axis: "ORG-REORG-NC"
    };
  }
};
