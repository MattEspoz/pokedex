// styles/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "black", // Set the default text color to black
      },
    },
  },
});

export default theme;
