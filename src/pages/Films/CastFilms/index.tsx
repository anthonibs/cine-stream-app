import useLanguage from 'data/hooks/useLanguage';
import CreditsServer from 'data/services/CreditsServer';
import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CastFilms = () => {
	const { language } = useLanguage();
	const { id } = useParams();


	const loaderCast = useCallback(async () => {
		try {
			const data = await CreditsServer.getCreditsAll('movie', Number(id), language);
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	}, [id, language]);


	useEffect(() => {
		loaderCast();
	}, [loaderCast]);


	return (
		<div style={{ paddingTop: '120px', fontSize: '2rem', color: 'white', minHeight: 'calc(100vh - 321px)' }}>
			<p>
				Página em produção....
			</p>

			<figure style={{ width: '100%', height: 'auto' }}>
				<img src="https://i.postimg.cc/tJPytZsf/Loading-cuate.png" alt="" style={{ marginTop: '30px', width: '40%', margin: '0 auto', display: 'block' }} />
			</figure>
		</div>
	);
};

export default CastFilms;