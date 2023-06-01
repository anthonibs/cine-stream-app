import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;

class PersonServer {
	private httpsClient: HttpsServer;

	constructor() {
		this.httpsClient = new HttpsServer();
	}

	getPerson<T>(id: number, language: string): Promise<T> {
		return this.httpsClient.get(`person/${id}?language=${language}&${API_KEY}`);
	}

	getMediaSocial<T>(id: number): Promise<T> {
		return this.httpsClient.get(`person/${id}/external_ids?${API_KEY}`);
	}
}


export default new PersonServer;

