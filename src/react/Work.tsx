import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, HStack, Heading, List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useMobile } from "../utils/hooks";

interface WorkExperienceData {
  [key: string]: {
    title: string;
    date: string;
    description: string[];
  };
}

const data: WorkExperienceData = {
  "ArenaX Labs": {
    title: "Game Developer Intern",
    date: "Jan 2023 - Apr 2023",
    description: [
      "Optimized player model performance in an AI-powered platform fighter game, resulting in a 20% fps improvement.",
      "Fine-tuned the learning rate of the in-game Bayesian neural network by isolating regularization lambdas, improving the training efficiency for movement and action outputs.",
      "Refactored the codebase from Javascript to Typescript, enabling a smoother workflow and higher code quality.",
    ],
  },
  Miniblox: {
    title: "Co-Founder",
    date: "Jan 2022 - Apr 2022",
    description: [
      "Launched a multiplayer voxel game written in Typescript using Three.js/Socket.io, currently garnering over 10K MAUs.",
      "Developed a streamlined CI/CD pipeline with Github Actions to build and release to S3, which is served on Cloudfront.",
      "Built a highly-scalable distributed infrastructure system using ArgoCD to auto-deploy Helm charts in DigitalOcean K8s.",
      "Achieved 20K ARR by integrating in-game micro-transactions and video ad monetization through Stripe and Adsense.",
    ],
  },
  Voiceflow: {
    title: "Full Stack Developer Intern",
    date: "May 2021 - Aug 2021",
    description: [
      "Developed and deployed a full-stack feature from end-to-end using React/Redux, which streamlined the visual markup process and significantly improved engagement and canvas flow for users.",
      "Led an initiative to track and improve the performance of key components, leveraging LogRocket & Sentry to send customers’ aggregated performance data and reducing client-side errors by 15%.",
      "Translated designs into front-end components and tackled UI/UX bugs and enhancements with Styled Components.",
      "Updated data types and performed database operations using SQL queries to integrate new features and improvements.",
    ],
  },
  "Mitra Biotechnologies": {
    title: "Software Engineering Intern",
    date: "Jan 2021 - Apr 2021",
    description: [
      "Developed and optimized a convolutional neural network using Tensorflow/Keras to predict potential heart diseases in patients, reducing time-to-intervention for a cardiovascular case from 30 to 2 minutes.",
      "Researched and implemented the algorithm within a Doctor-to-Patient app using React Native to seamlessly allow doctors and patients to track their progress.",
    ],
  },
};

const Tab: React.FC<{ name: string; selected?: boolean; setSelected: React.Dispatch<React.SetStateAction<string>> }> = ({
  name,
  selected,
  setSelected,
}) => {
  return (
    <Box
      w="100%"
      p="0.5em"
      borderLeft={selected ? "4px solid" : "4px solid"}
      borderColor={selected ? "white.500" : "transparent"}
      bgColor={selected ? "rgba(255, 255, 255, 0.1)" : "transparent"}
      _hover={{
        bg: { base: "transparent", md: "rgba(255, 255, 255, 0.1)" },
        cursor: "pointer",
      }}
      onClick={() => setSelected(name)}
      whiteSpace="nowrap">
      {name}
    </Box>
  );
};

const TabMobile: React.FC<{ name: string; selected?: boolean; setSelected: React.Dispatch<React.SetStateAction<string>> }> = ({
  name,
  selected,
  setSelected,
}) => {
  return (
    <Box
      w="100%"
      p="0.5em"
      borderBottom={selected ? "4px solid" : "4px solid"}
      borderColor={selected ? "white.500" : "transparent"}
      bgColor={selected ? "rgba(255, 255, 255, 0.1)" : "transparent"}
      _hover={{
        bgColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "white.500",
        cursor: "pointer",
      }}
      onClick={() => setSelected(name)}
      whiteSpace="nowrap">
      {name}
    </Box>
  );
};

const WorkExperience: React.FC = () => {
  const [selected, setSelected] = useState("ArenaX Labs");
  const [isMobile] = useMobile();

  return (
    <Box id="experience" py="6em" px="2em" h="32em" w="100%">
      <Heading fontSize="2xl" mb="1em">
        Work Experience
      </Heading>

      {isMobile && (
        <VStack alignItems="flex-start">
          <HStack gap={0} overflow="scroll" maxW="100%">
            {Object.keys(data).map((name, i) => (
              <TabMobile key={i} name={name} selected={selected === name} setSelected={setSelected} />
            ))}
          </HStack>
          <VStack alignItems="flex-start">
            <Heading fontSize="1.2rem">{data[selected].title}</Heading>
            <Text fontSize="1rem">{data[selected].date}</Text>
            <List>
              {data[selected].description.map((desc, i) => (
                <ListItem key={i}>
                  <ListIcon as={ChevronRightIcon} />
                  {desc}
                </ListItem>
              ))}
            </List>
          </VStack>
        </VStack>
      )}

      {!isMobile && (
        <HStack alignItems="flex-start" gap="1em">
          <VStack gap={0}>
            {Object.keys(data).map((name, i) => (
              <Tab key={i} name={name} selected={selected === name} setSelected={setSelected} />
            ))}
          </VStack>
          <VStack alignItems="flex-start">
            <Heading fontSize="1.2rem">{data[selected].title}</Heading>
            <Text fontSize="1rem">{data[selected].date}</Text>
            <List>
              {data[selected].description.map((desc, i) => (
                <ListItem key={i}>
                  <ListIcon as={ChevronRightIcon} />
                  {desc}
                </ListItem>
              ))}
            </List>
          </VStack>
        </HStack>
      )}
    </Box>
  );
};

export default WorkExperience;
