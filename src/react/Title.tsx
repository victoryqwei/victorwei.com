import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Center, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Typed from "react-typed";

const Title: React.FC = () => {
  return (
    <Center position="relative" h="100vh" w="100%" textAlign="center" userSelect="none">
      <Box
        position="absolute"
        inset="0"
        pointerEvents="none"
        bgImage="radial-gradient(closest-side, rgba(230, 31, 56, 0.16), transparent)"
      />
      <VStack position="relative">
        <Heading fontSize={["5xl", "6xl", "7xl"]} lineHeight="1.05" letterSpacing="-0.03em" mb="0.4em" mt="1em">
          Hey there, I'm{" "}
          <Box as="span" color="accent.300">
            Victor
          </Box>
          .
        </Heading>
        <Text fontSize="1.3em" mb="1em">
          I'm{" "}
          <Typed
            style={{
              fontSize: "1em",
            }}
            strings={["a student.", "a web developer.", "a game developer.", "an ML enthusiast."]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Text>

        <HStack gap="1em" my="2em" flexWrap="wrap" justifyContent="center">
          <Button as="a" href="#projects" variant="accent" p="1em">
            <HStack gap="0.3em">
              <Text>See My Work</Text>
              <ArrowForwardIcon />
            </HStack>
          </Button>
          <Button as="a" href="#about" variant="accentOutline" p="1em">
            Learn More
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
};

export default Title;
