import { extendTheme, ThemeOverride } from '@chakra-ui/react';

const theme: ThemeOverride = {
  textStyles: {
    h1: {
      fontSize: 'lg',
      fontWeight: 'bold',
      lineHeight: '110%',
      my: 5,
    },
  },
};

export default extendTheme(theme);
