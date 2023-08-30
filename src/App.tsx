import { Box, Center, VStack } from "@chakra-ui/react";
import "./index.css";
import About from "./react/About";
import Contact from "./react/Contact";
import NavBar from "./react/NavBar";
import Featured from "./react/Featured";
import Title from "./react/Title";
import WorkExperience from "./react/Work";
import FadeInSection from "./react/components/FadeInSection";
import Socials from "./react/Socials";
import Projects from "./react/Projects";
import { useMobile } from "./utils/hooks";
import CursorCanvas from "./react/CursorCanvas";

const App: React.FC = () => {
  const [isMobile] = useMobile();

  return (
    <>
      <Center color="rgba(255, 255, 255, 0.87)">
        <NavBar />

        <Socials />

        {!isMobile && <CursorCanvas />}

        <Box textAlign="left" lineHeight="1.5" maxW="850px" w="100%" px="2em" mx={isMobile ? "0em" : "5em"}>
          <VStack alignItems="flex-start">
            <Title />

            <FadeInSection>
              <About />
            </FadeInSection>
            <FadeInSection>
              <WorkExperience />
            </FadeInSection>

            <FadeInSection>
              <Featured />
            </FadeInSection>

            <FadeInSection>
              <Projects />
            </FadeInSection>

            <FadeInSection>
              <Contact />
            </FadeInSection>
          </VStack>
        </Box>
      </Center>
    </>
  );
};

export default App;
