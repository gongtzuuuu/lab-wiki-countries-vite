import React from "react";
import { useState, useEffect } from "react";

// Styling
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

// Countries data from JSON
import countries from "./countries.json";

// Router
import { Routes, Route } from "react-router-dom";

// Pages
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

// Get Api
// import fetch from "node-fetch"; // Don't need this
import axios from "axios";

function App() {
  // Declare data - one from JSON one from API
  const [countriesData, setCountriesData] = useState(countries);
  const [countriesDataFromApi, setCountriesDataFromApi] = useState([]); //Question: What is [] for?

  // **** Use fetch **** //
  /* const fetchData = async () => {
    try {
      const response = await fetch(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      const parsed = await response.json();
      setCountriesDataFromApi(parsed);
    } catch (error) {
      console.log(error);
    }
  }; */

  // **** Use axios **** //

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      // console.log("response.status", response.status);
      if (response.status === 200) {
        // console.log("response", response.data);
        setCountriesDataFromApi(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("countriesDataFromApi", countriesDataFromApi);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countriesData={countriesDataFromApi} />
          <Routes>
            <Route index />
            <Route
              path="/:countryId"
              element={<CountryDetails countriesData={countriesDataFromApi} />}
            />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
