import { useMemo, useState } from 'react';

import {
	StyledContainer,
	StyledGrid,
	StyledSectionMyFavorites,
	StyledHeaderColumn,
} from './MyList';

import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';
import useLanguage from 'data/hooks/useLanguage';

import CardPoster from 'ui/components/common/CardPoster';
import CardPosterSerie from 'ui/components/common/CardPosterSerie';
import Select from 'ui/components/common/Select';
import Heading from 'ui/components/common/Typography/Heading';

import options from './translate.json';


const MyList = () => {

	const { language } = useLanguage();
	const { listMovie, listSerie } = useMyFavoritesList();

	const [selectedListType, setSelectedListType] = useState('movie');

	const selectedList = useMemo(() => {
		if (selectedListType === 'movie') {
			return listMovie.map(item => <CardPoster key={item.id} poster={item} />);
		}
		if (selectedListType === 'serie') {
			return listSerie.map(item => <CardPosterSerie key={item.id} poster={item} />);
		}

		if (selectedListType === '') {
			return listMovie.map(item => <CardPoster key={item.id} poster={item} />);
		}
	}, [listMovie, listSerie, selectedListType]);


	const translate = useMemo(() => {
		return options.option_favorites.find(item => item.code === language);
	}, [language]);

	return (
		<StyledContainer>
			<StyledSectionMyFavorites>
				<StyledHeaderColumn>
					<Heading component='h1' variant='h4'>
						{translate?.title}
					</Heading>
					<Select
						state={translate?.options}
						setState={setSelectedListType}
						defaultValue={translate?.options[0].name}
						position='absolute'
					/>
				</StyledHeaderColumn>
				<StyledGrid
					className={selectedListType}
				>
					{selectedList}
				</StyledGrid>
			</StyledSectionMyFavorites>
		</StyledContainer>
	);
};

export default MyList;