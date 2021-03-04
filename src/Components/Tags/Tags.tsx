import * as React from 'react';
import { Box, Tag, TagLabel,TagLeftIcon, Avatar } from "@chakra-ui/react"
import { Icon } from "../Icon" 

export default function Tags(props) {
  const type = props.type;
  const name = props.name;
  const icon = props.icon;

  var size = "";
  var font = "";
  var colorScheme = "";
  var weight = 450;

  if (type === "orange_white_small") {
    size = "sm";
    font = "#F5F5F5";
    colorScheme = "#FF9249";
  }
  else if (type === "gray_black_small") {
    size = "sm";
    font = "#2B2541";
    colorScheme = "#F5F5F5";
  }
  else if (type === "orange_white_medium") {
    size = "md";
    font = "#F5F5F5";
    colorScheme = "#FF7112";
    weight = 600;
  }
  else if (type === "white_gray_medium") {
    size = "md";
    font = "#7C788A";
    colorScheme = "white";
  }
  else if (type === "orange_white_icon") {
    size = "lg";
    font = "#F5F5F5";
    colorScheme = "#FF7112";
    weight = 600;
  }
  else if (type === "white_gray_icon1") {
    size = "lg";
    font = "#7C788A";
    colorScheme = "white";
  }
  else if (type === "white_gray_icon2") {
    size = "md";
    font = "#7C788A";
    colorScheme = "white";
    weight = 400;
  }

  var addIcon = <hr/>;
  if (typeof icon != 'undefined') {
    addIcon = (
      <Box display={typeof icon != 'undefined' ? "show" : "none"} mr={2}>
          <Icon name={icon}/>
      </Box>
    )
    
  }

  return (
    <Box>
      <Tag size={size} key={size} variant="subtle" bgColor={colorScheme} borderRadius="16px">
        {addIcon}
        <TagLabel fontStyle="Avenir Next Cyr" color={font} fontWeight={weight}>{name}</TagLabel>
      </Tag>
    </Box>
  )
}
