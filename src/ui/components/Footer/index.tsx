// Hooks React e React Router
import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Ícones de terceiros
import { FaLinkedinIn, FaGithubAlt, FaInstagram } from 'react-icons/fa';

// Estilos styled-components personalizados
import {
	Address,
	Container,
	Developed,
	Developer,
	LinkItem,
	LinksItems,
	MessageAddress,
	NavbarInfo,
	SelectedLanguage,
	Text,
	TitleSection,
	Wrapper
} from './Footer';
import useLanguage from 'data/hooks/useLanguage';

import translations from './translations.json';


const Footer = () => {

	const { language, languages, handlerLanguage } = useLanguage();

	const [message, setMessage] = useState('');
	const [layer, setLayer] = useState(0);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const emailRef = useRef<any>(null);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function handlerCopyEmail(e: any) {
		// Pega a posição do "Eixo X" referente do elemento span
		const layerX = e.nativeEvent.layerX;
		const message = language !== 'pt-BR' ? 'Copy!' : 'Copiado!';

		if (emailRef.current) {
			setMessage(message);
			setTimeout(() => {
				setMessage('');
			}, 1500);
			setLayer(layerX);
			return navigator.clipboard.writeText(emailRef.current.innerText);
		}
		setMessage('Não foi possível copiar o email.');
	}

	const translate = useMemo(() => {
		return translations.translate.find(translate => translate.language === language);
	}, [language]);

	return (
		<Container>
			<Wrapper>
				<SelectedLanguage
					defaultValue={language}
					onChange={value => handlerLanguage(value)}
				>
					{languages.map(language => (<option
						key={language.code}
						value={language.code}
					>
						{language.name}
					</option>
					))}
				</SelectedLanguage>

				{translate?.results.map(titleNav => (
					<NavbarInfo key={titleNav.title}>
						<TitleSection id={titleNav.title}>
							{titleNav.title}
						</TitleSection>
						<LinksItems>
							{titleNav.sobre.map(linkNav => (
								<LinkItem key={linkNav.id} aria-labelledby={titleNav.title}>
									<Link to={linkNav.link}>
										{linkNav.name}
									</Link>
								</LinkItem>
							))}
						</LinksItems>
					</NavbarInfo>
				))}

				{/* Seção Rodapé Atendimento */}
				<NavbarInfo>
					<TitleSection id={translate?.service.title}>
						{translate?.service.title}
					</TitleSection>
					<Address aria-labelledby={translate?.service.title}>
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
							<Text
								data-type='phone'
								aria-label='Telefone 55 123 5678'
							>
								+55 1234 5678
							</Text>
						</Link>
					</Address>
				</NavbarInfo>

				{/* Seção Redes Sociais */}
				<NavbarInfo className='social'>
					<TitleSection id='social-networks'>
						{translate?.media.title}
					</TitleSection>

					<LinksItems className='social-networks'>
						<LinkItem className='circle' aria-labelledby='social-networks'>
							<Link
								target={'_blank'}
								to={'https://github.com/anthonibs'}
								aria-label='GitHub'
							>
								<FaGithubAlt className='icon-social' />
							</Link>
						</LinkItem>
						<LinkItem className='circle' aria-labelledby='social-networks'>
							<Link
								target={'_blank'}
								to={'https://www.linkedin.com/in/anthoni-broering-dos-santos-483774119/'}
								aria-label='LinkedIn'
							>
								<FaLinkedinIn className='icon-social' />
							</Link>
						</LinkItem>
						<LinkItem className='circle' aria-labelledby='social-networks'>
							<Link
								target={'_blank'}
								to={'https://www.instagram.com/anthoni.bs/'}
								aria-label='Instagram'
							>
								<FaInstagram className='icon-social' />
							</Link>
						</LinkItem>
					</LinksItems>
				</NavbarInfo>
			</Wrapper>

			<Developed>
				© 2023 CineStream. {translate?.copyright}
				<Developer>
					{translate?.dev} <Link
						target={'_blank'}
						to={'https://www.linkedin.com/in/anthoni-broering-dos-santos-483774119/'}
					>
						{translate?.author}
					</Link>
				</Developer>
			</Developed>
		</Container>
	);
};

export default Footer;