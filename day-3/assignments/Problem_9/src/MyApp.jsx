import { Heading,Input,Button,Card,CardHeader,Stack} from '@chakra-ui/react'

function MyApp() {
  return (
    <Stack spacing={6} height="100vh" >
    <Heading as='h2' size='xl'>
    Chakra Ui App
  </Heading>
  <Input placeholder='Enter text here' size='md' />
  <Button colorScheme='teal' size='md'>
    Button
  </Button>
  <Card>
  <CardHeader p={5} shadow="md" borderWidth="1px" borderRadius="md" bg='lightblue'>
    
    <Heading size='md' > Assignment Chakra Ui</Heading>
  </CardHeader>
  </Card>
  </Stack>
  )
}
export default MyApp;
