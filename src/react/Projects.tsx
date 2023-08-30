import { Box, HStack, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import FadeInSection from "./components/FadeInSection";
import SocialIcon from "./components/SocialIcon";

interface ProjectData {
  [key: string]: {
    description: string;
    tools: string[];
    links: {
      github?: string;
      website?: string;
    };
  };
}

const data: ProjectData = {
  "Interplanetarium 2": {
    description:
      "A multiplayer survival game where a player attempts to survive in space within a little rocket. Shoot down turrets to gain xp and advance to the next stage!",
    tools: ["Javascript", "Node.js", "Socket.io"],
    links: {
      github: "https://github.com/victoryqwei/Interplanetarium",
      website: "https://space.victorwei.com/server1",
    },
  },
  GymLens: {
    description: "A virtual gym trainer that uses pose detection to track the number of reps as well as form.",
    tools: ["Javascript", "Angular", "Tensorflow.js"],
    links: {
      github: "https://github.com/victoryqwei/GymLens",
      website: "https://gymlens.victorwei.com",
    },
  },
  Core: {
    description:
      "A multiplayer game where the main focus is to protect a Core and fight other players. Collect power to upgrade your base to get stronger.",
    tools: ["Javascript", "Node.js", "Socket.io"],
    links: {
      github: "https://github.com/victoryqwei/Core",
      website: "https://core.victorwei.com",
    },
  },
  Knoggin: {
    description: "A web app with a collection of brain training games to help improve memory and focus.",
    tools: ["Typescript", "React"],
    links: {
      github: "https://github.com/NatHacks-Bird-Brain/knoggin",
    },
  },
  "Self Driving Car": {
    description: "A neural evolution of augmenting topologies (NEAT) algorithm that trains a car to drive itself through a track.",
    tools: ["Javascript", "HTML5 Canvas"],
    links: {
      github: "https://github.com/victoryqwei/car",
      website: "https://old.victorwei.com/projects/car",
    },
  },
  "Drift Sim": {
    description:
      "A 2D car drifting simulator that emulates engine, tire, and suspension physics. Features a basic collision resolution system.",
    tools: ["Javascript", "HTML5 Canvas"],
    links: {
      github: "https://github.com/victoryqwei/car-sim",
      website: "https://old.victorwei.com/projects/car-sim",
    },
  },
  "Cloth Sim": {
    description:
      "A cloth simulator using verlet integration to simulate cloth physics. Includes adjustable features such as gravity, wind, and cloth stiffness.",
    tools: ["Javascript", "HTML5 Canvas"],
    links: {
      github: "https://github.com/victoryqwei/cloth",
      website: "https://old.victorwei.com/projects/cloth",
    },
  },
  "Handwritten Math Solver": {
    description: "A neural network that recognizes handwritten math expressions (BEDMAS) and solves them. Trained on the MNIST dataset.",
    tools: ["C++"],
    links: {
      github: "https://github.com/victoryqwei/Handwritten-Expression-Simplifier",
    },
  },
  "FlappyBird AI": {
    description: "A self-learning neural network that learns to play Flappy Bird using a genetic algorithm.",
    tools: ["Javascript", "HTML5 Canvas"],
    links: {
      github: "https://github.com/victoryqwei/flappybird",
      website: "https://old.victorwei.com/projects/flappybird",
    },
  },
  "Snake AI": {
    description: "A self-learning neural network that learns to play Snake using a genetic algorithm.",
    tools: ["Javascript", "HTML5 Canvas"],
    links: {
      website: "https://old.victorwei.com/projects/snake",
    },
  },
  "Metro Game": {
    description: "A transit game that simulates the movement of buses and passengers.",
    tools: ["Javascript", "HTML5 Canvas"],
    links: {
      github: "https://github.com/victoryqwei/metro",
      website: "https://old.victorwei.com/projects/metro",
    },
  },
  Pool: {
    description: "A 2D pool game with basic physics and collision detection.",
    tools: ["Javascript", "HTML5 Canvas"],
    links: {
      github: "https://github.com/victoryqwei/pool",
      website: "https://old.victorwei.com/projects/pool",
    },
  },
  "2.5D Shooter": {
    description: "A basic shooter game with Wolfenstein 3D style graphics.",
    tools: ["Javascript", "HTML5 Canvas"],
    links: {
      website: "https://old.victorwei.com/projects/ray",
    },
  },
  "2048 Solver": {
    description: "Solves 2028 using a look-ahead heuristic algorithm.",
    tools: ["Javascript", "HTML5 Canvas"],
    links: {
      github: "https://github.com/victoryqwei/2048",
      website: "https://old.victorwei.com/projects/2048",
    },
  },
  "Maze Runner": {
    description:
      "A game where a player tries to escapes a procedurally generated maze while chased by an enemy. Uses the A* algorithm to track the player.",
    tools: ["Javascript", "HTML5 Canvas"],
    links: {
      github: "https://github.com/victoryqwei/Maze-Runner",
    },
  },
  "Old Website": {
    description: "My previous iteration of victorwei.com",
    tools: ["Javascript", "Angular", "Node.js"],
    links: {
      github: "https://github.com/victoryqwei/personal",
      website: "https://old.victorwei.com",
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
                transition="0.3s"
                onClick={() => {
                  if (data[name].links.website) {
                    window.open(data[name].links.website, "_blank");
                  } else if (data[name].links.github) {
                    window.open(data[name].links.github, "_blank");
                  }
                }}>
                <VStack zIndex={1} gap="1em" align="flex-start" p="1em" justifyContent="space-between" h="100%">
                  <HStack justifyContent="space-between" w="100%">
                    <Heading fontSize="2xl">{name}</Heading>

                    <HStack gap="0.5em">
                      <SocialIcon icon={<FiGithub size="1.3em" />} link={data[name].links.github} />
                      <SocialIcon icon={<FiExternalLink size="1.3em" />} link={data[name].links.website} />
                    </HStack>
                  </HStack>
                  <Text>{data[name].description}</Text>
                  <Text color="whiteAlpha.700">{data[name].tools.join(" ")}</Text>
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
