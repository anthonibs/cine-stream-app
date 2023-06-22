import { LanguageContext } from 'data/contexts/Language';
import { useContext } from 'react';

const useLanguage = () => {
	const { language, setLanguage } = useContext(LanguageContext);

	const languages = [
		{
			code: 'pt-BR',
			name: 'Português',
		},
		{
			code: 'en-US',
			name: 'English',
		},
	];

	function handlerLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
		setLanguage(event.target.value);
		localStorage.setItem('@language', JSON.stringify(event.target.value));
	}

	return {
		language,
		languages,
		handlerLanguage,
	};
};

export default useLanguage;
