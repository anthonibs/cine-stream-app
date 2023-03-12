import { useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import { FaLinkedinIn, FaGithubAlt, FaInstagram } from 'react-icons/fa';

import {
	Address,
	Container,
	Developed,
	Developer,
	LinkItem,
	LinksItems,
	MessageAddress,
	NavbarInfo,
	Text,
	TitleSection,
	Wrapper
} from './Footer';


const Footer = () => {

	const [message, setMessage] = useState<string>('');
	const [layer, setLayer] = useState<number>(0);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const emailRef = useRef<any>(null);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handlerCopyEmail = (e: any) => {

		// Pega a posição do "Eixo X" referente do elemento span
		const layerX = e.nativeEvent.layerX;

		if (emailRef.current) {
			setMessage('Copiado!');
			setTimeout(() => {
				setMessage('');
			}, 1500);
			setLayer(layerX);
			return navigator.clipboard.writeText(emailRef.current.innerText);
		}
		setMessage('Não foi possível copiar o email.');
	};

	return (
		<Container>
			<Wrapper>

				<NavbarInfo>
					<TitleSection>Navegação</TitleSection>
					<LinksItems>
						<LinkItem>
							<Link to={'/'}>
								Início
							</Link>
						</LinkItem>
						<LinkItem>
							<Link to={'#'}>
								Sobre a empresa
							</Link>
						</LinkItem>
						<LinkItem>
							<Link to={'#'}>
								Relação com Investidor
							</Link>
						</LinkItem>
						<LinkItem>
							<Link to={'#'}>
								FAQ
							</Link>
						</LinkItem>
						<LinkItem>
							<Link to={'#'}>
								Trabalhe conosco
							</Link>
						</LinkItem>
						<LinkItem>
							<Link to={'#'}>
								Central de ajuda
							</Link>
						</LinkItem>
					</LinksItems>
				</NavbarInfo>

				<NavbarInfo>
					<TitleSection>Política</TitleSection>
					<LinksItems>
						<LinkItem>
							<Link to={'/'}>
								Política de Privacidade
							</Link>
						</LinkItem>
						<LinkItem>
							<Link to={'#'}>
								Termos de Serviço

							</Link>
						</LinkItem>
						<LinkItem>
							<Link to={'#'}>
								Preferências de Cookies
							</Link>
						</LinkItem>
						<LinkItem>
							<Link to={'#'}>
								Informação Corporativa
							</Link>
						</LinkItem>
					</LinksItems>
				</NavbarInfo>

				{/* Seção Rodapé Atendimento */}
				<NavbarInfo>
					<TitleSection>Atendimento</TitleSection>
					<Address>
						<Text
							tabIndex={0}
							id='address-email'
							ref={emailRef}
							onClick={e => handlerCopyEmail(e)}
							aria-label="suporte@cinestream.com.br"
						>
							suporte@cinestream.com.br
							<MessageAddress
								style={{ left: layer }}
								className={message.length > 0 ? 'ativo' : ''}
							>
								{message}
							</MessageAddress>
						</Text>
						<Link to="#">
							<Text data-type='phone'>
								+55 1234 5678
							</Text>
						</Link>
					</Address>
				</NavbarInfo>

				{/* Seção Redes Sociais */}
				<NavbarInfo>
					<TitleSection>
						Redes Sociais
					</TitleSection>

					<LinksItems className='social-networks'>
						<LinkItem className='circle'>
							<Link target={'_blank'} to={'https://github.com/anthonibs'}>
								<FaGithubAlt className='icon-social' />
							</Link>
						</LinkItem>
						<LinkItem className='circle'>
							<Link target={'_blank'} to={'https://www.linkedin.com/in/anthoni-broering-dos-santos-483774119/'}>
								<FaLinkedinIn className='icon-social' />
							</Link>
						</LinkItem>
						<LinkItem className='circle'>
							<Link target={'_blank'} to={'https://www.instagram.com/anthoni.bs/'}>
								<FaInstagram className='icon-social' />
							</Link>
						</LinkItem>
					</LinksItems>
				</NavbarInfo>

			</Wrapper>

			<Developed>
				© 2023 CineStream. Todos os direitos reservados
				<Developer>
					Desenvolvido com muito ☕ por <Link
						target={'_blank'}
						to={'https://www.linkedin.com/in/anthoni-broering-dos-santos-483774119/'}
					>
						Anthoni Broering dos Santos
					</Link>
				</Developer>
			</Developed>
		</Container>
	);
};

export default Footer;