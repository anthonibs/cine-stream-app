// Hooks React e React Router
import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Ícones de terceiros
import { FaLinkedinIn, FaGithubAlt, FaInstagram } from 'react-icons/fa';

// Estilos styled-components personalizados
import {
	StyledAddress,
	StyledColumn,
	StyledDeveloped,
	StyledDeveloper,
	StyledFooter,
	StyledHeader,
	StyledLinkItem,
	StyledLinksItems,
	StyledMessageAddress,
	StyledNavbarInfo,
	StyledSelectedLanguage,
	StyledText,
	StyledWrapper,
} from './Footer';
import useLanguage from 'data/hooks/useLanguage';

import translations from './translations.json';
import Heading from '../common/Typography/Heading';

const Footer = () => {
	const { language, languages, handlerLanguage } = useLanguage();

	const [message, setMessage] = useState('');
	const [offsetX, setOffsetX] = useState(0);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const emailRef = useRef<any>(null);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function handlerCopyEmail(e: any) {
		// Pega a posição do "Eixo X" referente do elemento span
		const offsetX = e.nativeEvent.offsetX;
		const message = language !== 'pt-BR' ? 'Copy!' : 'Copiado!';

		if (emailRef.current) {
			setMessage(message);
			setTimeout(() => {
				setMessage('');
			}, 1500);
			setOffsetX(offsetX);
			return navigator.clipboard.writeText(emailRef.current.innerText);
		}
		setMessage('Não foi possível copiar o email.');
	}

	const translate = useMemo(() => {
		return translations.translate.find((translate) => translate.language === language);
	}, [language]);

	return (
		<StyledFooter>
			<StyledColumn>
				<StyledSelectedLanguage
					defaultValue={language}
					onChange={(value) => handlerLanguage(value)}
				>
					{languages.map((language) => (
						<option key={language.code} value={language.code}>
							{language.name}
						</option>
					))}
				</StyledSelectedLanguage>

				<StyledWrapper>
					{translate?.results.map((titleNav) => (
						<StyledNavbarInfo key={titleNav.title}>
							<StyledHeader>
								<Heading component='h3' variant='subtitle' id={titleNav.title}>
									{titleNav.title}
								</Heading>
							</StyledHeader>
							<StyledLinksItems>
								{titleNav.sobre.map((linkNav) => (
									<StyledLinkItem key={linkNav.id} aria-labelledby={titleNav.title}>
										<Link to={linkNav.link}>{linkNav.name}</Link>
									</StyledLinkItem>
								))}
							</StyledLinksItems>
						</StyledNavbarInfo>
					))}

					{/* Seção Rodapé Atendimento */}
					<StyledNavbarInfo>
						<StyledHeader>
							<Heading component='h3' variant='subtitle' id={translate?.service.title}>
								{translate?.service.title}
							</Heading>
						</StyledHeader>
						<StyledAddress aria-labelledby={translate?.service.title}>
							<StyledText
								tabIndex={0}
								id='address-email'
								ref={emailRef}
								onClick={handlerCopyEmail}
								aria-label='suporte@cinestream.com.br'
							>
								suporte@cinestream.com.br
								<StyledMessageAddress
									style={{ left: offsetX }}
									className={message.length > 0 ? 'ativo' : ''}
								>
									{message}
								</StyledMessageAddress>
							</StyledText>
							<Link to='#'>
								<StyledText data-type='phone' aria-label='Telefone 55 123 5678'>
									+55 1234 5678
								</StyledText>
							</Link>
						</StyledAddress>
					</StyledNavbarInfo>

					{/* Seção Redes Sociais */}
					<StyledNavbarInfo className='social'>
						<StyledHeader>
							<Heading component='h3' variant='subtitle' id='social-networks'>
								{translate?.media.title}
							</Heading>
						</StyledHeader>

						<StyledLinksItems className='social-networks'>
							<StyledLinkItem className='circle' aria-labelledby='social-networks'>
								<Link target={'_blank'} to={'https://github.com/anthonibs'} aria-label='GitHub'>
									<FaGithubAlt className='icon-social' />
								</Link>
							</StyledLinkItem>
							<StyledLinkItem className='circle' aria-labelledby='social-networks'>
								<Link
									target={'_blank'}
									to={'https://www.linkedin.com/in/anthoni-broering-dos-santos-483774119/'}
									aria-label='LinkedIn'
								>
									<FaLinkedinIn className='icon-social' />
								</Link>
							</StyledLinkItem>
							<StyledLinkItem className='circle' aria-labelledby='social-networks'>
								<Link
									target={'_blank'}
									to={'https://www.instagram.com/anthoni.bs/'}
									aria-label='Instagram'
								>
									<FaInstagram className='icon-social' />
								</Link>
							</StyledLinkItem>
						</StyledLinksItems>
					</StyledNavbarInfo>
				</StyledWrapper>
			</StyledColumn>

			<StyledDeveloped>
				© 2023 CineStream. {translate?.copyright}
				<StyledDeveloper>
					{translate?.dev}{' '}
					<Link
						target={'_blank'}
						to={'https://www.linkedin.com/in/anthoni-broering-dos-santos-483774119/'}
					>
						{translate?.author}
					</Link>
				</StyledDeveloper>
			</StyledDeveloped>
		</StyledFooter>
	);
};

export default Footer;
