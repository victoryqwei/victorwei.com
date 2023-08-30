import { Box, VStack } from "@chakra-ui/react";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { useMobile } from "../utils/hooks";
import SocialIcon from "./components/SocialIcon";

const Socials: React.FC = () => {
  const [isMobile] = useMobile();

  if (isMobile) return null;

  return (
    <Box position="fixed" left="3em" bottom="3em">
      <VStack gap="1.5em">
        <SocialIcon icon={<FiGithub size="1.3em" />} link="https://github.com/victoryqwei" />
        <SocialIcon icon={<FiLinkedin size="1.3em" />} link="https://www.linkedin.com/in/victoryqwei/" />
        <SocialIcon icon={<FiInstagram size="1.3em" />} link="https://www.instagram.com/victoryqwei/" />
        <SocialIcon icon={<FiMail size="1.3em" />} link="mailto:victoryqwei@gmail.com" />
      </VStack>
    </Box>
  );
};

export default Socials;
