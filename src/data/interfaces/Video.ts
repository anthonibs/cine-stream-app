export interface IVideoResult {
	id: number;
	results: IVideo[];
}

export interface IVideo {
	id: string
	iso_639_1: string
	iso_3166_1: string
	key: string
	name: string
	official: boolean
	published_at: string
	site: string
	size: number
	type: string
}