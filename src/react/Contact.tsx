import { Button, Center, Heading, Link, VStack, Text, Box } from "@chakra-ui/react";

const Contact: React.FC = () => {
  return (
    <Center id="contact" py="2em" px="2em" h="100vh" w="100%" textAlign="center">
      <VStack gap={0} justifyContent="space-between" h="100%">
        <Box></Box>

        <VStack gap="1em">
          <Heading fontSize="4xl">Get In Touch</Heading>
          <Text mb="3em">If you have any questions or just want to say hi, feel free to reach out to me!</Text>
          <Link href="mailto:victoryqwei@gmail.com" target="_blank">
            <Button
              backgroundColor="transparent"
              border="
                1px solid white"
              color="white"
              p="1em"
              _hover={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}>
              Contact Me!
            </Button>
          </Link>
        </VStack>
        <Box>
          <Text>website built by yours truly | © 2023 Victor Wei</Text>
        </Box>
      </VStack>
    </Center>
  );
};

export default Contact;
