import React, { useState, useEffect } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
    }, 1000);

return () => {
    clearInterval(timer);
};
}, []);

return (
    <div>
        <h2>Timer:{count}</h2>
    </div>
);
};

export default Timer;