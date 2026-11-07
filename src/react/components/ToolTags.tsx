import { Box, Flex } from "@chakra-ui/react";

const ToolTags: React.FC<{ tools: string[]; justify?: string }> = ({ tools, justify = "flex-start" }) => {
  return (
    <Flex wrap="wrap" gap="0.4em" justify={justify}>
      {tools.map((tool) => (
        <Box
          key={tool}
          as="span"
          px="0.7em"
          py="0.15em"
          fontSize="xs"
          fontWeight="medium"
          whiteSpace="nowrap"
          borderRadius="full"
          color="accent.300"
          bgColor="rgba(230, 31, 56, 0.14)">
          {tool}
        </Box>
      ))}
    </Flex>
  );
};

export default ToolTags;
