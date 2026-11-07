import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, HStack, Image, Link, Menu, MenuButton, MenuItem, MenuList, SlideFade, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import vectorLogo from "../assets/vector.png";
import { AcrylicBackgroundChakraProps } from "../gui/constants";
import { useMobile } from "../utils/hooks";

const NavBar: React.FC = () => {
  const prevScrollPos = useRef(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos.current > currentScrollPos || currentScrollPos < 50);
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMobile] = useMobile();

  return (
    <Box width="100%" position="fixed" left="0" top="0" zIndex={2}>
      <SlideFade in={visible} offsetY="-3.8rem">
        <HStack justifyContent="space-between" p="1rem" {...AcrylicBackgroundChakraProps}>
          <Link
            href="/"
            style={{
              textDecoration: "none",
            }}
            role="group">
            <HStack gap={0}>
              <Box pr="1em">
                <Image
                  src={vectorLogo}
                  alt="Vector logo"
                  height="1.8rem"
                  transition="filter 300ms"
                  _groupHover={{
                    filter: "drop-shadow(0 0 2em red)",
                  }}
                />
              </Box>
              <Text fontSize="1.5em">Victor Wei</Text>
            </HStack>
          </Link>
          {isMobile ? (
            <Menu>
              <MenuButton aria-label="Open navigation menu">
                <HamburgerIcon boxSize="1.5em" />
              </MenuButton>
              <MenuList color="black">
                <MenuItem as="a" href="#about">
                  About
                </MenuItem>
                <MenuItem as="a" href="#experience">
                  Experience
                </MenuItem>
                <MenuItem as="a" href="#projects">
                  Projects
                </MenuItem>
                <MenuItem as="a" href="#contact">
                  Contact
                </MenuItem>
                {/* <MenuItem>
                  <Link href={resume} target="_blank">
                    Resume
                  </Link>
                </MenuItem> */}
              </MenuList>
            </Menu>
          ) : (
            <HStack gap="2em" mr="1em">
              <Link href="#about">About</Link>
              <Link href="#experience">Experience</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#contact">Contact</Link>

              {/* <Link href={resume} target="_blank">
                <Button
                  backgroundColor="transparent"
                  border="
                1px solid white"
                  color="white"
                  _hover={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}>
                  <HStack gap="0.3em">
                    <Text>Resume</Text>
                  </HStack>
                </Button>
              </Link> */}
            </HStack>
          )}
        </HStack>
      </SlideFade>
    </Box>
  );
};

export default NavBar;
