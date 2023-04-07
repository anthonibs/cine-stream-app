import { IMovie } from 'data/@types/Movie';
import useLanguage from 'data/hooks/useLanguage';
import ByGenderServer from 'data/services/ByGenderServer';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';


interface IFilms {
	page: number;
	results: IMovie[];
	total_pages: number;
	total_results: number;
}

const Button = styled.button`
	padding: .3rem;
	background: blue;
	color: white;
	cursor: pointer;
	opacity: .7;

	&:hover {
		opacity: 1;
	}

	&:focus {
		border: transparent;
		outline: 3px solid red;
	}
`;


const Films = () => {
	const { language } = useLanguage();
	const lastRef = useRef<any>();

	const [isLoading, setIsLoading] = useState(false);
	const [isLoadMore, setIsLoadMore] = useState(false);

	const [error, setError] = useState('');
	const [page, setPage] = useState(1);
	const [films, setFilms] = useState<IFilms>({
		page: 0,
		results: [],
		total_pages: 0,
		total_results: 0
	});



	const loaderFilms = useCallback(async () => {
		try {
			setIsLoading(true);
			const data: IFilms = await ByGenderServer.getByGender(page, language);

			if (data.page === 1) {
				setFilms(data);
			}

			if (data.page > 1) {
				setFilms(prev => ({
					...data,
					results: [...prev.results, ...data.results]
				}));
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [language, page]);


	function Carregarmais() {
		console.log('object');
		setPage(prev => prev + 1);
	}


	useEffect(() => {
		loaderFilms();
	}, [loaderFilms]);



	return (
		<div style={{ paddingTop: '150px', minHeight: '100vh', width: '96%', margin: '0 auto', background: 'green' }}>
			<h1 style={{ color: 'white', fontSize: '40px' }}>Filmes</h1>

			{!isLoading && films?.results.map((item: IMovie, i) => {
				return <div key={i} style={{ color: 'white', padding: '.5rem 0' }}>{item?.title}</div>;
			})}

			{!!films?.results.length && <Button ref={lastRef} onClick={Carregarmais}>Carregar mais...</Button>}

		</div>
	);
};

export default Films;