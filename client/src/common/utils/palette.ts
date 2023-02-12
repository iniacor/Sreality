import hexRgb from 'hex-rgb';

export const getRgba = (hex: string, alpha = 1): string => hexRgb(hex, { format: 'css', alpha });
