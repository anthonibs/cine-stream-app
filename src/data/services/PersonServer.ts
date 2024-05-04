import HttpsServer from './HttpServer';

class PersonServer {
	private httpsClient: HttpsServer;

	constructor() {
		this.httpsClient = new HttpsServer();
	}

	getPerson<T>(id: number, language: string): Promise<T> {
		return this.httpsClient.get(`person/${id}?language=${language}`);
	}

	getMediaSocial<T>(id: number): Promise<T> {
		return this.httpsClient.get(`person/${id}/external_ids`);
	}
}

export default new PersonServer();
