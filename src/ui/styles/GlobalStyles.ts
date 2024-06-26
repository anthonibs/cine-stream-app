import { darken } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    box-sizing: border-box;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

	body {
		font-family: ${({ theme }) => theme.font.family};
		background-color: ${({ theme }) => theme.body};

		&::-webkit-scrollbar {
			width: 10px;
		}

		&::-webkit-scrollbar-track {
			background: #e0dede;
		}

		&::-webkit-scrollbar-thumb {
			background-color: ${({ theme }) => darken(0.15, theme.colors.main)};
			border-radius: 10px;
			border: 2px solid #e0dede;
		}
	}


  ol, ul {
    list-style: none;
  }

	a {
		text-decoration: none;
	}

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

`;
