import HttpsServer from './HttpServer';

const API_KEY = process.env.REACT_APP_API_KEY;


class ImagesServer {
	private httpClient: HttpsServer;

	constructor() {
		this.httpClient = new HttpsServer('https://api.themoviedb.org/3/');
	}

	getAllImages<T>(type: 'movie' | 'tv', id: number, language: string): Promise<T> {
		const isoLanguage = language.slice(0, 2);
		return this.httpClient.get<T>(`${type}/${id}/images?${API_KEY}&language=${language}&include_image_language=${isoLanguage}`);
	}
}


export default new ImagesServer;