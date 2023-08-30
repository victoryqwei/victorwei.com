import { Box, HStack, Heading, Text, Image, VStack, List, ListItem, ListIcon, Center, SimpleGrid, Link } from "@chakra-ui/react";
import headshot from "../assets/headshot.jpg";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useMobile } from "../utils/hooks";

const About: React.FC = () => {
  const [isMobile] = useMobile();

  return (
    <Box id="about" pt="6em" px="2em">
      <Heading fontSize="3xl" mb="1em">
        About Me
      </Heading>
      <HStack alignItems="flex-start">
        <VStack alignItems="flex-start" fontSize="1rem">
          <Text>
            Greetings! I'm Victor, student at the University of Waterloo and a passionate software enthusiast who enjoys crafting diverse
            software experiences. Outside of classes, I've been diving deep into projects like simulating car physics on web platforms and
            creating a browser-based voxel engine. I'm particularly drawn to computer vision, seeing its potential from autonomous vehicles
            to medical applications like cancer detection.
          </Text>

          <Text>
            Recently, I've been working on Miniblox, a multiplayer voxel engine that runs in the browser. Feel free to check it out @{" "}
            <Link color="blue.400" href="https://miniblox.io" target="_blank">
              miniblox.io
            </Link>
          </Text>

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
