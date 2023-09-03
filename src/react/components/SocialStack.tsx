import { FiExternalLink, FiGithub } from "react-icons/fi";
import SocialIcon from "./SocialIcon";
import { HStack } from "@chakra-ui/react";
import DevpostIcon from "./DevpostIcon";

const SocialStack: React.FC<{
  isWhite?: boolean;
  links: {
    github?: string;
    devpost?: string;
    website?: string;
  };
}> = ({ isWhite, links }) => {
  return (
    <HStack gap="0.7em" _groupHover={{ color: isWhite ? "white" : "black" }}>
      <SocialIcon icon={<FiGithub size="1.3em" />} link={links.github} />
      <SocialIcon icon={<DevpostIcon size="1.3em" />} link={links.devpost} />
      <SocialIcon icon={<FiExternalLink size="1.3em" />} link={links.website} />
    </HStack>
  );
};

export default SocialStack;
