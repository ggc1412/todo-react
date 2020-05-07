import React from "react";
import "./Pallete.css";


const Color = ({onClick, color:{id, text, selected}}) => {
    return (
        <div className={`color ${text} ${selected ? 'selected':''}`} onClick={() => onClick(id)} />
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