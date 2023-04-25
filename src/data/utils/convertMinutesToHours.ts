export default function convertMinutesToHours(minutes: number) {
	const hours = Math.floor(minutes / 60);
	const min = minutes % 60;
	const textHours = (`00${hours}`).slice(-2);
	const textMinutes = (`00${min}`).slice(-2);
	return `${textHours}h ${textMinutes}min`;
}
