import HttpsServer from './HttpServer';

type Search = 'multi' | 'person';

class MultiQuery {
	private httpsClient: HttpsServer;

	constructor() {
		this.httpsClient = new HttpsServer();
	}

	getQueryAll<T>(typeSearch: Search, query: string, language: string): Promise<T> {
		return this.httpsClient.get(
			`search/${typeSearch}?query=${query}&include_adult=false&language=${language}&page=1`
		);
	}
}

export default new MultiQuery();
