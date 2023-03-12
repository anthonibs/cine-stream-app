
const imagemtab = {
	display: 'flex',
	width: '100%',
	height: '600px',
	background: 'red'
};

const Home = () => {
	return (
		<div>
			<figure style={imagemtab}>
				<img style={{width: '100%', objectFit: 'cover'}} src="https://cinepop.com.br/wp-content/uploads/2018/11/aquaman_34.jpg" alt="" />
			</figure>
		</div>
	);
};

export default Home;