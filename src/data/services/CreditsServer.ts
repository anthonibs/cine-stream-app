import HttpsServer from './HttpServer';

class CreditsServer {
	private httpsClient: HttpsServer;

	constructor() {
		this.httpsClient = new HttpsServer();
	}

	getCreditsAll<T>(type: 'movie' | 'tv', movieId: number, language: string): Promise<T> {
		return this.httpsClient.get(`${type}/${movieId}/credits?language=${language}`);
	}
}

export default new CreditsServer();
