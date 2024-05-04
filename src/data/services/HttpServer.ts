import APIError from 'data/errors/APIError';
import delayFetch from 'data/utils/delayFetch';

const API_TOKEN = process.env.REACT_APP_API_TOKEN;

class HttpsServer {
	private baseURL: string;

	constructor() {
		this.baseURL = 'https://api.themoviedb.org/3/';
	}

	get<T>(path: string, options?: any): Promise<T> {
		return this.makeRequest(path, {
			method: 'GET',
			headers: {
				...options?.headers,
				accept: 'application/json',
				Authorization: `Bearer ${API_TOKEN}`,
			},
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

		let responseBody = null;
		const contentType = response.headers.get('Content-Type');
		if (contentType?.includes('application/json')) {
			responseBody = await response.json();
		}

		if (response.status === 404) {
			return responseBody;
		}

		if (response.ok) {
			return responseBody;
		}

		throw new APIError(response, responseBody);
	}
}

export default HttpsServer;
