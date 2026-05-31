// Single source of truth for the Field Guide's version + revision date.
// Bump VERSION on a substantive revision; REVISED is the ISO date of the last change.
export const GUIDE_VERSION = '0.1';
export const GUIDE_REVISED = '2026-05-30';

// Human-formatted revision date (en-GB) for display.
export const guideRevisedLabel = new Date(GUIDE_REVISED).toLocaleDateString('en-GB', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
