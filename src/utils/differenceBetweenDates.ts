// 1000 -> milissegundos;
// 60 -> segundos;
// 60 -> minutos;
// 24 -> horas;
// 365.25 -> anos bissextos;

const now = new Date();

export const differenceBetweenDates = (year: string) => {
	const past = new Date(year);
	const diff = Math.abs(now.getTime() - past.getTime());

	return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
};
