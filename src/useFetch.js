import { useState,useEffect } from "react"

const useFetch = (url) => {
    const [blogs,setBlogs] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setPending] = useState(true);

    useEffect(()=>{
        fetch(url)
        .then(res => {
            if(!res.ok){ 
                throw new Error("Oops! Could not fetch the data.");
            }
            return res.json()
        })
        .then(data => {
            setPending(false)
            setBlogs(data)
            //console.log(data)
        })
        .catch(err => {
            setError(err.message)
            setPending(false)
            console.log(err.message)
        })
    },[url])

return [blogs,isPending,error];
}
 
export default useFetch;