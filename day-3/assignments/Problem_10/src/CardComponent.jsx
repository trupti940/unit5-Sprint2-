import { Box, Heading, Stack, Image, Text } from '@chakra-ui/react';

const CardComponent = () => {
    return (

        <Stack spacing={6} height="100vh">
            <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
            ></Box>
            <Heading as='h2' size='2xl'>
                Voire Bird
            </Heading>
            <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaDs-7g1rqcSsHc43zisJn2sDDbFDUhUY3w&s"
                alt="Card Image"
                borderRadius="full"
                boxSize="150px"
                mx="auto"
                mb={4}
            />
            <Text fontSize='10px' color='black'>
                The voire bird, also known as the white wagtail, is a small, slender bird often seen in <br />Europe and Asia. It is known for its distinctive white and black plumage and <br />its habit of wagging its tail as it walks or perches near water.
            </Text>
        </Stack>

    )

}
export default CardComponent;