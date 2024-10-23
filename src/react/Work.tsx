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
  Fleet: {
    title: "Software Engineering Intern",
    date: "May 2024 - Aug 2024",
    description: [
      "Revamped user onboarding with React and Google OAuth for passwordless signups, boosting daily sign-up rates by 22%.",
      "Improved billing accuracy and reduced manual payment errors by integrating Stripe to automate invoicing within Django.",
      "Enhanced communication for program cancellations by delivering 500+ daily notifications via Segment and SendGrid.",
      "Built a CI/CD pipeline with GitHub Actions to streamline client releases to S3 and Cloudfront for efficient deployment.",
    ],
  },
  "TD Securities": {
    title: "Software Engineering Intern",
    date: "Sept 2023 - Dec 2023",
    description: [
      "Efficiently manage both internal and public-facing web tools, APIs, and workflow processes constructed using React and Flask, which play a pivotal role in product lifecycle tracking across diverse data sources.",
      "Maintain and oversee deal pricing, management, and market intelligence infrastructure within MongoDB and SQL databases, placing emphasis on timely product delivery.",
      "Apply scalable automation with Rundeck to generate offering documents and marketing materials with 99% accuracy",
    ],
  },
  Miniblox: {
    title: "Co-Founder",
    date: "Jan 2022 - Oct 2024",
    description: [
      "Launched a low-effort Minecraft port written in Typescript using Three.js/Socket.io, currently garnering over 1.1 million monthly active users.",
      "Developed a streamlined CI/CD pipeline with Github Actions to build and release to S3, which is served on Cloudfront.",
      "Built a highly-scalable distributed infrastructure system using ArgoCD to auto-deploy Helm charts in DigitalOcean K8s.",
      "Boosted revenue by 300% by integrating in-game micro-transactions and video ad monetization through Stripe and Adsense (tip: use uBlock Origin).",
      "Aug 7, 2024: Blocked VPNs",
      "Aug 8, 2024: Added IP bans so poor tester can watch people use PIA, SoftEther VPN, or something else undetected to bypass the checks",
      "Aug 16, 2024, 5:09 PM CDT: Start of a known figure in the Miniblox \"hacking\"" +
      " community named \"7GrandDad\" / \"xylex\" making \"a middle man to translate Miniblox packets to Minecraft 1.8.9 packets\"",
      "Aug 16, 2024, 7:47 PM CDT: the translation layer now translates Miniblox chunks into Minecraft chunks, but the blocks are all dirt as a placeholder.",
      "Aug 16, 2024, 10:23 PM CDT: the translation layer now translates Miniblox entities into Minecraft entities",
      "Aug 17, 2024, 12:51 PM CDT: the translation layer now supports combat & properly translates chunks, now blocks aren't just dirt.",
      "Aug 18, 2024, 11:16 PM CDT: the translation layer now supports stairs, slabs, some other blocks, and the scoreboard",
      "Aug 21, 2024, 8:41 PM CDT: \"7GrandDad\" / \"xylex\" gives me the translation layer source code",
      "Oct 6, 2024, 11:43 PM CDT: Vape for Miniblox is discontinued, in its place, you will now use any Minecraft 1.8.9 client with the translation layer.",
      "Oct 16, 2024, 4:50 PM CDT: I banned his account!",
      "Oct 16, 2024, 5:00 PM CDT: He leaked his fly. You send a C0BPacketEntityAction with STOP_SLEEPING every 5 ticks and you can fly at any speed.",
      "Oct 17, 2024, 11:27 AM CDT: He finds the autobanning issue that I exploited to detect translation layer users :(",
      "Oct 17, 2024, 1:06 PM CDT: New translation layer update pushed.",
      "Oct 17, 2024, 3:20 PM CDT: Someone was trolling my queue_minigame endpoint :( I added a ReCAPTCHA check. It broke the translation layer too!",
      "Oct 17, 2024, 4:20 PM CDT: I removed the check, and \"7GrandDad\" / \"xylex\" discovered that I did, and you could pass 'a' as a value, and it would work.",
      "Oct 17, 2024, 8:57 PM CDT: New translation layer update pushed.",
      "Oct 17, 2024, 9:12 PM CDT: \"7GrandDad\" / \"xylex\" discovers that I pushed an update that limits you to using any ReCAPTCHA token once.",
      "Oct 17, 2024, 10:05 PM CDT: \"7GrandDad\" / \"xylex\" makes a workaround using a tampermonkey userscript to generate the tokens and send them via a WebSocket.",
      "Oct 17, 2024, 10:31 PM CDT: \"7GrandDad\" / \"xylex\" discovers I added turnstile to the queue_minigame endpoint",
      "Oct 17, 2024, 10:40 PM CDT: Workaround userscript updated to generate CloudFlare turnstile tokens too.",
      "Oct 18, 2024, 12:15 PM CDT: Translation layer update pushed.",
      "Oct 18, 2024, 9:24 AM CDT: \"7GrandDad\" / \"xylex\" discovers I removed the CAPTCHAs from the queue_minigame endpoint",
    ],
  },
  "ArenaX Labs": {
    title: "Game Developer Intern",
    date: "Jan 2023 - Apr 2023",
    description: [
      "Optimized player model performance in an AI-powered platform fighter game, resulting in a 20% fps improvement.",
      "Fine-tuned the learning rate of the in-game Bayesian neural network by isolating regularization lambdas, improving the training efficiency for movement and action outputs.",
      "Refactored the codebase from Javascript to Typescript, enabling a smoother workflow and higher code quality.",
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
  // "Mitra Biotechnologies": {
  //   title: "Machine Learning Intern",
  //   date: "Jan 2021 - Apr 2021",
  //   description: [
  //     "Developed and optimized a convolutional neural network using Tensorflow/Keras to predict potential heart diseases in patients, reducing time-to-intervention for a cardiovascular case from 30 to 2 minutes.",
  //     "Researched and implemented the algorithm within a Doctor-to-Patient app using React Native to seamlessly allow doctors and patients to track their progress.",
  //   ],
  // },
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
  const [selected, setSelected] = useState("Fleet");
  const [isMobile] = useMobile();

  return (
    <Box id="experience" py="6em" h={isMobile ? "40em" : "32em"}>
      <Heading fontSize="3xl" mb="1em">
        Work Experience
      </Heading>

      {isMobile && (
        <VStack alignItems="flex-start" gap="1em">
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
