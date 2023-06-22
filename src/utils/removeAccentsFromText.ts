export const removeAccentsFromText = (text: string) => {
	const regex = /[.,:]/gm;

	return text
		.replaceAll(' ', '-')
		.replaceAll(regex, '')
		.toLowerCase()
		.normalize('NFD')
		.replaceAll(/[\u0300-\u036f]/g, '');
};
