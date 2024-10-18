import React, {useRef} from 'react';

const UncontrolledInput = () => {
    const inputRef = useRef(null);

    const handleDisplayValue = () => {
        alert('Current input value: ${inputRef.current.value}');
    };

    return (
        <div>
            <input  ref={inputRef} type="text" placeholder='Type something'/>
            <button onClick={handleDisplayValue}>Display Input Value</button>
        </div>
    );
};

export default UncontrolledInput;