import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;


class CreditsServer {
	private httpsClient: HttpsServer;

	constructor() {
		this.httpsClient = new HttpsServer('https://api.themoviedb.org/3/');
	}

	getCreditsAll<T>(type: 'movie' | 'tv', movieId: number, language: string): Promise<T> {
		return this.httpsClient.get(`${type}/${movieId}/credits?${API_KEY}&language=${language}`);
	}
}


export default new CreditsServer;