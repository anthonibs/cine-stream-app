import { useContext } from 'react';

import { LanguageContext } from 'data/contexts/Language';

const useLanguage = () => {
	const { language, setLanguage } = useContext(LanguageContext);

	const languages = [
		{ code: 'pt-BR', name: 'Português' },
		{ code: 'en-US', name: 'English' },
	];

	function handleLanguageSelection(event: React.ChangeEvent<HTMLSelectElement>): void {
		setLanguage(event.target.value);
		localStorage.setItem('@language', JSON.stringify(event.target.value));
	}

	return {
		languages,
		language,
		handleLanguageSelection,
	};
};

export default useLanguage;
