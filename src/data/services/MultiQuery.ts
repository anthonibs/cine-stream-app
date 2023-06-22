import HttpsServer from './HttpServer';

type Search = 'multi' | 'person';

const API_KEY = process.env.REACT_APP_API_KEY;

class MultiQuery {
	private httpsClient: HttpsServer;

	constructor() {
		this.httpsClient = new HttpsServer();
	}

	getQueryAll<T>(typeSearch: Search, query: string, language: string): Promise<T> {
		return this.httpsClient.get(
			`search/${typeSearch}?query=${query}&include_adult=false&language=${language}&page=1&${API_KEY}`,
		);
	}
}

export default new MultiQuery();
