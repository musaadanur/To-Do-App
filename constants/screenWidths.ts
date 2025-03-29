export const SMALL_DEVICE = 402;

// Ekran genişliği 402 pikselden küçükse küçük cihaz olarak kabul edilir
export const isSmallDevice = (screenWidth: number): boolean => screenWidth < SMALL_DEVICE;
