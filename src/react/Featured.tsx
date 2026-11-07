import { Box, HStack, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import airflip from "../assets/airflip.webp";
import mergeRot from "../assets/merge-rot.webp";
import miniblox from "../assets/miniblox.webp";
import quickmark from "../assets/quickmark.webp";
import { useMobile } from "../utils/hooks";
import FadeInSection from "./components/FadeInSection";
import SocialStack from "./components/SocialStack";
import ToolTags from "./components/ToolTags";

interface ProjectData {
  [key: string]: {
    image: string;
    description: string;
    tools: string[];
    links: {
      github?: string;
      devpost?: string;
      website: string;
    };
  };
}

const ProjectImage: React.FC<{ src: string; link: string; name: string }> = ({ src, link, name }) => {
  return (
    <Link
      href={link}
      isExternal
      w="50%"
      role="group"
      overflow="hidden"
      borderRadius="8px"
      boxShadow="0 8px 24px rgba(0, 0, 0, 0.35)">
      <Image
        w="100%"
        src={src}
        alt={`Screenshot of ${name}`}
        loading="lazy"
        filter="brightness(0.85)"
        transition="filter 0.3s, transform 0.3s"
        _groupHover={{ filter: "none", transform: "scale(1.03)" }}
        _groupFocusVisible={{ filter: "none", transform: "scale(1.03)" }}
      />
    </Link>
  );
};

const data: ProjectData = {
  Miniblox: {
    image: miniblox,
    description:
      "A multiplayer voxel game playable on the web browser. Offers a variety of features, including competitive minigames, a wide selection of blocks to build with, challenging parkour levels, and much more! Currently attracting over 1.1 million monthly active users.",
    tools: ["TypeScript", "Three.js", "Chakra UI", "Kubernetes", "Docker"],
    links: {
      github: "https://github.com/minibloxio",
      website: "https://miniblox.io",
    },
  },
  "Merge Rot": {
    image: mergeRot,
    description:
      "A fun twist on the classic watermelon merge game where players combine quirky items into bizarre, oversized versions. Features multiple themes including Italian brainrot, cats, and capybaras.",
    tools: ["TypeScript", "HTML5 Canvas"],
    links: {
      website: "https://mergerot.gg",
    },
  },
  AirFlip: {
    image: airflip,
    description:
      "A contactless PDF viewer that allows users to flip through pages using face gestures and auditory commands. Great for musicians, workers, people with disabilities, or just lazy people. Winner of Hack the North 2020++.",
    tools: ["Python", "React", "TensorFlow.js"],
    links: {
      github: "https://github.com/victoryqwei/AirFlip",
      devpost: "https://devpost.com/software/airflip",
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
      devpost: "https://devpost.com/software/quickmark-arjq6v",
      website: "https://quickmark.victorwei.com",
    },
  },
};

const Featured: React.FC = () => {
  const [isMobile] = useMobile();

  return (
    <Box id="projects" py="5em" w="100%">
      <Heading fontSize="3xl" mb="1em">
        Featured Projects
      </Heading>

      <VStack gap="3em">
        {Object.keys(data).map((name, i) => {
          const isOdd = i % 2 === 1;

          if (isMobile) {
            return (
              <FadeInSection key={i}>
                <Box position="relative" w="100%" borderRadius="8px" overflow="hidden" zIndex={0}>
                  <Image
                    position="absolute"
                    w="100%"
                    h="100%"
                    src={data[name].image}
                    alt=""
                    loading="lazy"
                    objectFit="cover"
                    filter="brightness(0.2) blur(1.5px)"
                    transition="filter 0.2s"
                    zIndex={-1}
                  />
                  <VStack zIndex={1} gap="1em" align="flex-start" p="1em">
                    <Heading fontSize="2xl">{name}</Heading>
                    <Text>{data[name].description}</Text>
                    <ToolTags tools={data[name].tools} />

                    <SocialStack links={data[name].links} />
                  </VStack>
                </Box>
              </FadeInSection>
            );
          } else {
            return (
              <FadeInSection key={i}>
                <HStack>
                  {!isOdd && <ProjectImage src={data[name].image} link={data[name].links.website} name={name} />}

                  <VStack zIndex={1} gap="1em" align={isOdd ? "flex-start" : "flex-end"} py="1em" w="50%">
                    <Heading fontSize="2xl">{name}</Heading>
                    <Box p="1em" bgColor="#2e2e2e" w="120%" borderRadius="8px" boxShadow="0 8px 24px rgba(0, 0, 0, 0.35)">
                      <Text>{data[name].description}</Text>
                    </Box>
                    <ToolTags tools={data[name].tools} justify={isOdd ? "flex-start" : "flex-end"} />
                    <SocialStack links={data[name].links} />
                  </VStack>

                  {isOdd && <ProjectImage src={data[name].image} link={data[name].links.website} name={name} />}
                </HStack>
              </FadeInSection>
            );
          }
        })}
      </VStack>
    </Box>
  );
};

export default Featured;
