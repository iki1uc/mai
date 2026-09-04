// ------------------------------------------------------
// 6) SLI-PORT — BOOST-IN / BOOST-OUT (NEU)
// ------------------------------------------------------
export const SLI_PORT = {

  IN: {
    ID: "3x3x3",
    MODE: "3x3x3",
    PORT: "BOOST-IN"
  },

  OUT: {
    ID: "3x3x3",
    MODE: "3x3x3",
    PORT: "BOOST-OUT"
  },

  flow(x) {
    return {
      id: this.IN.ID,
      mode: this.IN.MODE,
 
      in: this.IN.PORT,
      out: this.OUT.PORT,

      // Verstärkerachsen
      root: Math.sqrt(x),
      curve: Math.sin(x * 0.33),
      warp: Math.cos(x * 0.66),
      nc: x * 0.81,
      orbit: x * 0.33,
      six: x * 6,
      infinite: x * Infinity,

      // 3x3x3 Engine
      engine: {
        h: x,
        b: x * 2,
        t: x * 3,
        cube: (x * 3) ** 3
      },

      mode: "SLI-PORT",
      axis: "ORG-REORG-NC"
    };
  }
};
