import { Box, HStack, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import miniblox from "../assets/miniblox.png";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useMobile } from "../utils/hooks";

// interface ProjectData {
//   [key: string]: {
//     image: string;
//     description: string;
//   }
// }

const Projects: React.FC = () => {
  const [isMobile] = useMobile();

  return (
    <Box id="projects" py="2em" px="2em" h="32em">
      <Heading fontSize="2xl" mb="1em">
        Featured Projects
      </Heading>

      {!isMobile && (
        <HStack h="20em">
          <Image
            h="100%"
            src={miniblox}
            filter="blur(1.5px)"
            transition="filter 0.3s"
            _hover={{
              filter: "none",
              cursor: "pointer",
            }}
            borderRadius="2px"
            onClick={() => {
              window.open("https://miniblox.io", "_blank");
            }}
          />

          <VStack zIndex={1} gap="1em" align="flex-end" p="1em">
            <Heading fontSize="3xl">Miniblox</Heading>
            <Box p="1em" bgColor="grey" w="120%" borderRadius="3px">
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
            <HStack>
              <Link href="https://github.com/minibloxio" isExternal>
                <FiGithub size={20} />
              </Link>
              <Link href="https://miniblox.io" isExternal>
                <FiExternalLink size={20} />
              </Link>
            </HStack>
          </VStack>
        </HStack>
      )}

      {isMobile && (
        <Box h="20em" backgroundImage={`url(${miniblox})`} backgroundSize="cover" backgroundPosition="center" borderRadius="2px">
          {/* <Image
            h="100%"
            src={miniblox}
            filter="blur(1.5px)"
            transition="filter 0.3s"
            _hover={{
              filter: "none",
              cursor: "pointer",
            }}
            borderRadius="2px"
            onClick={() => {
              window.open("https://miniblox.io", "_blank");
            }}
          /> */}

          <VStack zIndex={1} gap="1em" align="flex-end" p="1em">
            <Heading fontSize="3xl">Miniblox</Heading>
            <Box p="1em" bgColor="grey" w="120%" borderRadius="3px">
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
            <HStack>
              <Link href="https://github.com/minibloxio" isExternal>
                <FiGithub size={20} />
              </Link>
              <Link href="https://miniblox.io" isExternal>
                <FiExternalLink size={20} />
              </Link>
            </HStack>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Projects;
