import { useState, useEffect } from "react";
import axios from "axios";
import Countries from './component/Wheater'


const App = () => {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        setLoading(false);
      });
  }, [countries]);

  useEffect(() => {
    if (value) {
      const results = countries.filter((country) =>
        country.name.common.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCountries(results);
    } else {
      setFilteredCountries([]);
    }
  }, [value, countries]);

  const handleQueryChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div>
        <div>
          <div>
            find countries <input
              type="text"
              value={value}
              onChange={handleQueryChange}
              placeholder="Search for a country..."
            />
          </div>
        </div>
        <div>
          {loading ? (
            <p>Loading country data...</p>
          ) : (
            <Countries.Results
              filteredCountries={filteredCountries}
              setValue={setValue}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App