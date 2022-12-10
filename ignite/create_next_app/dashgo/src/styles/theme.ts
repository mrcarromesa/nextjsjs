import { extendTheme, Theme as ChakraTheme } from "@chakra-ui/react";

export const theme: ChakraTheme = extendTheme({
  styles: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",  
    },
    fonts: {
      heading: 'Roboto',
      body: 'Roboto',
    },
    global: {
      body: {
        // chakra possuí uma palheta de cores padrão, o ideal é tentar seguir dentro do padrão: https://chakra-ui.com/docs/styled-system/theme#colors
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  }
}) as ChakraTheme;