import React, {useRef} from 'react';

const ChangeBg = () => {
    const divRef = useRef(null);

    const handleClick = () => {
        divRef.current.style.backgroundColor = 'lightpink';

    };

    return (
        <div 
            ref={divRef}
            style={{width:'220px',height:'110px',backgroundColor:'lightblue'}}
            onClick={handleClick}
        >
            Click me to change background color
        </div>
    );
};

export default ChangeBg;