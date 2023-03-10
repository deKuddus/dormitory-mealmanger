import React from "react";
import {
    FaRegClock,
    FaUsers,
    FaTrashAlt,
    FaAngleDown,
    FaAngleRight,
    FaAlignJustify,
    FaTiktok,
    FaEdit,
    FaListAlt,
    FaArrowLeft,
    FaArrowRight,
    FaTimes,
    FaBars,
    FaEye,
    FaPlus,
    FaCheck
} from "react-icons/fa";
const IconComponentArray = {
    FaRegClock,
    FaUsers,
    FaTrashAlt,
    FaAngleDown,
    FaAngleRight,
    FaAlignJustify,
    FaTiktok,
    FaEdit,
    FaListAlt,
    FaArrowLeft,
    FaArrowRight,
    FaTimes,
    FaBars,
    FaEye,
    FaPlus,
    FaCheck,
};

export default ({ name, className }) => {
    const IconComponent = IconComponentArray[name];
    return <IconComponent className={className} />;
};
