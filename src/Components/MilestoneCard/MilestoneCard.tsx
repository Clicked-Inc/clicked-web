import React, { useState } from 'react';
import { Box, Text, Flex, HStack, Button, Center } from '@chakra-ui/react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { IoDocumentOutline, IoPlayCircleOutline } from 'react-icons/io5';
import { HiLockClosed } from 'react-icons/hi';
import Tag from '@Internal/Components/Tag';
import HintButton from '@Internal/Components/HintButton';

type TagType = {
  label: string;
  icon: string;
};

export type MilestoneCardProps = {
  unlocked: boolean;
  number: number;
  title: string;
  tags: TagType[];
  body: string;
  hint: string;
};

const MilestoneCard: React.FC<MilestoneCardProps> = ({
  unlocked,
  number,
  title,
  tags,
  body,
  hint,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Box
      maxW={582}
      boxShadow="md"
      rounded={10}
      p={6}
      opacity={unlocked ? 1 : 0.6}
    >
      <Flex justify="space-between" align="center">
        <Text
          fontWeight="bold"
          fontSize="lg"
        >{`Milestone ${number}: ${title}`}</Text>
        {unlocked ? (
          <HintButton hint={hint} />
        ) : (
          <HStack
            bg="#FF6600"
            color="white"
            borderRadius="md"
            fontWeight="bold"
            px={4}
            py={1}
            fontSize="sm"
          >
            <HiLockClosed />
            <Text>LOCKED</Text>
          </HStack>
        )}
      </Flex>
      <HStack mt={2}>
        {tags.map((tag, index) => (
          <Tag
            key={`tag-${index}`}
            variant="white-gray-icon2"
            icon={tag.icon}
            label={tag.label}
          />
        ))}
      </HStack>
      {unlocked && (
        <>
          {' '}
          <Box mt={4} position="relative">
            <Text noOfLines={isExpanded ? 100 : 4}>{body}</Text>
            {!isExpanded && (
              <Box
                top="0"
                position="absolute"
                h="100%"
                w="100%"
                bgGradient="linear(to-t, rgb(255,255,255,0.9), rgba(0,0,0,0))"
              />
            )}
          </Box>
          <Center>
            <Button
              d="flex"
              leftIcon={isExpanded ? <FiChevronUp /> : <FiChevronDown />}
              variant="unstyled"
              color="#FF6600"
              fontSize="xs"
              fontWeight="400"
              onClick={() => setIsExpanded((value) => !value)}
            >
              {isExpanded ? 'SHOW LESS' : 'EXPAND'}
            </Button>
          </Center>
          <Flex justify="space-between" align="center">
            <Button bg="#FF6600" color="white" px={10} _hover={{}} _active={{}}>
              Upload Work
            </Button>
            <HStack spacing={4}>
              <Button
                d="flex"
                leftIcon={<IoDocumentOutline />}
                variant="unstyled"
                color="#B3B0BC"
                fontSize="md"
                fontWeight="400"
                _hover={{ color: '#FF6600' }}
              >
                Sample Output
              </Button>
              <Button
                d="flex"
                leftIcon={<IoPlayCircleOutline />}
                variant="unstyled"
                color="#B3B0BC"
                fontSize="md"
                fontWeight="400"
                _hover={{ color: '#FF6600' }}
              >
                Video Guide
              </Button>
            </HStack>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default MilestoneCard;
