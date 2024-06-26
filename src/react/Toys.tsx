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
  Tooltip,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { MdOutlineToys } from "react-icons/md";

import toys from "../gui";
import { useMobile } from "../utils/hooks";
import ToySettings from "./ToySettings";

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
            <FormLabel>Select a Toy</FormLabel>
            <Select
              onChange={(e) => {
                setToy(e.target.value as string);
                toys.selectedToy = e.target.value as string;
              }}
              mb="1em"
              defaultValue={toy}>
              {Array.from(toys.toys.keys()).map((toy) => (
                <option key={toy} value={toy}>
                  {toy}
                </option>
              ))}
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

      <VStack position="fixed" right="2em" bottom="2em" zIndex={4}>
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
              animation: "none",
            }}
            transition="transform 0.2s"
            animation={powered ? "none" : "changeSize 2s infinite"}>
            <MdOutlineToys size="1.6em" color={powered ? "rgba(255, 255, 255, 0.87)" : "rgba(255, 255, 255, 0.3)"} />
          </Box>
        </Tooltip>
      </VStack>
    </>
  );
};

export default Toys;
