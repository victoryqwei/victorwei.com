import { Box, Button, Center, HStack, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import FadeInSection from "./components/FadeInSection";
import SocialIcon from "./components/SocialIcon";
import interplanetarium from "../assets/projects/interplanetarium.png";
import gymlens from "../assets/projects/gymlens.png";
import core from "../assets/projects/core.png";
import knoggin from "../assets/projects/knoggin.png";
import car3d from "../assets/projects/car3d.png";
import driftsim from "../assets/projects/driftsim.png";
import { useMobile } from "../utils/hooks";

interface ProjectData {
  [key: string]: {
    image?: string;
    isWhite?: boolean;
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
    isWhite: true,
    image: interplanetarium,
    description:
      "A multiplayer survival game where a player attempts to survive in space within a little rocket. Shoot down turrets to gain xp and advance to the next stage!",
    tools: ["Javascript", "Node.js", "Socket.io"],
    links: {
      github: "https://github.com/victoryqwei/Interplanetarium",
      website: "https://space.victorwei.com/server1",
    },
  },
  GymLens: {
    image: gymlens,
    description: "A virtual gym trainer that uses pose detection to track the number of reps as well as form.",
    tools: ["Javascript", "Angular", "Tensorflow.js"],
    links: {
      github: "https://github.com/victoryqwei/GymLens",
      website: "https://gymlens.victorwei.com",
    },
  },
  Core: {
    image: core,
    description:
      "A multiplayer game where the main focus is to protect a Core and fight other players. Collect power to upgrade your base to get stronger.",
    tools: ["Javascript", "Node.js", "Socket.io"],
    links: {
      github: "https://github.com/victoryqwei/Core",
      website: "https://core.victorwei.com",
    },
  },
  Knoggin: {
    image: knoggin,
    description: "A web app with a collection of brain training games to help improve memory and focus.",
    tools: ["Typescript", "React"],
    links: {
      github: "https://github.com/NatHacks-Bird-Brain/knoggin",
    },
  },
  "3D Car Sim": {
    image: car3d,
    description: "A 3D car simulator that emulates engine, tire, and suspension physics.",
    tools: ["Javascript", "Three.js"],
    links: {
      github: "https://github.com/victoryqwei/car-3d",
      website: "https://old.victorwei.com/projects/car-3d",
    },
  },
  "Drift Sim": {
    image: driftsim,
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
  "Car AI": {
    description: "A neural evolution of augmenting topologies (NEAT) algorithm that trains a car to drive itself through a track.",
    tools: ["Javascript", "HTML5 Canvas"],
    links: {
      github: "https://github.com/victoryqwei/car",
      website: "https://old.victorwei.com/projects/car",
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
  const [loadMore, setLoadMore] = useState(false);
  const [isMobile] = useMobile();

  return (
    <Box id="more_projects" py="6em" w="100%">
      <Heading fontSize="3xl" mb="1em">
        More Projects
      </Heading>

      <SimpleGrid columns={[1, 2]} gap="1.5em">
        {Object.keys(data).map((name, i) => {
          if (i > 5 && !loadMore) return null;

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
                }}
                role={!data[name].image || isMobile ? undefined : "group"}>
                {data[name].image && (
                  <Image
                    position="absolute"
                    w="100%"
                    h="100%"
                    src={data[name].image}
                    objectFit="cover"
                    objectPosition="center"
                    filter="brightness(0.2) blur(1.5px)"
                    transition="filter 0.3s"
                    _groupHover={{ filter: "none" }}
                    borderRadius="2px"
                    zIndex={0}
                  />
                )}

                <VStack gap="1em" align="flex-start" p="1em" justifyContent="space-between" h="100%">
                  <HStack justifyContent="space-between" w="100%" zIndex={0}>
                    <Heading fontSize="2xl" _groupHover={{ opacity: 0 }} transition="0.3s">
                      {name}
                    </Heading>

                    <HStack gap="0.5em" _groupHover={{ color: data[name].isWhite ? "white" : "black" }}>
                      <SocialIcon icon={<FiGithub size="1.3em" />} link={data[name].links.github} />
                      <SocialIcon icon={<FiExternalLink size="1.3em" />} link={data[name].links.website} />
                    </HStack>
                  </HStack>
                  <Text zIndex={0} _groupHover={{ opacity: 0 }} transition="0.3s">
                    {data[name].description}
                  </Text>
                  <Text color="whiteAlpha.700" zIndex={0} _groupHover={{ opacity: 0 }} transition="0.3s">
                    {data[name].tools.join(" ")}
                  </Text>
                </VStack>
              </Box>
            </FadeInSection>
          );
        })}
      </SimpleGrid>

      <Center my="2em">
        <Button
          backgroundColor="transparent"
          border="
                1px solid white"
          color="white"
          p="1em"
          _hover={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
          onClick={() => {
            setLoadMore(!loadMore);

            if (loadMore) {
              // scroll to #projects
              const element = document.getElementById("more_projects");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }
          }}>
          <HStack gap="0.3em">
            <Text>{loadMore ? "Show Less" : "Show More"}</Text>
          </HStack>
        </Button>
      </Center>
    </Box>
  );
};

export default Projects;
