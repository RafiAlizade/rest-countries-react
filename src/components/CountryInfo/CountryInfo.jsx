import { useState, useEffect } from 'react';
import './CountryInfo.css'
// import { Link , Routes, Route } from "react-router-dom";

function CountryDetail() {
    const [array, setArr] = useState([]);

    const handleTextChange = (event) => {
        setSearchText(event.target.value);
      };

    useEffect(function() {
        async function fetchData() {
          const fetchData = await fetch('https://restcountries.com/v3.1/all');
          const responseData = await fetchData.json();

          setArr(responseData);
        }

        fetchData();
    }, []);

  return (
        <main className="app_main">
            <div className="container">
                <section className="app_countries">
                </section>
            </div>
        </main>
  );
}

export default CountryDetail;