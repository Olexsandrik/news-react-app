import { useEffect, useState } from "react";

export const useDebounse=(value, delay)=>{
    const[deb, setDeb] = useState(value);


    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDeb(value);
        },delay)

        return ()=>{
            clearTimeout(handler);
        }


    
    },[value,delay])


    return deb;
}



