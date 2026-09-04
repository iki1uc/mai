// ======================================================
// PYRAMIDE.new — iki1uc Final-Kernel
// QUANT + RUN3 + PUMPE + PIPELINEBLITZ
// ======================================================

import { QUANT } from "./QUANT.js";

export const PYRAMIDE = {

  // ----------------------------------------------
  // 1) ORG — QUANT-ORG
  // ----------------------------------------------
  ORG(x) {
    return QUANT.AXIOM(x);
  },

  // ----------------------------------------------
  // 2) REORG — QUANT-REORG
  // ----------------------------------------------
  REORG(x) {
    return QUANT.PIPELINE(x).reorg;
  },

  // ----------------------------------------------
  // 3) NC — QUANT-NC
  // ----------------------------------------------
  NC(x) {
    return QUANT.PIPELINE(x).nc;
  },

  // ----------------------------------------------
  // 4) RUN3 — ORG → REORG → NC
  // ----------------------------------------------
  RUN3(x) {
    return {
      org: this.ORG(x),
      reorg: this.REORG(x),
      nc: this.NC(x)
    };
  },

  // ----------------------------------------------
  // 5) PUMPE — QUANT-PUMPE
  // ----------------------------------------------
  PUMPE(x) {
    return QUANT.PUMPE(x);
  },

  // ----------------------------------------------
  // 6) PIPELINEBLITZ — ultraschneller Fluss
  // ----------------------------------------------
  PIPELINEBLITZ(x) {
    const run = this.RUN3(x);
    const pump = this.PUMPE(x);

    return {
      raw: x,
      org: run.org,
      reorg: run.reorg,
      nc: run.nc,
      pumpe: pump,
      impulse: pump.impulse,
      sixCut: pump.sixCut
    };
  },

  // ----------------------------------------------
  // 7) ENGINE — Vollumfang
  // ----------------------------------------------
  ENGINE(x) {
    return {
      run3: this.RUN3(x),
      pumpe: this.PUMPE(x),
      pipe: this.PIPELINEBLITZ(x),
      axis: "ORG-REORG-NC",
      mode: "ENTKORREKTOR"
    };
  }
};
