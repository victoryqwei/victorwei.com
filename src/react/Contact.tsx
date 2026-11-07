import { Box, Button, Center, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useMobile } from "../utils/hooks";
import SocialIcon from "./components/SocialIcon";

const Contact: React.FC = () => {
  const [isMobile] = useMobile();
  return (
    <>
      <Center id="contact" py="10em" w="100%" textAlign="center">
        <VStack gap={0} justifyContent="space-between" h="100%">
          <Box></Box>

          <VStack gap="1em">
            <Heading fontSize="4xl">Get In Touch</Heading>
            <Text mb="3em">If you have any questions or just want to say hi, feel free to reach out to me!</Text>
            <Button
              as="a"
              href="mailto:victoryqwei@gmail.com"
              variant="accent"
              p="1em">
              Contact Me!
            </Button>
          </VStack>
        </VStack>
      </Center>
      <VStack gap="1em" py="2em">
        {isMobile && (
          <HStack gap="1.5em">
            <SocialIcon icon={<FiGithub size="1.3em" />} link="https://github.com/victoryqwei" label="GitHub" />
            <SocialIcon icon={<FiLinkedin size="1.3em" />} link="https://www.linkedin.com/in/victoryqwei/" label="LinkedIn" />
            {/* <SocialIcon icon={<FiInstagram size="1.3em" />} link="https://www.instagram.com/victoryqwei/" /> */}
            <SocialIcon icon={<FiMail size="1.3em" />} link="mailto:victoryqwei@gmail.com" label="Email" />
          </HStack>
        )}
        <Text>
          {/* website design inspired by{" "}
          <Link href="https://v4.brittanychiang.com/" isExternal>
            brittany
          </Link>{" "}
          |  */}
          © {new Date().getFullYear()} Victor Wei
        </Text>
      </VStack>
    </>
  );
};

export default Contact;
