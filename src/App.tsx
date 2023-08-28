import { Box, Center, VStack } from "@chakra-ui/react";
import "./index.css";
import About from "./react/About";
import Contact from "./react/Contact";
import NavBar from "./react/NavBar";
import Projects from "./react/Projects";
import Title from "./react/Title";
import WorkExperience from "./react/Work";

const App: React.FC = () => {
  return (
    <>
      <Center color="rgba(255, 255, 255, 0.87)">
        <NavBar />

        <Box textAlign="left" lineHeight="1.5" maxW="850px" w="100%">
          <VStack alignItems="flex-start">
            <Title />

            <About />

            <WorkExperience />

            <Projects />

            <Contact />

            {/* <Footer /> */}
          </VStack>
        </Box>
      </Center>
    </>
  );
};

export default App;
