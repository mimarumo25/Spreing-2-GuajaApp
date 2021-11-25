import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGetId = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getDataId = async (url) => {
           await axios.get(url)
                .then((resp) => {
                    let { data } = resp;
                    setData(data);
                })
                .catch((error) => {
                    setError("OCurrio un error " + error)
                });
        }
        getDataId(url);
    }, [url]);
    
    return { data, error }
}
