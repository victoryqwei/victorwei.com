import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

interface WorkExperienceData {
  [key: string]: {
    title: string;
    date: string;
    description: string;
  };
}

const data: WorkExperienceData = {
  "ArenaX Labs": {
    title: "Game Developer Intern",
    date: "Jan 2023 - Apr 2023",
    description: "Developed a multiplayer game using Unity and C#.",
  },
  Miniblox: {
    title: "Co-Founder",
    date: "Jan 2022 - Apr 2022",
    description: "Developed a multiplayer game using Unity and C#.",
  },
  Voiceflow: {
    title: "Full Stack Developer Intern",
    date: "May 2021 - Aug 2021",
    description: "Developed a multiplayer game using Unity and C#.",
  },
  "Mitra Biotechnologies": {
    title: "Software Engineering Intern",
    date: "Jan 2021 - Apr 2021",
    description: "Developed a multiplayer game using Unity and C#.",
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
      borderColor={selected ? "blue.500" : "transparent"}
      _hover={{
        bg: "rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
      }}
      onClick={() => setSelected(name)}>
      {name}
    </Box>
  );
};

const WorkExperience: React.FC = () => {
  const [selected, setSelected] = useState("ArenaX Labs");

  return (
    <Box id="experience" py="6em" px="2em">
      <Heading fontSize="2xl" mb="1em">
        Work Experience
      </Heading>

      <HStack alignItems="flex-start">
        <VStack gap={0}>
          {Object.keys(data).map((name) => (
            <Tab name={name} selected={selected === name} setSelected={setSelected} />
          ))}
        </VStack>
        <VStack alignItems="flex-start">
          <Heading fontSize="1.2rem">{data[selected].title}</Heading>
          <Text fontSize="1rem">{data[selected].date}</Text>
          <Text fontSize="1rem">{data[selected].description}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default WorkExperience;
