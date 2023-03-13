import MyButton from 'ui/components/common/Button';

import {
	BannerMain,
	Container,
	Figure,
	Image,
	Paragraph,
	Plan,
	Section,
	Separate,
	Subtitle,
	Title,
	Wrapper,
	WrapperDescription
} from './Signup';

import movieList from 'assets/images/assista-onde-quiser.png';
import movieFilm from 'assets/images/assista-quando-quiser.png';


const Signup = () => {

	return (
		<>
			<BannerMain>
				<Container>
					<Title>Filmes, séries e muito mais <span>; )</span></Title>

					<Paragraph>
						Assista a CineStream Originais premiados. Com o plano anual você paga o equivalente a R$ 10,65/mês (R$127,90/ano). Aproveite!
					</Paragraph>


					<Plan>
						<MyButton url='#'>
							Já é CineStream? Faça login
						</MyButton>

						<Separate>ou</Separate>

						<MyButton url='#'>
							Experimente 14 dias grátis*
						</MyButton>
					</Plan>

					<Paragraph className='politic'>
						*Após 14 dias, o CineStream é renovado automaticamente por R$17,90/mês ou R$127,90/ano. Cancele a qualquer momento.
					</Paragraph>
				</Container>
			</BannerMain>


			<Section>
				<Wrapper>
					<WrapperDescription>
						<Subtitle>Assista onde quiser</Subtitle>
						<Paragraph>
							Assista no site ou no app CineStream em seu celular, tablet ou seleção de Smart TVs — em até 3 dispositivos ao mesmo tempo.
						</Paragraph>
					</WrapperDescription>

					<Figure>
						<Image src={movieList} alt="" />
					</Figure>
				</Wrapper>
			</Section>

			<Section>
				<Wrapper>
					<WrapperDescription>
						<Subtitle>Assista quando quiser</Subtitle>
						<Paragraph>
							Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.
						</Paragraph>
					</WrapperDescription>
					<Figure>
						<Image src={movieFilm} alt="" />
					</Figure>
				</Wrapper>
			</Section>

			<Section>
				<Wrapper>
					<WrapperDescription>
						<Subtitle>Baixe para assistir offline</Subtitle>
						<Paragraph>
							Assista offline no app Prime Video ao baixar títulos em seu iPhone, iPad, tablet ou dispositivo Android.
						</Paragraph>
					</WrapperDescription>
					<Figure>
						<Image src={movieFilm} alt="" />
					</Figure>
				</Wrapper>
			</Section>






		</>
	);
};

export default Signup;