import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Center, HStack, Heading, Link, Text, VStack } from "@chakra-ui/react";
import Typed from "react-typed";

const Title: React.FC = () => {
  return (
    <Center h="100vh" w="100%" textAlign="center" userSelect="none">
      <VStack>
        <Heading fontSize="5xl" mb="0.5em" mt="2em">
          Hey there, I'm Victor.
        </Heading>
        <Text fontSize="1.2em" mb="1em">
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

        <Link href="#about" my="3em">
          <Button
            backgroundColor="transparent"
            border="
                1px solid white"
            color="white"
            p="1em"
            _hover={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}>
            <HStack gap="0.3em">
              <Text>Learn More</Text>
              <ArrowForwardIcon />
            </HStack>
          </Button>
        </Link>
      </VStack>
    </Center>
  );
};

export default Title;
