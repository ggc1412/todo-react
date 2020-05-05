import React from "react";

const Form = ({value, onChange, onKeyPress, onCreate}) => {
    return (
        <div>
            <input placeholder="할 일을 입력하세요." value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <div className="create=button" onClick={onCreate}>추가</div>
        </div>
    );
}

export default Form;