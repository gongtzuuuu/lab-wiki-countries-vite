import React from "react";

// Styling
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Data
import countries from "./countries.json";

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

function App() {
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
