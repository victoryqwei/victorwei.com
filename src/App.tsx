import { Box, Center, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import vectorLogo from "./assets/vector.png";
import "./index.css";

const App: React.FC = () => {
  return (
    <>
      <Center height="100vh" padding="2rem" textAlign="center" color="rgba(255, 255, 255, 0.87)" lineHeight="1.5">
        <VStack>
          <Box padding="1.5em">
            <Link href="https://victorwei.com" target="_blank">
              <Image
                src={vectorLogo}
                alt="Vector logo"
                height="6em"
                transition="filter 300ms"
                _hover={{
                  filter: "drop-shadow(0 0 2em red)",
                }}
              />
            </Link>
          </Box>

          <Heading fontSize="3.2em" lineHeight="1.1">
            Hey, I'm Victor.
          </Heading>

          <Box padding="2em">
            <Text>Website is currently under construction. Check back later for updates!</Text>
          </Box>

          <Box padding="2em">
            <Text color="#888">
              Or check out my old personal website{" "}
              <Link
                color="#646cff"
                fontWeight="500"
                href="https://old.victorwei.com"
                _hover={{
                  color: "#535bf2",
                }}>
                here
              </Link>
            </Text>
          </Box>
        </VStack>
      </Center>
    </>
  );
};

export default App;
