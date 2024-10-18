import React, {useRef} from 'react';

const DynamicForm = () => {
    const firstNRef = useRef(null);
    const lastNRef = useRef(null);
    const emailRef = useRef(null);
    
    const handleKeyPress = (e,nextFieldRef) => {
        if (e.key === "Enter") {
            nextFieldRef.current.focus();
        }
    };

    return (
        <form>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    ref={firstNRef}
                    onKeyPress={(e) => handleKeyPress(e,emailRef)}
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    ref={lastNRef}
                    onKeyPress={(e) => handleKeyPress(e,emailRef)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="text"
                    ref={emailRef}
                />
            </div>

        </form>
    );
};

export default DynamicForm;