import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;

class SimilarServer {
	private httpsClient: HttpsServer;

	constructor() {
		this.httpsClient = new HttpsServer();
	}

	getAll<T>(type: 'movie' | 'tv', movieID: number, language: string): Promise<T> {
		return this.httpsClient.get(`${type}/${movieID}/similar?${API_KEY}&language=${language}&page=1`);
	}
}

export default new SimilarServer;