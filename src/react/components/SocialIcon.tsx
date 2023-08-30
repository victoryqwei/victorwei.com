import { Box } from "@chakra-ui/react";

const SocialIcon: React.FC<{ icon: React.ReactNode; link?: string }> = ({ icon, link }) => {
  if (!link) return null;

  return (
    <Box
      pos="relative"
      as="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      _hover={{
        transform: "scale(1.2)",
      }}
      transition="transform 0.2s">
      {icon}
    </Box>
  );
};

export default SocialIcon;
