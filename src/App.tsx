import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import "./index.css";
import NavBar from "./react/NavBar";
import Title from "./react/Title";
import WorkExperience from "./react/Work";
import About from "./react/About";
import { useRef } from "react";

const App: React.FC = () => {
  const aboutRef = useRef(null);
  return (
    <>
      <Center color="rgba(255, 255, 255, 0.87)">
        <NavBar />

        <Box textAlign="left" lineHeight="1.5" maxW="850px" w="100%">
          <VStack alignItems="flex-start">
            <Title aboutRef={aboutRef} />

            <About ref={aboutRef} />

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
