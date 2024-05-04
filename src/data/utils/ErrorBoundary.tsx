import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	handleReload = () => window.location.reload();

	handleBack = () => window.location.replace('/');

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		this.setState({ hasError: true });
		console.error('Erro encontrado: ', error, errorInfo);
	}

	render(): ReactNode {
		if (this.state.hasError) {
			return (
				<div>
					<h2>
						Oops! Um erro inesperado aconteceu. Por favor recarregue a página ou volte ao inicio.
					</h2>
					<img src='/not_found.webp' alt='sem resultado' />
					<button onClick={this.handleReload}>
						<h3>Recarregar Página</h3>
					</button>
					<button onClick={this.handleBack}>
						<h3>Voltar ao Inicio</h3>
					</button>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
