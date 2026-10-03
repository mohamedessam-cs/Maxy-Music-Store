import React, { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const apiValue = createContext();

function AllData({ children }) {

  const [text, setText] = useState([]);

  useEffect(() => {

    axios
      .get(process.env.PUBLIC_URL + "/js/api.json")
      .then((element) => {
        setText(element.data.products);
      })
      .catch((error) => {
        console.log("API Error:", error);
      });

  }, []);

  return (
    <apiValue.Provider value={text}>
      {children}
    </apiValue.Provider>
  );
}

export { AllData, apiValue };