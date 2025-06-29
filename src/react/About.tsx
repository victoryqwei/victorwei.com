import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";

const About: React.FC = () => {
  return (
    <Box id="about" pt="6em">
      <Heading fontSize="3xl" mb="1em">
        About Me
      </Heading>
      <HStack alignItems="flex-start">
        <VStack alignItems="flex-start" fontSize="1rem">
          <Text>
            Hey there! I’m Victor Wei, a Software Engineering student at the University of Waterloo with a passion for building thoughtful,
            high-impact software. I’ve developed and launched fullstack applications, multiplayer games with millions of players, and
            infrastructure tools that support real-world scalability.
          </Text>

          <Text>Outside of work and classes, I've been hacking away at a few web-based games. Feel free to check them out below!</Text>

          {/* <Text>Here's a few technologies I've been working with recently:</Text>

          <SimpleGrid columns={2} spacing={2} w="90%">
            <List>
              <ListItem>
                <ListIcon as={ArrowForwardIcon} />
                Typescript
              </ListItem>

              <ListItem>
                <ListIcon as={ArrowForwardIcon} />
                React
              </ListItem>

              <ListItem>
                <ListIcon as={ArrowForwardIcon} />
                Three.js
              </ListItem>
            </List>

            <List>
              <ListItem>
                <ListIcon as={ArrowForwardIcon} />
                Node.js
              </ListItem>

              <ListItem>
                <ListIcon as={ArrowForwardIcon} />
                Docker
              </ListItem>

              <ListItem>
                <ListIcon as={ArrowForwardIcon} />
                Kubernetes
              </ListItem>
            </List>
          </SimpleGrid> */}
        </VStack>

        {/* {!isMobile && <Image src={headshot} h="300px"></Image>} */}
      </HStack>
      {/* {isMobile && (
        <Center w="100%">
          <Image src={headshot} h="300px" mt="2em"></Image>
        </Center>
      )} */}
    </Box>
  );
};

export default About;
