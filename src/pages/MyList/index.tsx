import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';
import CardPoster from 'ui/components/common/CardPoster';
import { Container, Grid, SectionMyFavorites, Title } from './MyList';

const MyList = () => {

	const { myFavoritesList } = useMyFavoritesList();

	return (
		<Container>
			<SectionMyFavorites>
				<Title>Minha Lista</Title>
				<Grid>
					{myFavoritesList.map(item => {
						return (
							<CardPoster key={item.id} poster={item} />
						);
					})}
				</Grid>
			</SectionMyFavorites>
		</Container>
	);
};

export default MyList;