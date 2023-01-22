import { useState, useEffect } from "react";


const useFetch = (url,dependences = []) => {
    const [data, setdata] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        (async() => {
            setIsLoading(true);
            try{
                let result =await fetch(url);
                result = await result.json();

                setdata(result);
            }catch(err){
                setError(err);
            }
            setIsLoading(false);
        })()
    }, [url ,...dependences])
    
    return {data, error, isLoading};
}


export default useFetch;