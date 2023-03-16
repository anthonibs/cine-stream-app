import MyButton from 'ui/components/common/Button';

import {
	BannerMain,
	Container,
	Count,
	Description,
	DownloadGif,
	Figure,
	GridStatistics,
	Image,
	Paragraph,
	Plan,
	Section,
	Separate,
	Statistics,
	Subtitle,
	Title,
	WatchOffline,
	Wrapper,
	WrapperDescription,
	WrapStatistics
} from './Start';

import movieList from 'assets/images/assista-onde-quiser.png';
import movieFilm from 'assets/images/assista-quando-quiser.png';
import phoneMovie from 'assets/images/assistir-offline.png';
import film from 'assets/images/tres-homens-em-conflito.png';
import CountUp from 'react-countup';


const Start = () => {

	return (
		<>
			<BannerMain>
				<Container>
					<Title>Filmes, séries e muito mais <span>; )</span></Title>

					<Paragraph>
						Assista a CineStream Originais premiados. Com o plano anual você paga o equivalente a R$ 10,65/mês (R$127,90/ano). Aproveite!
					</Paragraph>


					<Plan>
						<MyButton url='/signin'>
							Já é CineStream? Faça login
						</MyButton>

						<Separate>ou</Separate>

						<MyButton url='/signup'>
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
					<WrapperDescription className='reverse-columns'>
						<Subtitle>Assista quando quiser</Subtitle>
						<Paragraph>
							Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.
						</Paragraph>
					</WrapperDescription>

					<Figure className='reverse-columns'>
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
						<Image src={phoneMovie} alt="" />
						<WatchOffline>
							<Image src={film} alt="Três Homens em Conflito" />
							<Description>
								<p>Três Homens em Conflito</p>
								<span>Download em andamento...</span>
							</Description>
							<DownloadGif className='download' />
						</WatchOffline>
					</Figure>
				</Wrapper>
			</Section>

			<Statistics>
				<Subtitle className='modify'>
					Os números já dizem tudo
				</Subtitle>

				<GridStatistics>
					<WrapStatistics>
						<CountUp
							start={3200}
							end={4000}
							duration={2.5}
							suffix='+'
							separator=''
							enableScrollSpy={true}
						>
							{({ countUpRef }) => (
								<Count ref={countUpRef} />
							)}
						</CountUp>


						<Paragraph>Filmes no catálogo</Paragraph>
					</WrapStatistics>
					<WrapStatistics>
						<CountUp
							start={80}
							end={200}
							duration={2.5}
							suffix='+'
							separator=''
							enableScrollSpy={true}
						>
							{({ countUpRef }) => (
								<Count ref={countUpRef} />
							)}
						</CountUp>
						<Paragraph>Originais</Paragraph>
					</WrapStatistics>
					<WrapStatistics>
						<CountUp
							start={0}
							end={5}
							enableScrollSpy={true}
						>
							{({ countUpRef }) => (
								<Count ref={countUpRef} />
							)}
						</CountUp>
						<Paragraph>Países atendidos</Paragraph>
					</WrapStatistics>
				</GridStatistics>
			</Statistics>
		</>
	);
};

export default Start;