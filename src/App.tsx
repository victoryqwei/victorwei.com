import { Box, Center, VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import "./index.css";
import About from "./react/About";
import Contact from "./react/Contact";
import NavBar from "./react/NavBar";
import Projects from "./react/Projects";
import Title from "./react/Title";
import WorkExperience from "./react/Work";

const FadeInSection = (props: { children: React.ReactNode }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (domRef.current) observer.observe(domRef.current);
  }, []);
  return (
    <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
      {props.children}
    </div>
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

            <FadeInSection>
              <About />
            </FadeInSection>
            <FadeInSection>
              <WorkExperience />
            </FadeInSection>

            <FadeInSection>
              <Projects />
            </FadeInSection>
            <Contact />

            {/* <Footer /> */}
          </VStack>
        </Box>
      </Center>
    </>
  );
};

export default App;
