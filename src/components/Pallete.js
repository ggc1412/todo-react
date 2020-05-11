import React from "react";
import styles from "./Pallete.module.css";


const Color = ({onClick, color:{id, text, selected}}) => {
    return (
        <div className={`${styles.color} ${styles[text]} ${selected ? styles.selected :''}`} onClick={() => onClick(id)} />
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