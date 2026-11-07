import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme(config, {
  fonts: {
    heading: "'Space Grotesk Variable', sans-serif",
    body: "'Inter Variable', sans-serif",
  },
  colors: {
    accent: {
      300: "#ff7a8a",
      500: "#e61f38",
      600: "#c9182f",
    },
  },
  components: {
    Link: {
      baseStyle: {
        transition: "color 0.2s",
        _hover: { color: "accent.300", textDecoration: "none" },
      },
    },
    Button: {
      variants: {
        accent: {
          bg: "accent.500",
          border: "1px solid",
          borderColor: "accent.500",
          color: "white",
          _hover: { bg: "accent.600", borderColor: "accent.600" },
        },
        accentOutline: {
          bg: "transparent",
          border: "1px solid",
          borderColor: "accent.300",
          color: "white",
          _hover: { bg: "rgba(230, 31, 56, 0.2)" },
        },
      },
    },
  },
});

export { theme };
