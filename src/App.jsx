import { BrowserRouter } from 'react-router-dom';
import './App.css'
import CountryDetails from "./components/CountryDetails/countrydetail";
import Navbar from "./components/Navbar/navbar"

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <CountryDetails />
      </BrowserRouter>
    </>
  )
}

export default App