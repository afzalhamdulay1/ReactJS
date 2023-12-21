import {useState, useEffect} from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res) => setData(res[currency]))  
    },[currency])
    return data
    // we are returning the data that we stored using setData function to store in the 'data' useState. so each time we use this custom hook, the data is fetched from api, then stored in data and then the data is called to display on the web page
}

export default useCurrencyInfo