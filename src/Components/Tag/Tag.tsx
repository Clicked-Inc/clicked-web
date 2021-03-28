import React from 'react';
import { Box, Tag as ChakraTag, TagLabel,TagLeftIcon, Avatar } from "@chakra-ui/react";
import { Icon } from "../Icon";
import { generateStyles } from "./Tag.utils";

type TagVariants = "orange-white-small" | "gray-black-small" | "orange-white-medium" | "white-gray-medium" | "orange-white-icon" | "white-gray-icon1" | "white-gray-icon2"

type TagProps = {
  variant: TagVariants;
  label: string;
  icon: string;
}

const Tag: React.FC<TagProps> = ({ variant, label, icon }) => {
  const { size, fontColor, bgColor, weight } = generateStyles(variant);

  function renderSwitch(param) {
    switch(param) {
      case "":
        return "";
      default:
        return (
          <Box display={ param != "" ? "show" : "none" } mr={2}>
              <Icon name={param}/> 
          </Box>
        );;
    }
  }


  return (
      <ChakraTag size={size} key={size} variant="subtle" bgColor={bgColor} borderRadius="16px">
        {renderSwitch(icon)}
        <TagLabel color={fontColor} fontWeight={weight}>{label}</TagLabel>
      </ChakraTag>
  )
}

export default Tag;