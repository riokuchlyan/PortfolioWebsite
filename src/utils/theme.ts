export type Theme = "dark" | "light";

let color_scheme: Theme = "dark";

export function getColorScheme(): Theme {
  return color_scheme;
}

export function setColorScheme(theme: Theme) {
  color_scheme = theme;
}