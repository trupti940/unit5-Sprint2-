import React, {useRef,useState} from 'react';

const ValidationForm = () => {
    const inputRef = useRef(null);
    const [inputError,setInputError] = useState("");

    const validateInput = () => {
        const inputValue = inputRef.current.value;
        if (inputValue.length < 5){
            setInputError("Input must be at least 5 characters long.")
        } else{
            setInputError("");
        }
    };

    return (
        <form>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    ref={inputRef}
                    onChange={validateInput}
                />
                {inputError && <p style={{color: "red"}}>{inputError}</p>}
            </div>
        </form>
    );
};

export default ValidationForm;
