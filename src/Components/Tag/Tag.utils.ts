export const generateStyles = (input) => {
    var size = "";
    var fontColor = "";
    var bgColor = "";
    var weight = 450;
    switch(input) {
        case "orange-white-small":
            size = "sm";
            fontColor = "#F5F5F5";
            bgColor = "#FF9249";
            break;
        case "gray-black-small":
            size = "sm";
            fontColor = "#2B2541";
            bgColor = "#F5F5F5";
            break;
        case "orange-white-medium":
            size = "md";
            fontColor = "#F5F5F5";
            bgColor = "#FF7112";
            weight = 600;
            break;
        case "white-gray-medium":
            size = "md";
            fontColor = "#7C788A";
            bgColor = "white";
            break;
        case "orange-white-icon":
            size = "lg";
            fontColor = "#F5F5F5";
            bgColor = "#FF7112";
            weight = 600;
            break;
        case "white-gray-icon1":
            size = "lg";
            fontColor = "#7C788A";
            bgColor = "white";
            break;
        case "white-gray-icon2":
            size = "md";
            fontColor = "#7C788A";
            bgColor = "white";
            weight = 400;
            break;
    }
    return {
        "size": size,
        "fontColor": fontColor,
        "bgColor": bgColor,
        "weight": weight
    }
        
}