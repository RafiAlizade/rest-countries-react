import { useState, useEffect } from 'react';

function CountryDetail() {
    const [array, setArr] = useState([]);

    useEffect(function() {
        async function fetchData() {
          const fetchData = await fetch('https://restcountries.com/v3.1/all');
          const responseData = await fetchData.json();

          setArr(responseData);
        }

        fetchData();
    }, []);

  return (
        <div className="container">
            {array.map((country, index) => (
                <p key={index}>{country.name?.common}</p>
            ))}
        </div>
  );
}

export default CountryDetail;