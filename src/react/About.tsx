import { Box, Heading, Text, forwardRef } from "@chakra-ui/react";

const About = forwardRef((_, ref) => {
  return (
    <Box h="100vh" ref={ref}>
      <Heading fontSize="2xl" mb="0.5em">
        About Me
      </Heading>
      <Text>
        I'm a third-year Software Engineering student at the University of Waterloo. My interests lie in machine learning, game development,
        and physics simulations. Additionally, I have a strong background in web development, data algorithms, and graphics.
      </Text>
    </Box>
  );
});

export default About;
