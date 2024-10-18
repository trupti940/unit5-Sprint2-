import React, {useState,useEffect} from 'react';

const FetchData = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
                const result = await response.json();
                setData(result);
                setLoading(false);
            }catch (error){
                setError(error);
                setLoading(false);
            }

        };
        fetchData();
    },[]);

    if (loading) return <p> Loading...</p>
    if (error) return <p>Error:{error.message}</p>

    return(
        <div>
            <h3>Fetched Data</h3>
            <ul>
                {data.slice(0.5).map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchData;