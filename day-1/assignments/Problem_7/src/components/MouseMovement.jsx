import React, {useState,useEffect} from 'react';

const MouseMovement = () => {
    const [mousePosition,setMousePosition] = useState({x:0,y:0});

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({x: event.clientX,y:event.clientY});

        };

        window.addEventListener('mousemove',handleMouseMove);

        return () => {
            window.removeEventListener('mousemove',handleMouseMove);
        };
    },[]);

    return(
        <div>
            <h3>Mouse Position</h3>
            <p>X: {mousePosition.x}, Y:{mousePosition.y}</p>
        </div>
    );
};
export default MouseMovement;