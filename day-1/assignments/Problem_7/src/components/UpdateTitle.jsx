import React, {useState,useEffect} from 'react';

const UpdateTitle = () => {
    const [count,setCount] = useState(0);

    useEffect(() =>{
        document.title = `Count:${count}`;

        return () => {
            document.title = `React App`;
        };
    },[count]);

    return(
        <div>
            <h3>Update Document Title</h3>
            <p>Current Count: {count}</p>
            <button onClick = {() => setCount(count+1)}>Increment Count</button>
        </div>
    );
};

export default UpdateTitle;