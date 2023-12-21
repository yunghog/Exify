export enum COLORS {
  primary = '#F25170',
  secondary = '#236DDF',
  tertiary = '#5E42B1',
  success = '#2dd36f',
  warning = '#ffc409',
  danger = '#eb445a',
  medium = '#92949c',
  light = '#f4f5f8',
  transparent = '#00000000',
  dark = '#222222',
  white = '#FFFFFF',
}

export const hexToRGB = (hex: string, alpha?: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha !== undefined) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
};
