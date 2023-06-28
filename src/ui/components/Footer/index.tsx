import { MouseEvent, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaLinkedinIn, FaGithubAlt, FaInstagram } from 'react-icons/fa';

import useLanguage from 'data/hooks/useLanguage';

import Heading from '../common/Typography/Heading';

import * as S from './Footer';

import translations from './translations.json';

const Footer = () => {
	const { language, languages, handleLanguageSelection } = useLanguage();

	const [message, setMessage] = useState('');
	const [offsetX, setOffsetX] = useState(0);

	const emailRef = useRef<HTMLParagraphElement>(null);

	function handleCopyEmail(e: MouseEvent<HTMLParagraphElement>) {
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
		<S.Footer>
			<S.Column>
				<S.SelectedLanguage defaultValue={language} onChange={handleLanguageSelection}>
					{languages.map((language) => (
						<option key={language.code} value={language.code}>
							{language.name}
						</option>
					))}
				</S.SelectedLanguage>

				<S.Wrapper>
					{translate?.results.map((titleNav) => (
						<S.NavbarInfo key={titleNav.title}>
							<S.Header>
								<Heading component='h3' variant='subtitle' id={titleNav.title}>
									{titleNav.title}
								</Heading>
							</S.Header>
							<S.LinksItems>
								{titleNav.sobre.map((linkNav) => (
									<S.LinkItem key={linkNav.id} aria-labelledby={titleNav.title}>
										<Link to={linkNav.link}>{linkNav.name}</Link>
									</S.LinkItem>
								))}
							</S.LinksItems>
						</S.NavbarInfo>
					))}

					{/* Seção Rodapé Atendimento */}
					<S.NavbarInfo>
						<S.Header>
							<Heading component='h3' variant='subtitle' id={translate?.service.title}>
								{translate?.service.title}
							</Heading>
						</S.Header>
						<S.Address aria-labelledby={translate?.service.title}>
							<S.Text
								tabIndex={0}
								id='address-email'
								ref={emailRef}
								onClick={handleCopyEmail}
								aria-label='suporte@cinestream.com.br'
							>
								suporte@cinestream.com.br
								<S.MessageAddress
									style={{ left: offsetX }}
									className={message.length > 0 ? 'ativo' : ''}
								>
									{message}
								</S.MessageAddress>
							</S.Text>
							<Link to='#'>
								<S.Text data-type='phone' aria-label='Telefone 55 123 5678'>
									+55 1234 5678
								</S.Text>
							</Link>
						</S.Address>
					</S.NavbarInfo>

					{/* Seção Redes Sociais */}
					<S.NavbarInfo className='social'>
						<S.Header>
							<Heading component='h3' variant='subtitle' id='social-networks'>
								{translate?.media.title}
							</Heading>
						</S.Header>

						<S.LinksItems className='social-networks'>
							<S.LinkItem className='circle' aria-labelledby='social-networks'>
								<Link target={'_blank'} to={'https://github.com/anthonibs'} aria-label='GitHub'>
									<FaGithubAlt className='icon-social' />
								</Link>
							</S.LinkItem>
							<S.LinkItem className='circle' aria-labelledby='social-networks'>
								<Link
									target={'_blank'}
									to={'https://www.linkedin.com/in/anthoni-broering-dos-santos-483774119/'}
									aria-label='LinkedIn'
								>
									<FaLinkedinIn className='icon-social' />
								</Link>
							</S.LinkItem>
							<S.LinkItem className='circle' aria-labelledby='social-networks'>
								<Link
									target={'_blank'}
									to={'https://www.instagram.com/anthoni.bs/'}
									aria-label='Instagram'
								>
									<FaInstagram className='icon-social' />
								</Link>
							</S.LinkItem>
						</S.LinksItems>
					</S.NavbarInfo>
				</S.Wrapper>
			</S.Column>

			<S.Developed>
				© 2023 CineStream. {translate?.copyright}
				<S.Developer>
					{translate?.dev}
					<Link
						target={'_blank'}
						to={'https://www.linkedin.com/in/anthoni-broering-dos-santos-483774119/'}
					>
						{translate?.author}
					</Link>
				</S.Developer>
			</S.Developed>
		</S.Footer>
	);
};

export default Footer;
