import { extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
  textStyles: {
    h1: {
      fontSize: 19,
      fontWeight: 'bold',
      lineHeight: '110%',
      my: 5,
    },
  },
});

export default theme;
