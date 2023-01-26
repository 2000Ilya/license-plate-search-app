import React, { useState } from "react";
import "./App.css";
import plateNumberSearcher from "./helpers/plateNumberSearcher";
import { isPlateValueCorrect, isResultCorrect } from "./helpers/validator";

import useFetchXLSXData from "./hooks/useFetchXLSXData";

function App() {
  const { data, loading, error } = useFetchXLSXData(
    `/license-plate-search-app/resources/name_java.xlsx`
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [status, setStatus] = useState<string>("")

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputValue((prevValue) => {
      const inputValue = event.target.value.toUpperCase();
      if (isPlateValueCorrect(inputValue)) {
        return inputValue;
      } else {
        return prevValue;
      }
    });
  };

  const handleClick = () => {
    if (data !== null) {
      setStatus(plateNumberSearcher(inputValue, data))
    }
  }

  return (
    <div className="App">
      <input type="text" onChange={handleChange} value={inputValue} />
      <button disabled={(loading || error.length > 0 || !isResultCorrect(inputValue))} onClick={handleClick}>{"Найти"}</button>
      <p>{status}</p>
      {loading && <p>{loading}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
