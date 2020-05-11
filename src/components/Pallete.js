import React from "react";
import classNames from "classnames/bind";
import styles from "./Pallete.module.css";

const cn = classNames.bind(styles);


const Color = ({onClick, color:{id, text, selected}}) => {
    return (
        <div className={cn('color', text, { selected })} onClick={() => onClick(id)} />
    )
}

const Pallete = ({colors, onColor}) => {
    const colorPallete = colors.map((color,idx) => <Color 
        key={idx} 
        onClick={onColor} 
        color={color} 
        />)  

    return(
        <>
        {colorPallete}
        </>
    )
}

export default Pallete;