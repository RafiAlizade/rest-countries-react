import { useState, useEffect } from 'react';
import './countrydetail.css'
import { Search , ChevronDown } from 'react-bootstrap-icons';
import { Link , Routes, Route } from "react-router-dom";

function CountryDetail() {
    const [array, setArr] = useState([]);
    const [searchText, setSearchText] = useState('');

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

    const searchCountry = (e) => {
        let searchedName = e.target.value.toLowerCase();
        console.log(searchedName);
        
        const fetchData = async (url) => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (response.ok) {
                    setArr(data);
                } else {
                    console.log('Error fetching data');
                }
            } catch (error) {
                console.log('Error:', error.message);
            }
        };
    
        if (searchedName) {
            fetchData(`https://restcountries.com/v3.1/name/${searchedName}`);
        } else {
            fetchData('https://restcountries.com/v3.1/all');
        }
    }

    const filterCountry = (e) => {
        let selectedValue = e.target.textContent;
        let selectedvalueforText = document.querySelector('.filter__input_value');
        selectedvalueforText.textContent = selectedValue;

        const fetchData = async (url) => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (response.ok) {
                    setArr(data);
                } else {
                    console.log('Error fetching data');
                }
            } catch (error) {
                console.log('Error:', error.message);
            }
        };

        if (selectedValue) {
            if (selectedValue == 'All') {
                fetchData('https://restcountries.com/v3.1/all');
            } else {
                fetchData(`https://restcountries.com/v3.1/region/${selectedValue}`);
            }

            let displayContent = document.querySelector('.filter__options');
            displayContent.classList.toggle('d-none')
        } else {
            fetchData('https://restcountries.com/v3.1/all');
        }
    }

    const displayOnOff = () => {
        let displayContent = document.querySelector('.filter__options');

        if (displayContent.style.display == 'none') {
            displayContent.classList.toggle('d-none')
        } else {
            displayContent.classList.toggle('d-none')
        }
    }

  return (
        <main className="app_main">
            <div className="container">
                <section className="app_countries">
                    <div className="countries__container">
                        <div className="search__filter_container">
                            <div className="countries__search_input">
                                <label className="search_input__label">
                                    <Search />
                                    <input type="text" onChange={searchCountry} placeholder='Search for a country' />
                                </label>
                            </div>

                            <div className="countries__filter_input">
                                <div className="filter_input" onClick={displayOnOff}>
                                    <span className="filter__input_value">Filter by region</span>
                                    <ChevronDown />
                                </div>

                                <div className="filter__options d-none">
                                <div className="filter__option">
                                    <span className="filter__option_value" onClick={filterCountry}>All</span>
                                </div>

                                <div className="filter__option">
                                    <span className="filter__option_value" onClick={filterCountry}>Africa</span>
                                </div>

                                <div className="filter__option">
                                    <span className="filter__option_value" onClick={filterCountry}>Americas</span>
                                </div>

                                <div className="filter__option">
                                    <span className="filter__option_value" onClick={filterCountry}>Asia</span>
                                </div>

                                <div className="filter__option">
                                    <span className="filter__option_value" onClick={filterCountry}>Europe</span>
                                </div>

                                <div className="filter__option">
                                    <span className="filter__option_value" onClick={filterCountry}>Oceania</span>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="countries__allbox">
                        {array.map((country, index) => (
                           <Link to={`./${country.name.common}`} key={index}>
                             <div className='country__box' id={country.name?.common} key={index}>
                                <div className="country__image">
                                    <img src={country.flags?.svg} alt={country.name?.common} />
                                </div>

                                <div className="country__description">
                                    <h5 className="country__name">{country.name?.common}</h5>

                                    <div className="country__population">
                                        <span className='population__text bold'>Population: </span>
                                        <span className='population__count'>{country.population.toLocaleString()}</span>
                                    </div>

                                    <div className="country__region">
                                        <span className='region__text bold'>Region: </span>
                                        <span className='region__name'>{country.region}</span>
                                    </div>

                                    <div className="country__capital">
                                        <span className='capital__text bold'>Capital: </span>
                                        <span className='capital__name'>{country.capital?.[0]}</span>
                                    </div>
                                </div>
                            </div>
                           </Link>
                        ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
  );
}

export default CountryDetail;