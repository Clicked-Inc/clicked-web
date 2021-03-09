import { extendTheme, ThemeOverride } from '@chakra-ui/react';

const theme: ThemeOverride = {
  textStyles: {
    Header1: {
      fontSize: 'lg',
      fontWeight: 'bold',
      lineHeight: '110%',
      my: 5,
    },
  },
};

export default extendTheme(theme);
