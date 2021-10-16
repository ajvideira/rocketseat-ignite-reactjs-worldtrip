import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#999999",
      "600": "#47585B",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#DADADA",
      "50": "#F5F8FA",
    },
    yellow: {
      "900": "#FFD600",
      "800": "#FFBA08",
      "700": "#FFF2C1",
      "600": "#FFF5D2",
      "500": "#FFF8E2",
      "400": "#FFFBE6",
      "300": "#FFFEEA",
      "200": "#FFFDF4",
      "100": "#FFFEF9",
      "50": "#FFFFFF",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.600",
      },
    },
  },
});
