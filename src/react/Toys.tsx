import { Box, Tooltip } from "@chakra-ui/react";
import { FiPower } from "react-icons/fi";
import { useMobile } from "../utils/hooks";

const Toys: React.FC<{
  powered: boolean;
  setPowered: (powered: boolean) => void;
}> = ({ powered, setPowered }) => {
  const [isMobile] = useMobile();

  if (isMobile) return null;

  return (
    <Box position="fixed" right="2em" bottom="2em">
      <Tooltip label={powered ? "Turn off toys" : "Turn on toys"} closeOnClick={false} placement="left">
        <Box
          p="1em"
          onClick={() => {
            setPowered(!powered);
          }}
          _hover={{ cursor: "pointer" }}>
          <FiPower size="1.3em" color={powered ? "rgba(255, 255, 255, 0.87)" : "rgba(255, 255, 255, 0.3)"} />
        </Box>
      </Tooltip>
    </Box>
  );
};

export default Toys;
