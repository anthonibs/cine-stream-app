import HttpsServer from './HttpServer';

class VideoServer {
	private httpsClient: HttpsServer;

	constructor() {
		this.httpsClient = new HttpsServer();
	}

	getFindAllVideo<T>(type: 'movie' | 'tv', id: number, language: string): Promise<T> {
		return this.httpsClient.get(`${type}/${id}/videos?language=${language}`);
	}
}

export default new VideoServer();
