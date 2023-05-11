import APIError from 'data/errors/APIError';
import delayFetch from 'data/utils/delayFetch';

class HttpsServer {
	private baseURL: string;

	constructor(baseURL: string) {
		this.baseURL = baseURL;
	}

	get<T>(path: string, options?: any): Promise<T> {
		return this.makeRequest(path, {
			method: 'GET',
			headers: options?.headers,
		});
	}

	post<T>(path: string, options: any): Promise<T> {
		return this.makeRequest(path, {
			method: 'POST',
			body: options?.body,
			headers: options?.headers,
		});
	}

	private async makeRequest(path: string, options: any) {
		await delayFetch(500);

		const headers = new Headers();

		if (options.body) {
			headers.append('Content-Type', 'application/json');
		}

		if (options.headers) {
			Object.entries(options.headers).forEach(([name, value]: any) => {
				headers.append(name, value);
			});
		}

		const response = await fetch(`${this.baseURL}${path}`, {
			method: options.method,
			body: JSON.stringify(options.body),
			headers,
		});


		let reponseBody = null;
		const contentType = response.headers.get('Content-Type');
		if (contentType?.includes('application/json')) {
			reponseBody = await response.json();
		}

		if (response.ok) {
			return reponseBody;
		}
		throw new APIError(response, reponseBody);
	}
}


export default HttpsServer;