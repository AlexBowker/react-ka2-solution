import axios from "axios";
import { FormEvent, useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../../constants/weatherApi";

function TemperatureChecker() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setTemperature("");

    try {
      const response = await axios.get(WEATHER_API_URL, {
        params: {
          key: WEATHER_API_KEY,
          q: city,
        },
      });

      setTemperature(response?.data?.current?.temp_c);
    } catch (error) {
      setErrorMessage(String(error));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          autoComplete="off"
          onChange={(e) => setCity(e.target.value)}
        />
        <button>Submit</button>
      </form>
      {temperature && <p>Current temperature is {temperature}°C.</p>}
      <p>{errorMessage}</p>
    </>
  );
}

export default TemperatureChecker;
