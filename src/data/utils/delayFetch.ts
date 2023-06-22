export default function delayFetch(ms = 1000) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
