import { useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { IoAddCircleOutline } from 'react-icons/io5';

import * as S from './MyList';

import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';
import useAuthContext from 'data/hooks/useAuthContext';
import useLanguage from 'data/hooks/useLanguage';

import CardPoster from 'ui/components/common/CardPoster';
import CardPosterSerie from 'ui/components/common/CardPosterSerie';
import Select from 'ui/components/common/Select';
import Heading from 'ui/components/common/Typography/Heading';
import Paragraph from 'ui/components/common/Typography/Paragraph';
import Head from 'ui/components/common/Head';

import { combinedListFavorites } from 'utils';

import options from './translate.json';

const MyList = () => {
	const { language } = useLanguage();
	const { authenticated } = useAuthContext();
	const { listMovie, listSerie, listAlreadyWatched } = useMyFavoritesList();

	const [selectedListType, setSelectedListType] = useState('movie');

	const selectedList = useMemo(() => {
		if (selectedListType === 'movie') {
			return combinedListFavorites(listMovie, listMovie, listAlreadyWatched).map((item) => (
				<CardPoster key={item.id} poster={item} />
			));
		}
		if (selectedListType === 'serie') {
			return combinedListFavorites(listSerie, listSerie, listAlreadyWatched).map((item) => (
				<CardPosterSerie key={item.id} poster={item} />
			));
		}

		if (selectedListType === '') {
			return combinedListFavorites(listMovie, listMovie, listAlreadyWatched).map((item) => (
				<CardPoster key={item.id} poster={item} />
			));
		}
	}, [listAlreadyWatched, listMovie, listSerie, selectedListType]);

	const translate = useMemo(() => {
		return options.option_favorites.find((item) => item.code === language);
	}, [language]);

	if (!authenticated) {
		return <Navigate to='/' replace={false} />;
	}

	return (
		<>
			<Head title={translate?.title || ''} />

			<S.Container data-testid='mylist-styles'>
				<S.SectionMyFavorites>
					<S.HeaderFilter>
						<div>
							<Heading component='h1' variant='h4' color='secondary'>
								{translate?.title}
							</Heading>

							<Select
								state={translate?.options}
								setState={setSelectedListType}
								defaultValue={translate?.options[0].name}
								position='absolute'
							/>
						</div>
					</S.HeaderFilter>

					{selectedList?.length ? (
						<S.SectionGrid className={selectedListType}>{selectedList}</S.SectionGrid>
					) : (
						<S.MessageContent className={selectedListType}>
							<IoAddCircleOutline />
							<Paragraph size='xxlg'>Não há nada na sua lista.</Paragraph>
							<span>O conteúdo que você colocar na Minha Lista aparecerá aqui.</span>
						</S.MessageContent>
					)}
				</S.SectionMyFavorites>
			</S.Container>
		</>
	);
};

export default MyList;
