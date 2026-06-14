// The Build -> Operate -> Engineer loop. One place maps a phase to its accent hex (matching the
// --build/--operate/--engineer tokens in global.css) and its display label. Cards set
// `style={`--accent:${accentOf(phase)}`}` and the border-shadow/badges follow.
export type Phase = 'build' | 'operate' | 'engineer';

export const PHASE_ACCENT: Record<Phase, string> = {
  build: '#b8430f',
  operate: '#2d62a3',
  engineer: '#2f7d56',
};

export const accentOf = (p: Phase) => PHASE_ACCENT[p];
export const phaseLabel = (p: Phase) => p.toUpperCase();
