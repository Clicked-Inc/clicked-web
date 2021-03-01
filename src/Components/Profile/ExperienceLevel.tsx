import React from 'react';
import {
  Badge,
  Progress,
  Box,
  Text,
  Flex,
  Stack,
  Spacer,
} from '@chakra-ui/react';
import Fonts from '../../Components/Icon/Assets/Fonts';

const listOfSkills = (skills) => {
  return (
    <div>
      {skills.map((skill) => {
        return (
          <Box>
            <Flex isInline>
              <Text theme={Fonts} textStyle="h1">
                Explorer
              </Text>
              <Spacer />
              <Badge
                textTransform="none"
                colorScheme="blackAlpha"
                variant="solid"
                rounded={10}
                my={5}
                h={5}
              >
                UI/UX
              </Badge>
            </Flex>
            <Progress value={60} colorScheme="orange" rounded="full" />
            <Stack isInline>
              <Text>Level 1</Text>
              <Spacer />
              <Text>
                <b>50 / 500</b> points
              </Text>
            </Stack>
          </Box>
        );
      })}
    </div>
  );
};
const ExperienceLevel = () => {
  return <Box>{listOfSkills([1, 2])}</Box>;
};
export default ExperienceLevel;
