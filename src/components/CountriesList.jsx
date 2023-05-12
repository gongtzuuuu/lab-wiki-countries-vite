import React from "react";
import "bootstrap/dist/css/bootstrap.css";

// Router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function CountriesList({ countriesData }) {
  // A function turn alpha2Code into its flag emoji
  /* const getFlagEmoji = (alpha2Code) => {
    const codePoints = alpha2Code
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  };*/

  return (
    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
      <div className="list-group">
        {countriesData.map((eachCountry) => {
          return (
            <Link
              key={eachCountry.alpha3Code.toLowerCase()}
              className="list-group-item list-group-item-action"
              to={"/" + eachCountry.alpha3Code}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
                alt={eachCountry.name.common}
              ></img>
              <p>{eachCountry.name.common}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
