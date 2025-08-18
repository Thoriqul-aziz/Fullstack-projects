import { useState, useEffect } from "react";
import axios from "axios";

const WeatherInfo = ({ capital, latlng }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (latlng && latlng.length === 2) {
      setLoading(true);
      setError(null);
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latlng[0]}&longitude=${latlng[1]}&current=temperature_2m,weather_code,wind_speed_10m`;

      axios
        .get(url)
        .then((response) => {
          setWeather(response.data.current);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
          setError("Tidak dapat mengambil data cuaca.");
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [latlng]);

  if (!capital || !latlng) return null;
  if (loading) return <p>Memuat data cuaca...</p>;
  if (error) return <p>{error}</p>;
  if (!weather) return <p>Data cuaca tidak tersedia.</p>;

  return (
    <div>
      <h3>Wheather in {capital}</h3>
      <div>
        <p>
          <span>Temperature:</span> {weather.temperature_2m} °Celcius
        </p>
        <p>
          <span>Wind:</span> {weather.wind_speed_10m} m/s
        </p>
      </div>
    </div>
  );
};
const CountryDetails = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        <p>
          <span>Capital:</span> {country.capital ? country.capital[0] : "N/A"}
        </p>
        <p>
          <span>Area:</span> {country.area.toLocaleString()} km²
        </p>
      </div>

      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      <div>
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = country.flags.png;
          }}
        />
      </div>
      <WeatherInfo capital={country.capital[0]} latlng={country.latlng} />
    </div>
  );
};

const CountryList = ({ countries, showCountry }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.cca3}>
          <span>{country.name.common}</span>{" "}
          <button onClick={() => showCountry(country.name.common)}>Show</button>
        </li>
      ))}
    </ul>
  );
};

const Results = ({ filteredCountries, setValue }) => {
  if (filteredCountries.length > 10) {
    return <p>Too many matches, please specify another filter.</p>;
  }

  if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
    return <CountryList countries={filteredCountries} showCountry={setValue} />;
  }

  if (filteredCountries.length === 1) {
    return <CountryDetails country={filteredCountries[0]} />;
  }

  return <p>Enter a country name to start searching.</p>;
};

export default { CountryDetails, CountryList, Results, WeatherInfo };
