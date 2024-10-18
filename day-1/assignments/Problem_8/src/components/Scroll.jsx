import React, { useState, useEffect } from 'react'

const Scroll = () => {
    const [scrollposition,setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        };
    },[]);

    return (
        <div>
            <h2>Scroll Position : {scrollposition}px</h2>
        </div>
    );
};

export default Scroll;