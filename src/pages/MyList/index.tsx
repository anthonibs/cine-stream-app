import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';
import CardPoster from 'ui/components/common/CardPoster';

const MyList = () => {

	const { myFavoritesList } = useMyFavoritesList();

	return (
		<div style={{ paddingTop: '150px' }}>
			<h1 style={{ color: 'white', fontSize: '40px' }}>Minha Lista</h1>

			<section>
				<div style={{ display: 'flex', gap: '20px', padding: '2rem' }}>
					{myFavoritesList.map(item => {
						return (
							<div key={item.id}>
								<CardPoster poster={item} />
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default MyList;