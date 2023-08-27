import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";

const WorkExperience: React.FC = () => {
  return (
    <Box h="100vh" id="experience" py="6em">
      <Heading fontSize="2xl" mb="0.5em">
        Work Experience
      </Heading>

      <VStack alignItems="flex-start">
        <Box>
          <HStack>
            <Heading fontSize="md">ArenaX Labs</Heading>
            <Text as="i">Software Developer</Text>
          </HStack>

          <Text>May 2021 - August 2021</Text>
        </Box>
        <Box>
          <HStack>
            <Heading fontSize="md">ArenaX Labs</Heading>
            <Text as="i">Software Developer</Text>
          </HStack>

          <Text>May 2021 - August 2021</Text>
        </Box>
        <Box>
          <HStack>
            <Heading fontSize="md">Voiceflow</Heading>
            <Text as="i">Full Stack Developer Intern</Text>
          </HStack>

          <Text>May 2021 - August 2021</Text>
        </Box>
        <Box>
          <HStack>
            <Heading fontSize="md">Mitra Biotechnologies</Heading>
            <Text as="i">Software Engineering Intern</Text>
          </HStack>

          <Text>May 2021 - August 2021</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default WorkExperience;
