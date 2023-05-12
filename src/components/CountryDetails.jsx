import React from "react";
import { useEffect } from "react";
import { Link, NavLink, useParams, useSearchParams } from "react-router-dom";

export default function CountryDetails({ countries }) {
  const { countryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // Get current country by params
  const currentCountry = countries.find((eachCountry) => {
    return eachCountry.alpha3Code === countryId;
  });

  // A function to get country name from cuntry code
  function findBorderName(code) {
    const country = countries.find((eachCountry) => {
      return eachCountry.alpha3Code === code;
    });
    return country.name.common;
  }

  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/w580/${currentCountry.alpha2Code.toLowerCase()}.png`}
        style={{ width: "200px" }}
        alt={currentCountry.name.common}
      ></img>
      <h1>{currentCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{currentCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {currentCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {currentCountry.borders.map((border) => {
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
