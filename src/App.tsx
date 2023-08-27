import { Box, Center, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import "./index.css";
import NavBar from "./react/NavBar";
import Title from "./react/Title";

const WorkExperience: React.FC = () => {
  return (
    <>
      <Heading fontSize="lg" mb="0.5em">
        Work Experience
      </Heading>

      <VStack alignItems="flex-start">
        <Box>
          <HStack>
            <Heading fontSize="md">ArenaX Labs</Heading>
            <Text as="i">Software Developer</Text>
          </HStack>

          <Text>May 2021 - August 2021</Text>
        </Box>
        <Box>
          <HStack>
            <Heading fontSize="md">ArenaX Labs</Heading>
            <Text as="i">Software Developer</Text>
          </HStack>

          <Text>May 2021 - August 2021</Text>
        </Box>
        <Box>
          <HStack>
            <Heading fontSize="md">Voiceflow</Heading>
            <Text as="i">Full Stack Developer Intern</Text>
          </HStack>

          <Text>May 2021 - August 2021</Text>
        </Box>
        <Box>
          <HStack>
            <Heading fontSize="md">Mitra Biotechnologies</Heading>
            <Text as="i">Software Engineering Intern</Text>
          </HStack>

          <Text>May 2021 - August 2021</Text>
        </Box>
      </VStack>
    </>
  );
};

const App: React.FC = () => {
  return (
    <>
      <Center color="rgba(255, 255, 255, 0.87)">
        <NavBar />

        <Box textAlign="left" lineHeight="1.5" maxW="850px" w="100%">
          <VStack alignItems="flex-start">
            <Title />

            <Box h="100vh">
              <Heading fontSize="lg" mb="0.5em">
                About Me
              </Heading>
              <Text>
                I'm a third-year Software Engineering student at the University of Waterloo. My interests lie in machine learning, game
                development, and physics simulations. Additionally, I have a strong background in web development, data algorithms, and
                graphics.
              </Text>
            </Box>

            <WorkExperience />

            <Heading fontSize="lg" mb="0.5em">
              Past Projects
            </Heading>

            <Heading fontSize="lg" mb="0.5em">
              Awards
            </Heading>
          </VStack>
        </Box>
      </Center>
    </>
  );
};

export default App;
