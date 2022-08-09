export enum COLORS {
  primary = '#369df1',
  primaryrgb = '54,157,241',
  primarycontrast = '#000000',
  primarycontrastrgb = '0,0,0',
  primaryshade = '#308ad4',
  primarytint = '#4aa7f2',

  secondary = '#e30074',
  secondaryrgb = '227,0,116',
  secondarycontrast = '#ffffff',
  secondarycontrastrgb = '255,255,255',
  secondaryshade = '#c80066',
  secondarytint = '#e61a82',

  tertiary = '#5260ff',
  tertiaryrgb = '82,96,255',
  tertiarycontrast = '#ffffff',
  tertiarycontrastrgb = '255,255,255',
  tertiaryshade = '#4854e0',
  tertiarytint = '#6370ff',

  success = '#2dd36f',
  successrgb = '45,211,111',
  successcontrast = '#000000',
  successcontrastrgb = '0,0,0',
  successshade = '#28ba62',
  successtint = '#42d77d',

  warning = '#ffc409',
  warningrgb = '255,196,9',
  warningcontrast = '#000000',
  warningcontrastrgb = '0,0,0',
  warningshade = '#e0ac08',
  warningtint = '#ffca22',

  danger = '#eb445a',
  dangerrgb = '235,68,90',
  dangercontrast = '#ffffff',
  dangercontrastrgb = '255,255,255',
  dangershade = '#cf3c4f',
  dangertint = '#ed576b',

  medium = '#92949c',
  mediumrgb = '146,148,156',
  mediumcontrast = '#000000',
  mediumcontrastrgb = '0,0,0',
  mediumshade = '#808289',
  mediumtint = '#9d9fa6',

  light = '#f4f5f8',
  lightrgb = '244,245,248',
  lightcontrast = '#000000',
  lightcontrastrgb = '0,0,0',
  lightshade = '#d7d8da',
  lighttint = '#f5f6f9',

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
