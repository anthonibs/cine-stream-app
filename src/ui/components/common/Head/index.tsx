interface HeadProps {
	title: string;
	description?: string;
}

const Head = ({ title, description = '' }: HeadProps) => {
	document.title = `CineStream | ${title}`;
	document.querySelector('[name=description]')?.setAttribute('content', description);

	return null;
};

export default Head;
