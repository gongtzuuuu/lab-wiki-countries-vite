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

function App() {
  const [countriesDataFromApi, setCountriesDataFromApi] = useState();

  useEffect(() => {
    // Countries data from API
    fetch("https://ih-countries-api.herokuapp.com/countries", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setCountriesDataFromApi(data));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countriesDataFromApi} />
          <Routes>
            <Route index />
            <Route
              path="/:countryId"
              element={<CountryDetails countries={countriesDataFromApi} />}
            />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
