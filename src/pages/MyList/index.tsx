import { useMemo, useState } from 'react';

import { IoAddCircleOutline } from 'react-icons/io5';

import {
	StyledContainer,
	StyledGrid,
	StyledSectionMyFavorites,
	StyledHeaderColumn,
	StyledMessageContainer,
} from './MyList';

import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';
import useLanguage from 'data/hooks/useLanguage';

import CardPoster from 'ui/components/common/CardPoster';
import CardPosterSerie from 'ui/components/common/CardPosterSerie';
import Select from 'ui/components/common/Select';
import Heading from 'ui/components/common/Typography/Heading';
import Paragraph from 'ui/components/common/Typography/Paragraph';

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
					<Heading component='h1' variant='h4' color='secondary'>
						{translate?.title}
					</Heading>
					<Select
						state={translate?.options}
						setState={setSelectedListType}
						defaultValue={translate?.options[0].name}
						position='absolute'
					/>
				</StyledHeaderColumn>
				{
					selectedList?.length
						?
						<StyledGrid
							className={selectedListType}
						>
							{selectedList}
						</StyledGrid>
						:
						<StyledMessageContainer>
							<IoAddCircleOutline />
							<Paragraph size='xxlg'>
								Não há nada na sua lista.
							</Paragraph>
							<span>O conteúdo que você colocar na Minha Lista aparecerá aqui.</span>
						</StyledMessageContainer>
				}
			</StyledSectionMyFavorites>
		</StyledContainer>
	);
};

export default MyList;