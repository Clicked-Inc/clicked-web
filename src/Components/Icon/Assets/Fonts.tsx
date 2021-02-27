import { extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: 19,
      fontWeight: 'bold',
      lineHeight: '110%',
      my: 5,
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },
});

export default theme;
