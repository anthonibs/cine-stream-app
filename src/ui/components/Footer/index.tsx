import { useRef, useState, memo } from 'react';
import { Link } from 'react-router-dom';

import { FaLinkedinIn, FaGithubAlt, FaInstagram } from 'react-icons/fa';

const Footer = () => {

	const [message, setMessage] = useState<string>('');

	const emailRef = useRef<any>(null);

	const handlerCopyEmail = () => {
		if (emailRef.current) {
			setMessage('Copiado!');
			return navigator.clipboard.writeText(emailRef.current.innerText);
		}
		setMessage('Não foi possível copiar o email.');
	};

	return (
		<footer>
			<div>
				<div>
					<h3>Navegação</h3>
					<ul>
						<li>
							<Link to={'/'}>
								Início
							</Link>
						</li>
						<li>
							<Link to={'#'}>
								Sobre a empresa
							</Link>
						</li>
						<li>
							<Link to={'#'}>
								Relação com Investidor
							</Link>
						</li>
						<li>
							<Link to={'#'}>
								FAQ
							</Link>
						</li>
						<li>
							<Link to={'#'}>
								Trabalhe conosco
							</Link>
						</li>
						<li>
							<Link to={'#'}>
								Central de ajuda
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h3>Política</h3>
					<ul>
						<li>
							<Link to={'/'}>
								Política de Privacidade
							</Link>
						</li>
						<li>
							<Link to={'#'}>
								Termos de Serviço

							</Link>
						</li>
						<li>
							<Link to={'#'}>
								Preferências de Cookies
							</Link>
						</li>
						<li>
							<Link to={'#'}>
								Informação Corporativa
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h3>Atendimento</h3>
					<address>
						<p
							id='address-email'
							ref={emailRef}
							onClick={handlerCopyEmail}
						>
							suporte@cinestream.com.br
							<span>{message}</span>
						</p>
						<p>+55 1234 5678</p>
					</address>
				</div>

				<div>
					<h3>Redes Sociais</h3>
					<ul>
						<li>
							<Link target={'_blank'} to={'https://github.com/anthonibs'}>
								<FaGithubAlt />
							</Link>
						</li>
						<li>
							<Link target={'_blank'} to={'https://www.linkedin.com/in/anthoni-broering-dos-santos-483774119/'}>
								<FaLinkedinIn />
							</Link>
						</li>
						<li>
							<Link target={'_blank'} to={'https://www.instagram.com/anthoni.bs/'}>
								<FaInstagram />
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<p>
				© 2023 CineStream. Todos os direitos reservados - Desenvolvido por <Link target={'_blank'} to={'https://www.linkedin.com/in/anthoni-broering-dos-santos-483774119/'} rel="noreferrer">Anthoni Broering dos Santos</Link>
			</p>
		</footer>
	);
};

export default Footer;