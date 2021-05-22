import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Icon,
  Flex,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export type HorizontalScrollerProps = {
  items: any[];
  numberOfComponentsBreakpoints?: Record<string, any>;
  paddingBetweenItems?: string;
};

const CardSlider: React.FC<HorizontalScrollerProps> = ({
  items,
  numberOfComponentsBreakpoints,
  paddingBetweenItems = '6px',
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [elementWidth, setElementWidth] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const numberOfComponentsPerView = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 2,
    xl: 2,
    ...numberOfComponentsBreakpoints,
  });

  useEffect(() => {
    if (scrollerRef.current) {
      setElementWidth(parseInt(scrollerRef.current.clientWidth.toFixed(0)));
    }
  }, [scrollerRef]);

  useEffect(() => {
    scrollerRef.current.scrollTo({
      left: scrollLeft,
      behavior: 'smooth',
    });
  }, [scrollLeft]);

  const scrollRightElement = (): void => {
    setScrollLeft(
      scrollerRef.current.scrollLeft + elementWidth / numberOfComponentsPerView
    );
  };

  const scrollLeftElement = (): void => {
    setScrollLeft(
      Math.max(
        scrollerRef.current.scrollLeft -
          elementWidth / numberOfComponentsPerView,
        0
      )
    );
  };

  const isAtFirstElement = (): boolean => scrollLeft <= 0;

  const isAtLastElement = (): boolean =>
    scrollLeft >=
    Math.abs(
      elementWidth - (elementWidth / numberOfComponentsPerView) * items.length
    ) -
      1;

  return (
    <Flex alignItems="flex-start" width="100%">
      <IconButton
        display={isAtFirstElement() ? 'none' : 'block'}
        position="absolute"
        aria-label="Slider Left"
        onClick={scrollLeftElement}
        isDisabled={isAtFirstElement()}
        variant="ghost"
        icon={<Icon as={FaChevronLeft} />}
        fontSize="25px"
        w="60px"
        h={450}
        bgGradient="linear-gradient(to-l, transparent , white)"
      />

      <Box
        flex={1}
        ref={scrollerRef}
        overflowX="scroll"
        overflowY="hidden"
        whiteSpace="nowrap"
        style={{ scrollbarWidth: 'none' }}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {items.map((item, i) => (
          <Box
            pr={paddingBetweenItems}
            key={'horizontal-scroller-item' + i}
            display="inline-block"
            verticalAlign="middle"
          >
            {item}
          </Box>
        ))}
      </Box>
      <IconButton
        display={isAtLastElement() ? 'none' : 'block'}
        position="absolute"
        right={0}
        // transform="translateX(70vw)"
        aria-label="Slider Right"
        onClick={scrollRightElement}
        isDisabled={isAtLastElement()}
        icon={<Icon as={FaChevronRight} />}
        variant="ghost"
        fontSize="25px"
        w="60px"
        h={450}
        bgGradient="linear-gradient(to-r, transparent, white)"
      />
    </Flex>
  );
};

export default CardSlider;
