import React from "react";
import styles from "../styles/Form.module.scss";

const Form = ({value, onChange, onKeyPress, onCreate}) => {
    return (
        <div className={styles.form}>
            <input placeholder="할 일을 입력하세요." 
                value={value} 
                onChange={onChange} 
                onKeyPress={onKeyPress} />
            <div className={styles.createButton} onClick={onCreate}>추가</div>
        </div>
    );
}

export default Form;