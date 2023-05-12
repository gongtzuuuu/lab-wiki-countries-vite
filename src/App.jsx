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
import fetch from "node-fetch";
import axios from "axios";

function App() {
  // Declare data - one from JSON one from API
  const [countriesData, setCountriesData] = useState(countries);
  const [countriesDataFromApi, setCountriesDataFromApi] = useState();

  // Use fetch
  /* useEffect(() => {
    // Countries data from API
    fetch("https://ih-countries-api.herokuapp.com/countries", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setCountriesDataFromApi(data));
  }, []); */

  // Use Axios
  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((res) => {
        setCountriesDataFromApi(res.data);
      });
  }, []);

  console.log("countriesDataFromApi", countriesDataFromApi);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route index />
            <Route
              path="/:countryId"
              element={<CountryDetails countries={countries} />}
            />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
