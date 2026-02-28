/**
 * Color palette generation utility.
 * Given a single hex color, generates a full Tailwind-style shade palette (50-950).
 * Outputs RGB channel triplets (e.g., "139 92 246") for use with Tailwind's
 * `rgb(var(--color) / <alpha-value>)` syntax, preserving opacity modifier support.
 */

function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  let h = 0
  let s = 0

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / d + 2) / 6; break
      case b: h = ((r - g) / d + 4) / 6; break
    }
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)]
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  const sNorm = s / 100
  const lNorm = l / 100
  const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = lNorm - c / 2
  let r = 0, g = 0, b = 0

  if (h < 60) { r = c; g = x }
  else if (h < 120) { r = x; g = c }
  else if (h < 180) { g = c; b = x }
  else if (h < 240) { g = x; b = c }
  else if (h < 300) { r = x; b = c }
  else { r = c; b = x }

  return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)]
}

// Shade keys and their target lightness values
const SHADE_LIGHTNESS: Record<string, number> = {
  '50': 97, '100': 94, '200': 86, '300': 76, '400': 62,
  '500': 50, '600': 41, '700': 33, '800': 26, '900': 20, '950': 13,
}

/**
 * Generate a full shade palette from a base hex color.
 * Returns RGB channel triplets (e.g., "139 92 246") for each shade.
 */
export function generatePalette(baseHex: string): Record<string, string> {
  const [h, s] = hexToHsl(baseHex)
  const palette: Record<string, string> = {}
  for (const [shade, lightness] of Object.entries(SHADE_LIGHTNESS)) {
    const adjSat = lightness > 90 ? s * 0.4 : lightness < 20 ? s * 0.8 : s
    const [r, g, b] = hslToRgb(h, adjSat, lightness)
    palette[shade] = `${r} ${g} ${b}`
  }
  return palette
}
