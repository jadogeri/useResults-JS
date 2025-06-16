
/**
 * @author      Joseph Adogeri
 * @since       15-JUN-2025
 * @version     1.0.0
 * @description creating hook instance for application
 *  
 */

import { useState, useEffect } from "react"
import { getParamsAsString } from "./src/getParamsAsString.js";

export default ({baseURL, baseRoute, baseHeaders}) => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    const _baseURL = baseURL;
    const _headers = baseHeaders? baseHeaders : {}

    const searchApi = async ({route, params, headers}) => {        
        try {
            const _params = getParamsAsString(params)

            const response =
             await fetch(`${_baseURL}${route}${_params}`,
                           {mode:'cors', 
                            headers: headers? headers : _headers,                            
                           });
            const data = await response.json();

            setResults(data)
            setErrorMessage('')

        } catch (e) {
            setErrorMessage('something went wrong\nerror message : ' + e.message)
        }

    }

    useEffect(() => {
        searchApi({baseURL: _baseURL,route: baseRoute, headers: _headers})
    }, [])


    return [searchApi, results, errorMessage];

};

