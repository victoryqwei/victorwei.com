import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import airflip from "../assets/airflip.png";
import miniblox from "../assets/miniblox.png";
import quickmark from "../assets/quickmark.png";
import { useMobile } from "../utils/hooks";
import FadeInSection from "./components/FadeInSection";
import SocialStack from "./components/SocialStack";

interface ProjectData {
  [key: string]: {
    image: string;
    description: string;
    tools: string[];
    links: {
      github: string;
      devpost?: string;
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
      transition="filter 0.2s"
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
    description: [
      "I suck at making AntiCheats, as we all know, I have to admit, I am retarded. This",
      "project is a crappy voxel game that is made by incompetent AntiCheat developers.",
      "I will quote the following announcement from the Miniblox discord: ",
      "I haven't and I won't take an IQ test. If I did, I would probably get -Infinity.",
      "Considering all the stupid programming things I've done",
      "(forgetting to deploy my server production builds to the Discord Activity version",
      " (which allowed people to bypass my VPN and IP checks, as the version it used didn't have any of it),",
      " forgetting to validate CAPTCHA tokens whenever someone joined in my stupid idea of",
      `"fending off Miniblox from Translation Layer users"`,
      ", because I can't fix my AC/Anti Cheat because I'm stupid, so instead,",
      "I'll screw around with the translation layer users,",
      "hopefully no one continues the Vape For Miniblox script and does it silently so I can make my stupid prototype proxy checks).",
      "I also will solve the wrong problem, for example, I blocked VPNs because of Cheaters / Vape users, ",
      "instead of fixing my AntiCheat. VPNs are also important for bypassing government censorship, ",
      "but I block tor because I will fix the problem with the wrong fix. ",
      "Someone needs to help me now, I need mental help. ",
      "I can't comprehend the idea of actually fixing the problem instead of blocking VPN users and / or trying to detect translation layer users & vape users."
    ].join("\n"),
    tools: ["Typescript", "Socket.IO", "MessagePack", "All of Minecraft's source code", "Three.js", "Chakra UI", "Kubernetes", "Docker"],
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
    <Box id="projects" py="6em" w="100%">
      <Heading fontSize="3xl" mb="1em">
        Featured Projects
      </Heading>

      <VStack gap="2em">
        {Object.keys(data).map((name, i) => {
          const isOdd = i % 2 === 1;

          if (isMobile) {
            return (
              <FadeInSection key={i}>
                <Box position="relative" w="100%" borderRadius="3px">
                  <Image
                    position="absolute"
                    height="100%"
                    src={data[name].image}
                    objectFit="cover"
                    filter="brightness(0.2) blur(1.5px)"
                    transition="filter 0.2s"
                    _hover={{ filter: "none" }}
                    borderRadius="2px"
                    zIndex={-1}
                  />
                  <VStack zIndex={1} gap="1em" align="flex-start" p="1em">
                    <Heading fontSize="2xl">{name}</Heading>
                    <Text>{data[name].description}</Text>
                    <Text>{data[name].tools.join(" ")}</Text>

                    <SocialStack links={data[name].links} />
                  </VStack>
                </Box>
              </FadeInSection>
            );
          } else {
            return (
              <FadeInSection key={i}>
                <HStack>
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
                    <SocialStack links={data[name].links} />
                  </VStack>

                  {isOdd && <ProjectImage src={data[name].image} link={data[name].links.website} />}
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
