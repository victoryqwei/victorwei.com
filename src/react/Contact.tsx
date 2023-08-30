import { Button, Center, Heading, Link, VStack, Text, Box, HStack } from "@chakra-ui/react";
import { useMobile } from "../utils/hooks";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import SocialIcon from "./components/SocialIcon";

const Contact: React.FC = () => {
  const [isMobile] = useMobile();
  return (
    <>
      <Center id="contact" py="10em" px="2em" w="100%" textAlign="center">
        <VStack gap={0} justifyContent="space-between" h="100%">
          <Box></Box>

          <VStack gap="1em">
            <Heading fontSize="4xl">Get In Touch</Heading>
            <Text mb="3em">If you have any questions or just want to say hi, feel free to reach out to me!</Text>
            <Link href="mailto:victoryqwei@gmail.com" target="_blank">
              <Button
                backgroundColor="transparent"
                border="
                1px solid white"
                color="white"
                p="1em"
                _hover={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}>
                Contact Me!
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Center>
      <VStack gap="1em" py="2em" px="2em">
        {isMobile && (
          <HStack gap="1.5em">
            <SocialIcon icon={<FiGithub size="1.3em" />} link="https://github.com/victoryqwei" />
            <SocialIcon icon={<FiLinkedin size="1.3em" />} link="https://www.linkedin.com/in/victoryqwei/" />
            <SocialIcon icon={<FiInstagram size="1.3em" />} link="https://www.instagram.com/victoryqwei/" />
            <SocialIcon icon={<FiMail size="1.3em" />} link="mailto:victoryqwei@gmail.com" />
          </HStack>
        )}
        <Text>
          website design inspired by{" "}
          <Link href="https://v4.brittanychiang.com/" isExternal>
            brittany
          </Link>{" "}
          | © 2023 Victor Wei
        </Text>
      </VStack>
    </>
  );
};

export default Contact;
