import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;

class GenresServer {
	private httpsClient: HttpsServer;

	constructor() {
		this.httpsClient = new HttpsServer();
	}

	getAll<T>(type: 'movie' | 'tv', language: string): Promise<T> {
		return this.httpsClient.get(`genre/${type}/list?${API_KEY}&language=${language}`);
	}
}

export default new GenresServer();
