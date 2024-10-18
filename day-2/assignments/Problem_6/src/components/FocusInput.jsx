import React, {useRef,useEffect} from 'react';

const FocusInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    },[]);

    return (
        <div>
            <input ref={inputRef} type="text" placeholder='Auto-focused input'/>
        </div>
    );
};

export default FocusInput;