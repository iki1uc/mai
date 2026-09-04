// ======================================================
// ORG-REORG-NC Pipeline — iki1uc Final-Kernel
// ======================================================

export const PIPE = {

  // -----------------------------
  // 1) ORG — Rohachse
  // -----------------------------
  ORG(x) {
    return x;
  },

  // -----------------------------
  // 2) REORG — Regelachse
  // -----------------------------
  REORG(x) {
    return x * 0.33;
  },

  // -----------------------------
  // 3) NCORG — Tiefenachse
  // -----------------------------
  NCORG(x) {
    return x * 0.81;
  },
 
  // -----------------------------
  // 4) PIPELINE — Fluss
  // -----------------------------
  PIPELINE(x) {
    return {
      raw: this.ORG(x),
      regulated: this.REORG(x),
      depth: this.NCORG(x)
    };
  },

  // -----------------------------
  // 5) ENGINE — Loop
  // -----------------------------
  ENGINE(x) {
    return {
      org: this.ORG(x),
      reorg: this.REORG(x),
      nc: this.NCORG(x),
      pipe: this.PIPELINE(x)
    };
  }
};
