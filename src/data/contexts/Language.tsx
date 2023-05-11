import { createContext, ReactNode, useState } from 'react';

interface ILanguageChildren {
	children: ReactNode;
}

interface ILangue {
	language: string;
	setLanguage: React.Dispatch<React.SetStateAction<string>>
}

export const LanguageContext = createContext<ILangue>({} as ILangue);
LanguageContext.displayName = 'Language';

export const LanguageProvider = ({ children }: ILanguageChildren) => {
	const [language, setLanguage] = useState(() => {
		const isLanguage = localStorage.getItem('@language');
		if (isLanguage) {
			return JSON.parse(isLanguage);
		}
		return 'pt-BR';
	});

	return (
		<LanguageContext.Provider value={{
			language,
			setLanguage
		}}>
			{children}
		</LanguageContext.Provider>
	);
};
