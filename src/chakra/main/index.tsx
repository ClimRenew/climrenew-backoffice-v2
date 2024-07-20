import { extendTheme } from "@chakra-ui/react";
// import { Button } from "../button";

export const Theme = extendTheme({
  breakpoints: {
    s: "0px",
    sm: "300px",
    md: "768px",
    lg: "1200px",
    xlg: "1500px",
    xxl: "2000px",
  },
  colors: {
    primary: {
      grey: "#FBFBFB",
      lightGray: "#4F5E62",
      darkGray: "#121313",
      white: "#FFF",
      green: "#12A380",
      purple: "#9747FF",
      gray: "#D8D8D8",
      orange: "#FFA500",
      black: "#000",
    },
    accent: {},
  },
  fontSizes: {
    xs: "15.97px",
    sm: "17.3px",
    md: "18.09px",
    lg: "18.63px",
    xl: "19.97px",
    "2xl": "21.3px",
    "3xl": "22.63px",
    "4xl": "24px",
    "5xl": "26.62px",
    "6xl": "34.61px",
    "7xl": "39.93px",
  },
  fonts: {
    ubuntu: "Ubuntu",
    roboto: "Roboto",
    montserrat: "Montserrat",
    inter: "Inter, sans-serif",
    poppins: "Poppins",
  },
  styles: {},
  components: {
    // Button,
  },
  global: {
    '.chakra-form label.required::after': {
      content: '"*"',
      color: 'white', // Set the color of the asterisk to white
      marginLeft: '2px', // Adjust spacing if needed
    }
  }
});