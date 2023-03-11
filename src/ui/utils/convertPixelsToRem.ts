const pixelsDefault = 16;

export default function convertPixelsToREM(pixel: number): string {
	return `${pixel / pixelsDefault}rem`;
}