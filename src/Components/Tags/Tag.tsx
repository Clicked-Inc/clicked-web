import React from 'react';
import { Box, Tag as ChakraTag, TagLabel,TagLeftIcon, Avatar } from "@chakra-ui/react"
import { Icon } from "../Icon" 

type TagProps = {
  variant: string;
  label: string;
  icon: string;
}

const Tag: React.FC<TagProps> = ({ variant, label, icon }) => {
  var size = "";
  var fontColor = "";
  var colorScheme = "";
  var weight = 450;

  if (variant === "orange-white-small") {
    size = "sm";
    fontColor = "#F5F5F5";
    colorScheme = "#FF9249";
  }
  else if (variant === "gray-black-small") {
    size = "sm";
    fontColor = "#2B2541";
    colorScheme = "#F5F5F5";
  }
  else if (variant === "orange-white-medium") {
    size = "md";
    fontColor = "#F5F5F5";
    colorScheme = "#FF7112";
    weight = 600;
  }
  else if (variant === "white-gray-medium") {
    size = "md";
    fontColor = "#7C788A";
    colorScheme = "white";
  }
  else if (variant === "orange_white_icon") {
    size = "lg";
    fontColor = "#F5F5F5";
    colorScheme = "#FF7112";
    weight = 600;
  }
  else if (variant === "white-gray-icon1") {
    size = "lg";
    fontColor = "#7C788A";
    colorScheme = "white";
  }
  else if (variant === "white-gray-icon2") {
    size = "md";
    fontColor = "#7C788A";
    colorScheme = "white";
    weight = 400;
  }

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
  
  // var addIcon = <hr/>;
  // if (icon != "") {
  //   addIcon = (
  //     <Box display={ icon != "" ? "show" : "none" } mr={2}>
  //         <Icon name={icon}/>
  //     </Box>
  //   )
  // }

  return (
      <ChakraTag size={size} key={size} variant="subtle" bgColor={colorScheme} borderRadius="16px">
        {renderSwitch(icon)}
        <TagLabel fontStyle="Avenir Next Cyr" color={fontColor} fontWeight={weight}>{label}</TagLabel>
      </ChakraTag>
  )
}

export default Tag;
