<img id="cine-stream" src="https://i.postimg.cc/9M3tQWYF/banner-projeto-canva-1.png" alt="CineStream: Mais do que Filmes e Séries, uma Experiência Completa" arial-label="CineStream: Mais do que Filmes e Séries, uma Experiência Completa" />

## 💡 Sobre CineStream

CineStream é uma ferramenta web que possibilita aos usuários pesquisarem e descobrirem dados sobre filmes e séries. Os usuários podem conferir os detalhes dos filmes e séries, como a sinopse, o elenco, as avaliações, os trailers e outros. O projeto é desenvolvido com recursos web modernos, como React, TypeScript e uma API externa para obter os dados dos filmes e séries.

## 📝 Índice

- [Visão geral](#visao-geral)
	- [Acesso a demonstração do projeto](#demonstracao)
	- [Funcionalidades](#funcionalidade)
- [Desenvolvimento do projeto](#desenvolvimento-de-projetos)
	- [Requisitos do Sistema](#sistema)
	- [Construído com](#construido)
	- [Instalação](#instalacao)
	- [Configuração](#configuracao)
	- [Executando o Projeto](#executando-projeto)
- [Para dispositivos Móveis, Tablets e Desktops](#dispositivos)
- [ Como contribuir?](#como-contribuir)
- [Licença](#licenca)
- [Autor](#autor)

<h2 id="visao-geral">👨‍💻 Visão geral</h2>

<h3 id="demonstracao">🔗 Acesso a demonstração do projeto</h3>

Você pode acessar o código-fonte do projeto por  [baixá-lo](https://github.com/anthonibs/e-commerce-sneakers-store/archive/refs/heads/main.zip).

- URL do site ao vivo:  [adicione o URL do site ao vivo aqui](https://cine-stream-app.vercel.app/).

<h3 id="funcionalidade">🎆 Funcionalidades</h3>

- Pesquisa de filmes, séries e pessoas por título e nomes.
- Exibição de detalhes dos filmes e séries, incluindo sinopse, elenco, avaliações e trailers.
- Exibição de biografia e e participação de filmes.
- Classificação e avaliação dos filmes e séries pelos usuários.
- Seção de filmes e séries similares.
- Listas de favoritos para salvar filmes e séries preferidos.
- Navegar pelo site em português ou inglês.
- Criar cadastrado preenchendo as informações (nome, email e senha).
- Acessar a conta.

<h2 id="desenvolvimento-de-projetos">🚀 Desenvolvimento do projeto</h2>

<h3 id="sistema">⚙️ Requisitos do Sistema</h3>

- Node.js (versão 18.6.2) e npm (versão 9.5.1) instalados.
- Navegador web moderno compatível (como Google Chrome, Mozilla Firefox, Safari, etc.).

<h3 id="construido">🧰 Construído com:</h3>

- [React](https://reactjs.org/) - biblioteca JS.
- [Styled-components](https://styled-components.com/) - para estilos.
- Fetch Api.
-	[React Router](https://reactrouter.com/en/main).
-	Context Api.
-	Salvar dados no localStorage.
- Typescript.
- Ferramentas para padronização e elegibilidade do código.

<h3 id="instalacao">🪛 Instalação</h3>

1.  Faça o clone do repositório do projeto:
`git clone https://github.com/anthonibs/cine-stream-app.git`

2.  Navegue até o diretório do projeto:
`cd cine-stream-app`

3.  Instale as dependências do projeto:
`npm install`

<h3 id="configuracao">🔧 Configuração</h3>

Antes de executar o projeto, é necessário configurar algumas variáveis de ambiente. Siga as etapas abaixo:

1.  Crie um arquivo `.env` na raiz do projeto.
2.  Adicione as seguintes variáveis de ambiente ao arquivo `.env`:
>       REACT_APP_API_KEY=api_key=[chave_da_api_v3]
>       REACT_APP_API_TOKEN=[chave_da_api_v4]
>       REACT_APP_IMG_ORIGINAL=https://image.tmdb.org/t/p/original
>       REACT_APP_IMG=https://image.tmdb.org/t/p/w500
>
> Substitua `[chave_da_api]` pela sua chave de API para acessar os dados de filmes e séries.

<h3 id="executando-projeto">🪄 Executando o Projeto</h3>

Após concluir a instalação e configuração, você pode executar o projeto da seguinte forma:

1.  Inicie o servidor de desenvolvimento:
`npm start`

2.  Abra o seu navegador e acesse `http://localhost:3000` para visualizar o projeto em execução.

<h2 id="dispositivos">🛸 Para dispositivos Móveis, Tablets e Desktops</h2>

<h3>📱 Móveis</h3>

<img src="https://uploaddeimagens.com.br/images/004/492/867/original/cine-stream-mobile-2.png?1685733862" width="48%" />
<img src="https://uploaddeimagens.com.br/images/004/492/866/original/cine-stream-mobile-1.png?1685733807" width="48%"/>
<img src="https://uploaddeimagens.com.br/images/004/492/863/original/cine-stream-mobile-3.png?1685733716" width="48%"/>

<hr>

<h3>💻 Tablets</h3>
<img src="https://i.postimg.cc/RZg6cpwD/model-cine-stream-tablet-1.png" />
<img src="https://i.postimg.cc/FK1fGbZs/model-cine-stream-tablet-2.png" />
<img src="https://i.postimg.cc/nL5XWsRK/model-cine-stream-tablet-3.png" />

<hr>

<h3>🖥️ Desktops</h3>
<img src="https://i.postimg.cc/KvrmTKtq/Captura-de-tela-de-2023-05-31-23-24-05.png" />
<img src="https://i.postimg.cc/X70VXKBB/Captura-de-tela-de-2023-05-31-23-24-23.png" />
<img src="https://i.postimg.cc/rm1q9zvw/Captura-de-tela-de-2023-05-31-23-39-30.png" />

<h2 id="como-contribuir"> 🗂️ Como contribuir?</h2>

Este é um projeto totalmente livre que aceita contribuições via pull requests no GitHub. Este documento tem a responsabilidade de alinhar as contribuições de acordo com os padrões estabelecidos no mesmo. Em caso de dúvidas, abra uma  [issues](https://github.com/anthonibs/cine-stream-app/issues).

1.  Faça um fork do repositório do projeto.
2.  Crie uma nova branch para fazer as alterações:
`git checkout -b [nome_do_branch]`

3.  Faça as alterações necessárias e commit as suas modificações:
`git commit -m "Adicionar nova funcionalidade"`

4.  Envie as suas alterações para o seu fork do repositório:
`git push origin [nome_do_branch]`

5.  Abra um pull request no repositório original e aguarde a revisão e aprovação do código.

>  "O que fazemos em vida ecoa na eternidade." - Gladiador

<h2 id="licenca">📙 Licença</h2>

O projeto está licenciado sob a licença MIT. Para mais informações, consulte o arquivo [LICENSE](https://github.com/anthonibs/cine-stream-app/blob/main/LICENSE).

<h2 id="autor"> ✏️ Autor</h2>
<table border="1" cellpadding="1" cellspacing="1" style="width:300px">
	<tbody>
		<tr>
			<td>
			<div style="text-align:center">
			<figure class="image" style="display:inline-block"><img alt="Profile owner picture Anthoni Broering dos Santos" height="256" src="https://avatars.githubusercontent.com/u/77931577?v=4" width="256" />
			<figcaption><a href="https://github.com/anthonibs">Anthoni Broering dos Santos</a></figcaption>
			</figure>
			</div>
			</td>
		</tr>
	</tbody>
</table>

[🔝  Voltar ao topo](#cine-stream)
