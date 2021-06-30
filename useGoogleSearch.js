import React, { useEffect, useState } from 'react'




function useGoogleSearch(term) {
    const[data,setdata]=useState(null);

    useEffect (() => {
        const fetchData= async() =>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=AIzaSyAfGNxZn_6CS59Xt7EeJBLYkxWQZ0j_7nU&cx=c93001e7c35763abd&q=${term}`

            )
            .then(response => response.json())
            .then(result =>{setdata(result)
            })
        }
        fetchData();
    } , [term])
    return {data}
};

export default useGoogleSearch
