import { Box, ChakraProvider, Flex, Text } from '@chakra-ui/react'
import { Card } from './components/Card'
import { Header } from './components/Header'

function App() {
	return (
		<ChakraProvider>
			<Header />
			<Flex
				minHeight="100vh"
				backgroundColor="#db3c30"
				align="center"
				justify="center"
			>
				<Flex padding="25px" align="center" maxW="1240px" gap="84px">
					<Card />
					<Text maxW="540px" color="white">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
						veniam excepturi sunt atque quas accusantium facere nobis at
						voluptatem omnis porro nesciunt incidunt quod, quasi rerum quia
						perspiciatis corporis consectetur.
					</Text>
				</Flex>
			</Flex>
		</ChakraProvider>
	)
}

export default App
