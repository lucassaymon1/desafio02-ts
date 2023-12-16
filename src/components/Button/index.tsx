import { Container } from './styles'

export const Button = ({ onClick, title }: any) => {
	return (
		<Container>
			<button onClick={onClick}>{title}</button>
		</Container>
	)
}
