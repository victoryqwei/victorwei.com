import { Box, HStack, Heading, Text, Image, VStack, List, ListItem, ListIcon, Center, SimpleGrid } from "@chakra-ui/react";
import headshot from "../assets/headshot.jpg";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useMobile } from "../utils/hooks";

const About: React.FC = () => {
  const [isMobile] = useMobile();

  return (
    <Box id="about" pt="6em" px="2em">
      <Heading fontSize="2xl" mb="2em">
        About Me
      </Heading>
      <HStack>
        <VStack alignItems="flex-start" fontSize="1rem">
          <Text>
            Hello! My name is Victor and I am currently a third-year Software Engineering student at the University of Waterloo. I love
            working with software and I have a strong passion for machine learning, game development, and physics simulations.
          </Text>

          <Text></Text>

          <Text>Here's a few technologies I've been working with recently:</Text>

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
          </SimpleGrid>
        </VStack>

        {!isMobile && <Image src={headshot} h="300px"></Image>}
      </HStack>
      {isMobile && (
        <Center w="100%">
          <Image src={headshot} h="300px" mt="2em"></Image>
        </Center>
      )}
    </Box>
  );
};

export default About;
