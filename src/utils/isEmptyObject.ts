export function isEmptyObject<T extends object>(obj: T): boolean {
	return !!Object.keys(obj).length;
}
