import { Routes, Route } from 'react-router-dom';
import './App.css'
import CountryDetails from "./components/CountryDetails/CountryDetail";
import CountryInfo from './components/CountryInfo/CountryInfo'
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<CountryDetails />} />
        <Route path="/country/:name" element={<CountryInfo />} />
      </Routes>
    </>
  )
}

export default App