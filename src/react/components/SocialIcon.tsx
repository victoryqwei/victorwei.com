import { Box } from "@chakra-ui/react";

const SocialIcon: React.FC<{ icon: React.ReactNode; link?: string; label: string }> = ({ icon, link, label }) => {
  if (!link) return null;

  return (
    <Box
      pos="relative"
      as="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      _hover={{
        transform: "scale(1.2)",
        color: "accent.300",
      }}
      transition="transform 0.2s, color 0.2s">
      {icon}
    </Box>
  );
};

export default SocialIcon;
