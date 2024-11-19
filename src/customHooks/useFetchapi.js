import { useEffect, useState } from "react";


function useFetchapi(apiPath, extra=""){
    var [apidata, setapidata] = useState([]);

        useEffect(()=>{
            fetch(apiPath)
            .then(res=>res.json())
            .then(val=>{
                setapidata(val.results)
            })
        }, [extra]);

        return(apidata);
}

export default useFetchapi;