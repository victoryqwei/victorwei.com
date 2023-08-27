import { Box, HStack, Heading, Text, Image } from "@chakra-ui/react";
import headshot from "../assets/headshot.jpg";

const About: React.FC = () => {
  return (
    <Box h="100vh" id="about" py="6em" px="2em">
      <Heading fontSize="2xl" mb="2em">
        About Me
      </Heading>
      <HStack>
        <Text fontSize="1.1em">
          Hello! My name is Victor and I enjoy building software! I'm currently a third-year Software Engineering student at the University
          of Waterloo. My interests lie in machine learning, game development, and physics simulations. Additionally, I have a strong
          background in web development, data algorithms, and graphics.
        </Text>

        <Image src={headshot} h="300px"></Image>
      </HStack>
    </Box>
  );
};

export default About;
