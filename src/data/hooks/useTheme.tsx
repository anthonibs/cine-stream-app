import { useContext } from 'react';

import { ThemeCustomContext } from 'data/contexts/ThemeContext';

export const useTheme = () => {
	return useContext(ThemeCustomContext);
};
