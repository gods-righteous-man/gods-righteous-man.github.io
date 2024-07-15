import React from 'react'
import { useEffect, useState } from 'react';
import '../styles/Extras.css';
import axios from "axios"

function LiveProject() {

    const [cryptoData, setCryptoData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    const apiKey = process.env.REACT_APP_API_KEY;


    const fetchData = async () => {
        console.log("Useeffect execut")
        setLoading(true)
        setError(null)

        try {
            const response = await fetch('https://testrepoforexpress.vercel.app/api/cryptocurrency', {
                method: 'GET',
                headers: {
                    'X-CMC_PRO_API_KEY': apiKey,
                    // 'Accept': 'application/json',
                    // 'Content-Type': 'application/json'
                }
            }

            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status : ${response.status}`)
                console.log("This is not working due to : ", response)
            }

            const data = await response.json();
            setCryptoData(data.data);


        } catch (err) {
            setError(err)
            console.log("This is not working due to: ", error)

        } finally {
            setLoading(false)
        }
    }
    // first useEffect for intial fetch
    useEffect(() => {
        const interval = setInterval(() => {
            fetchData(); // Fetch data every 3 minutes
        }, 180000); // 3 minutes in milliseconds

        // Initial fetch
        fetchData();

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []); 
    

    if (loading && Object.keys(cryptoData).length === 0 ) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>
    return (
        <div >
            <div className='subdiv'>
                <h1 style={{ color: "green" }}>Live Crypto Prices!</h1>
                {console.log(cryptoData)}
                <ul>
                    {Object.keys(cryptoData).map(key => (
                        <li key={key}>
                            {cryptoData[key][0].name} {`$` + cryptoData[key][0].quote.USD.price.toFixed(2)}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default LiveProject