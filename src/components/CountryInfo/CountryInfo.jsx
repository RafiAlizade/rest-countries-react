import { useState, useEffect } from 'react';
import './CountryInfo.css'
import { useParams , Link } from "react-router-dom";
import { ArrowLeft } from 'react-bootstrap-icons';

function CountryInfo() {
    const countryName = useParams().name.toLowerCase();
    const [array, setArr] = useState([]);

    useEffect(function() {
        async function fetchData() {
          const fetchData = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
          const responseData = await fetchData.json();

          setArr(responseData);
        }

        fetchData();
    }, []);

  return (
    <main className="app-main">
  <section className="show-country">
    <div className="container">
      <div className="show-country__inner">
        <Link to={'./../../'}><button className="show-country__back" >
          <ArrowLeft />
          <span className="show-country__back__span">Back</span>
        </button></Link>
        {array.map((country, index) => (
          <div className="show-country__inner_container" key={index}>
          <div className="show-country__inner_left">
            <div className="country__flag">
              <img src={country.flags.svg} alt={country.name.common} />
            </div>
          </div>
          <div className="show-country__inner_right">
            <h2 className="country__name">{country.name.common}</h2>
            <div className="country__more-info">
              <div className="country__info">
                <p className="country__native_par"><span className="par_bold">Native</span> : {Object.values(country.name.nativeName)[0].common}</p>
              </div>
              <div className="country__info">
                <p className="country__toplevel-dom"><span className="par_bold">Top Level Domain</span> : {country.tld[0]}</p>
              </div>
              <div className="country__info">
                <p className="country__population"><span className="par_bold">Population</span> : {country.population}</p>
              </div>
              <div className="country__info">
                <p className="country__currencies"><span className="par_bold">Currencies</span> : {Object.values(country.currencies)[0].name}</p>
              </div>
              <div className="country__info">
                <p className="country__region"><span className="par_bold">Region</span> : {country.region}</p>
              </div>
              <div className="country__info">
                <p className="country__language"><span className="par_bold">Language</span> : {Object.values(country.languages)[0]}</p>
              </div>
              <div className="country__info">
                <p className="country__subregion"><span className="par_bold">Subregion</span> : {country.subregion}</p>
              </div>
              <div className="country__info">
                <p className="country__capital"><span className="par_bold">Capital</span> : {country.capital[0]}</p>
              </div>
            </div>
            <div className="country__borders">
  <span className="par_bold">Border Countries:</span>
  <div className="country__borders_container">
    {country.borders && country.borders.length > 0 ? (
      country.borders.map((borderCountry, index) => (
        <button className='country__borders_btn' key={index}>{borderCountry}</button>
      ))
    ) : (
      <span>No border</span>
    )}
  </div>
</div>
          </div>
        </div>
        ))}
      </div>
    </div>
  </section>
</main>
  );
}

export default CountryInfo;