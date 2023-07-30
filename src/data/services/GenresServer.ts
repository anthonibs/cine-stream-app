import HttpsServer from './HttpServer';

class GenresServer {
	private httpsClient: HttpsServer;

	constructor() {
		this.httpsClient = new HttpsServer();
	}

	getAll<T>(type: 'movie' | 'tv', language: string): Promise<T> {
		return this.httpsClient.get(`genre/${type}/list?language=${language}`);
	}
}

export default new GenresServer();
