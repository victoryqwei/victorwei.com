import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiPower, FiSettings } from "react-icons/fi";
import toys from "../gui";
import { useMobile } from "../utils/hooks";

const ToySettings: React.FC<{ toy: string }> = ({ toy }) => {
  if (toy === "rope") {
    return (
      <VStack alignItems="flex-start">
        <FormLabel>Rope Length</FormLabel>
        <Slider
          defaultValue={toys.rope.totalNodes}
          min={5}
          max={100}
          step={1}
          onChange={(value) => {
            toys.rope.setNodes(value);
          }}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <FormLabel>Node Length</FormLabel>
        <Slider
          defaultValue={toys.rope.nodeDistance}
          min={1}
          max={20}
          step={1}
          onChange={(value) => {
            toys.rope.setNodeDistance(value);
          }}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <FormLabel>Rope Elasticity</FormLabel>
        <Slider
          defaultValue={toys.rope.iterations}
          min={1}
          max={1000}
          step={1}
          onChange={(value) => {
            toys.rope.setIterations(value);
          }}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </VStack>
    );
  } else if (toy === "force") {
    return (
      <>
        <FormLabel>Node Count</FormLabel>
        <Slider
          defaultValue={toys.force.nodeCount}
          min={1}
          max={1000}
          step={1}
          onChange={(value) => {
            toys.force.setNodeCount(value);
          }}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </>
    );
  } else {
    return null;
  }
};

const Toys: React.FC<{
  powered: boolean;
  setPowered: (powered: boolean) => void;
}> = ({ powered, setPowered }) => {
  const [isMobile] = useMobile();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [toy, setToy] = useState<string>("rope");

  if (isMobile) return null;

  return (
    <>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent zIndex={2} bgColor="#242424" color="white">
          <DrawerCloseButton />
          <DrawerHeader>Settings</DrawerHeader>

          <DrawerBody>
            <FormLabel>Toy</FormLabel>
            <Select
              onChange={(e) => {
                setToy(e.target.value as string);
                toys.selectedToy = e.target.value as string;
              }}
              mb="1em">
              <option value="rope">Rope</option>
              <option value="force">Gravity</option>
            </Select>

            <ToySettings toy={toy} />
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="green" onClick={onClose}>
              Done
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <VStack position="fixed" right="2em" bottom="2em">
        {powered && (
          <Tooltip label="Toy settings" closeOnClick={false} placement="left">
            <Box
              onClick={onOpen}
              _hover={{
                transform: "scale(1.2)",
                cursor: "pointer",
              }}
              transition="transform 0.2s">
              <FiSettings size="1.3em" />
            </Box>
          </Tooltip>
        )}

        <Tooltip label={powered ? "Turn off toys" : "Turn on toys"} closeOnClick={false} placement="left">
          <Box
            p="1em"
            onClick={() => {
              setPowered(!powered);
            }}
            _hover={{
              transform: "scale(1.2)",
              cursor: "pointer",
            }}
            transition="transform 0.2s">
            <FiPower size="1.3em" color={powered ? "rgba(255, 255, 255, 0.87)" : "rgba(255, 255, 255, 0.3)"} />
          </Box>
        </Tooltip>
      </VStack>
    </>
  );
};

export default Toys;
