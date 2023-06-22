const pixelsDefault = 16;

export function convertPixelsToREM(pixel: number): string {
	return `${pixel / pixelsDefault}rem`;
}
