import { useEffect, useState } from 'react';

const useIsElementVisible = (el: HTMLElement | null): boolean => {
	const [isVisible, setIsVisible] = useState(false);
	const callback = ([entry]: IntersectionObserverEntry[]): void => {
		setIsVisible(entry.isIntersecting);
	};

	useEffect(() => {
		const watch = new IntersectionObserver(callback, {
			threshold: 0,
			rootMargin: '-20px',
		});

		if (el) {
			watch.observe(el);
			return () => watch.unobserve(el);
		}
		return () => watch.disconnect();
	}, [el]);

	return isVisible && !!el;
};

export default useIsElementVisible;
