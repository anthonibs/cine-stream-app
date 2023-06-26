import { useEffect, useState } from 'react';

const useRizesScreen = () => {
	const [resizeScreen, setResizeScreen] = useState<number>(document.documentElement.clientWidth);

	function handleResizeScreen() {
		setResizeScreen(document.documentElement.clientWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', handleResizeScreen);

		return () => {
			window.removeEventListener('resize', handleResizeScreen);
		};
	}, []);

	return {
		resizeScreen,
	};
};

export default useRizesScreen;
