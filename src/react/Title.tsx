import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Center, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Typed from "react-typed";

const Title: React.FC = () => {
  return (
    <Center h="100vh" w="100%" textAlign="center">
      <VStack>
        <Heading fontSize="3em" mb="0.5em">
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

        <Button
          backgroundColor="rgba(0, 0, 0, 0)"
          border="
                1px solid white"
          color="white"
          p="1em"
          _hover={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
          mt="2em">
          <HStack gap="0.3em">
            <Text>Learn More</Text>
            <ArrowForwardIcon />
          </HStack>
        </Button>
      </VStack>
    </Center>
  );
};

export default Title;
