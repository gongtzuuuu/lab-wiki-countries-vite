import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function CountryDetails({ countriesData }) {
  // Set filtered country
  const [filteredCountry, setFilteredCountry] = useState([]);
  const { countryId } = useParams();
  console.log("countryId", countryId); // Works successfully

  // Get current country by params
  /* const filteredCountry = countriesData.find((eachCountry) => {
    return eachCountry.alpha3Code === countryId;
  }); */

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setFilteredCountry(response.data);
        console.log("response", response.data); // No response
        console.log("response status", response.status); // No response
      })
      .catch((error) => console.log(error));
  }, [countriesData, countryId]);

  // A function to get country name from cuntry code
  function findBorderName(code) {
    const country = countriesData.find((eachCountry) => {
      return eachCountry.alpha3Code === code;
    });
    return country.name.common;
  }

  console.log("filteredCountry", filteredCountry);

  return (
    <div className="col-7">
      <h1>{filteredCountry.name.common}</h1>
      <img
        src={`https://flagpedia.net/data/flags/w580/${filteredCountry.alpha2Code.toLowerCase()}.png`}
        alt={filteredCountry.name.common}
        style={{ width: "200px" }}
      ></img>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{filteredCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {filteredCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {filteredCountry.borders.map((border) => {
                  return (
                    <li key={border}>
                      <Link key={border} to={"/" + border}>
                        {findBorderName(border)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
