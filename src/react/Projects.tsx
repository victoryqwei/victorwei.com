import { Box, HStack, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import miniblox from "../assets/miniblox.png";

const Projects: React.FC = () => {
  return (
    <Box id="projects" py="2em" px="2em" h="32em">
      <Heading fontSize="2xl" mb="1em">
        Featured Projects
      </Heading>

      <HStack h="25em">
        <Link href="https://miniblox.io" target="_blank">
          <Image
            src={miniblox}
            filter="blur(1.5px)"
            transition="filter 0.3s"
            _hover={{
              filter: "none",
            }}
            borderRadius="2px"></Image>
        </Link>

        <VStack zIndex={1} gap="1em" align="flex-end" p="1em">
          <Heading fontSize="3xl">Miniblox</Heading>
          <Box p="1em" bgColor="grey" w="120%">
            <Text>
              Miniblox is an online multiplayer voxel game that offers a variety of features, including competitive minigames, a wide
              selection of blocks to build with, challenging parkour levels, and much more!
            </Text>
          </Box>
          <HStack>
            <Text>Typescript</Text>
            <Text>Three.js</Text>
            <Text>Grafana</Text>
            <Text>Kubernetes</Text>
            <Text>Kubernetes</Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Projects;
