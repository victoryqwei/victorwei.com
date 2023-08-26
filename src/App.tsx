import { Box, Button, Center, HStack, Heading, Image, Link, SlideFade, Text, VStack } from "@chakra-ui/react";
import vectorLogo from "./assets/vector.png";
import "./index.css";
import { useEffect, useState } from "react";
import { AcrylicBackgroundChakraProps } from "./gui/constants";
import Typed from "react-typed";

const NavBar: React.FC = () => {
  // new:
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // new:
  const [visible, setVisible] = useState(true);

  // new function:
  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(prevScrollPos > currentScrollPos);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Box width="100%" position="fixed" left="0" top="0">
      <SlideFade in={visible} offsetY="-3.8rem">
        <HStack justifyContent="space-between" p="1rem" {...AcrylicBackgroundChakraProps}>
          <HStack gap={0}>
            <Link href="https://victorwei.com">
              <Box pr="1em">
                <Image
                  src={vectorLogo}
                  alt="Vector logo"
                  height="1.8rem"
                  transition="filter 300ms"
                  _hover={{
                    filter: "drop-shadow(0 0 2em red)",
                  }}
                />
              </Box>
            </Link>

            <Heading fontSize="1.5em">Victor Wei</Heading>
          </HStack>

          <Button>Contact Me</Button>
        </HStack>
      </SlideFade>
    </Box>
  );
};

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
            <Center h="100vh" w="100%" textAlign="center">
              <VStack>
                <Heading fontSize="2.2em" mb="0.5em">
                  Hey there, I'm Victor.
                </Heading>
                <Text fontSize="1.2em" mb="1em">
                  I'm a{" "}
                  <Typed
                    style={{
                      fontSize: "1em",
                    }}
                    strings={["web developer.", "game developer.", "ML enthusiast."]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  />
                </Text>
              </VStack>
            </Center>

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
