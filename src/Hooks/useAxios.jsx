import axios from 'axios';
import { useState } from 'react';

axios.defaults.baseURL = "api/";

export const useAxios = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const fireRequest = async (params) => {
         setError();
        setLoading(true);
        try {
            const resp = await axios.request(params);
            setResponse(resp.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return { response,error,setError, loading, fireRequest }
}
