import { Box, HStack, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import FadeInSection from "./components/FadeInSection";
import SocialIcon from "./components/SocialIcon";

interface ProjectData {
  [key: string]: {
    description: string;
    tools: string[];
    links: {
      github: string;
      website: string;
    };
  };
}

const data: ProjectData = {
  "2048 Solver": {
    description: "Solves 2028 using a look-ahead heuristic algorithm.",
    tools: ["HTML5 Canvas", "Javascript"],
    links: {
      github: "https://github.com/victoryqwei/2048",
      website: "https://old.victorwei.com/projects/2048",
    },
  },
  "Self Driving Car": {
    description: "A neural evolution of augmenting topologies (NEAT) algorithm that trains a car to drive itself through a track.",
    tools: ["Python", "React", "Tensorflow.js"],
    links: {
      github: "https://github.com/victoryqwei/car",
      website: "https://old.victorwei.com/projects/car",
    },
  },
  "Drift Sim": {
    description:
      "A 2D car drifting simulator that emulates engine, tire, and suspension physics. Features a basic collision resolution system.",
    tools: ["HTML/CSS", "Angular", "Flask", "OpenCV"],
    links: {
      github: "https://github.com/victoryqwei/car-sim",
      website: "https://old.victorwei.com/projects/car-sim",
    },
  },
  "Cloth Sim": {
    description:
      "A cloth simulator using verlet integration to simulate cloth physics. Includes adjustable features such as gravity, wind, and cloth stiffness.",
    tools: ["Typescript", "Three.js", "Grafana", "Github Actions", "Kubernetes"],
    links: {
      github: "https://github.com/victoryqwei/cloth",
      website: "https://old.victorwei.com/projects/cloth",
    },
  },
  "Neuroevolution FlappyBird": {
    description: "A self-learning neural network that learns to play Flappy Bird using a genetic algorithm.",
    tools: ["Python", "React", "Tensorflow.js"],
    links: {
      github: "https://github.com/victoryqwei/AirFlip",
      website: "https://airflip.victorwei.com",
    },
  },
  "Metro Game": {
    description: "A transit game that simulates the movement of buses and passengers.",
    tools: ["HTML/CSS", "Angular", "Flask", "OpenCV"],
    links: {
      github: "https://github.com/victoryqwei/metro",
      website: "https://old.victorwei.com/projects/metro",
    },
  },
};

const Projects: React.FC = () => {
  return (
    <Box id="projects" py="6em" px="2em" w="100%">
      <Heading fontSize="3xl" mb="1em">
        More Projects
      </Heading>

      <SimpleGrid columns={[1, 2]} gap="1.5em">
        {Object.keys(data).map((name, i) => {
          return (
            <FadeInSection key={i}>
              <Box
                position="relative"
                borderRadius="3px"
                borderWidth="1px"
                overflow="hidden"
                bgColor="#363636"
                h="100%"
                _hover={{
                  transform: "scale(1.05)",
                  cursor: "pointer",
                }}
                transition="0.3s">
                <VStack zIndex={1} gap="1em" align="flex-start" p="1em" justifyContent="space-between" h="100%">
                  <HStack justifyContent="space-between" w="100%">
                    <Heading fontSize="2xl">{name}</Heading>

                    <HStack gap="0.5em">
                      <SocialIcon icon={<FiGithub size="1.3em" />} link={data[name].links.github} />
                      <SocialIcon icon={<FiExternalLink size="1.3em" />} link={data[name].links.website} />
                    </HStack>
                  </HStack>
                  <Text>{data[name].description}</Text>
                  <Text>{data[name].tools.join(" ")}</Text>
                </VStack>
              </Box>
            </FadeInSection>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
