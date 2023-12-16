import { Box, Center, Flex, Input } from '@chakra-ui/react'
import { Button } from '../Button/'
import { login } from '../../services/login'

export const Card = () => {
	return (
		<Box
			backgroundColor="#FFFFFF"
			borderRadius="25px"
			padding="24px"
			width="524px"
			height="fit-content"
		>
			<Center fontSize="32px" mb="20px">
				<h1>Faça o login</h1>
			</Center>
			<Flex gap="12px" flexDir="column" mb="16px">
				<Input placeholder="email" />
				<Input placeholder="password" />
			</Flex>
			<Center>
				<Button onClick={login} title={'Entrar'} minWidth="148px" />
			</Center>
		</Box>
	)
}
