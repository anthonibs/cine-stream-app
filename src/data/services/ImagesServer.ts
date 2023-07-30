import HttpsServer from './HttpServer';

class ImagesServer {
	private httpClient: HttpsServer;

	constructor() {
		this.httpClient = new HttpsServer();
	}

	getAllImages<T>(type: 'movie' | 'tv', id: number, language: string): Promise<T> {
		const isoLanguage = language.slice(0, 2);

		return this.httpClient.get<T>(
			`${type}/${id}/images?language=${language}&include_image_language=${isoLanguage}`
		);
	}
}

export default new ImagesServer();
