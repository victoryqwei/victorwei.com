import { Box, HStack, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import miniblox from "../assets/miniblox.png";
import airflip from "../assets/airflip.png";
import quickmark from "../assets/quickmark.png";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useMobile } from "../utils/hooks";

interface ProjectData {
  [key: string]: {
    image: string;
    description: string;
    tools: string[];
    links: {
      github: string;
      website: string;
    };
  };
}

const ProjectImage: React.FC<{ src: string; link: string }> = ({ src, link }) => {
  return (
    <Image
      w="50%"
      src={src}
      filter="blur(1.5px)"
      transition="filter 0.3s"
      _hover={{
        filter: "none",
        cursor: "pointer",
      }}
      borderRadius="2px"
      onClick={() => {
        window.open(link, "_blank");
      }}
    />
  );
};

const data: ProjectData = {
  Miniblox: {
    image: miniblox,
    description:
      "An multiplayer voxel game playable on the web browser. Offers a variety of features, including competitive minigames, a wide selection of blocks to build with, challenging parkour levels, and much more! Currently accumulated over 14K registered accounts with 10K monthly active players.",
    tools: ["Typescript", "Three.js", "Grafana", "Github Actions", "Kubernetes"],
    links: {
      github: "https://github.com/minibloxio",
      website: "https://miniblox.io",
    },
  },
  AirFlip: {
    image: airflip,
    description:
      "A contactless pdf viewer that allows users to flip through pages using face gestures and auditory commands. Great for musicians, workers, people with disabilities, or just lazy people. Winner of Hack the North 2020++.",
    tools: ["Python", "React", "Tensorflow.js"],
    links: {
      github: "https://github.com/victoryqwei/AirFlip",
      website: "https://airflip.victorwei.com",
    },
  },
  QuickMark: {
    image: quickmark,
    description:
      "A web application that automates and streamlines the marking of test responses using computer vision. Wrote a pipeline to automatically crop questions based on their bounding box. Winner of Hack the North 2020.",
    tools: ["HTML/CSS", "Angular", "Flask", "OpenCV"],
    links: {
      github: "https://github.com/Deus-Group-HTN/quickmark",
      website: "https://quickmark.victorwei.com",
    },
  },
};

const Projects: React.FC = () => {
  const [isMobile] = useMobile();

  return (
    <Box id="projects" py="2em" px="2em" w="100%">
      <Heading fontSize="2xl" mb="1em">
        Featured Projects
      </Heading>

      <VStack gap="2em">
        {Object.keys(data).map((name, i) => {
          const isOdd = i % 2 === 1;

          if (isMobile) {
            return (
              <Box
                key={i}
                w="100%"
                className="background-filter"
                backgroundImage={`url(${data[name].image})`}
                backgroundSize="cover"
                backgroundPosition="center"
                borderRadius="3px"
                backdropFilter="blur(1px)">
                <VStack zIndex={1} gap="1em" align="flex-start" p="1em" className="u-non-blurred">
                  <Heading fontSize="2xl">{name}</Heading>
                  <Text>{data[name].description}</Text>
                  <Text>{data[name].tools.join(" ")}</Text>
                  <HStack>
                    <Link href={data[name].links.github} isExternal>
                      <FiGithub size={20} />
                    </Link>
                    <Link href={data[name].links.website} isExternal>
                      <FiExternalLink size={20} />
                    </Link>
                  </HStack>
                </VStack>
              </Box>
            );
          } else {
            return (
              <HStack key={i}>
                {!isOdd && <ProjectImage src={data[name].image} link={data[name].links.website} />}

                <VStack zIndex={1} gap="1em" align={isOdd ? "flex-start" : "flex-end"} p="1em" w="50%">
                  <Heading fontSize="2xl">{name}</Heading>
                  <Box p="1em" bgColor="#363636" w="120%" borderRadius="3px">
                    <Text>{data[name].description}</Text>
                  </Box>
                  <HStack>
                    {data[name].tools.map((v, i) => (
                      <Text key={i} whiteSpace="nowrap">
                        {v}{" "}
                      </Text>
                    ))}
                  </HStack>
                  <HStack>
                    <Link href={data[name].links.github} isExternal>
                      <FiGithub size={20} />
                    </Link>
                    <Link href={data[name].links.website} isExternal>
                      <FiExternalLink size={20} />
                    </Link>
                  </HStack>
                </VStack>

                {isOdd && <ProjectImage src={data[name].image} link={data[name].links.website} />}
              </HStack>
            );
          }
        })}
      </VStack>
    </Box>
  );
};

export default Projects;
