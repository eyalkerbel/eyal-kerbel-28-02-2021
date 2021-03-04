import logo from './logo.svg';
import './App.css';
import Switcher from "../../herelo-project/src/Switcher";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import useInterval from '@use-it/interval';
import RatesContext from "./Contexts/RatesContext";
import currentRateContext from "./Contexts/CurrentRateContext";
import React, { useEffect } from "react";
function App() {
  const [rates, setRates] = React.useState({ "USD": 1 });
  const [currentRate, setCurrentRate] = React.useState("USD");


  useEffect(() => {
    fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=USD,GBP,ILS") // data source is an object, not an array.
      .then(res => res.json())
      .then(result => {
        setRates(result.rates);
      });
  });

  useInterval(() => {
    if (currentRate == "USD") {
      setCurrentRate("ILS");
    } else if (currentRate == "ILS") {
      setCurrentRate("GBP");
    } else {
      setCurrentRate("USD");
    }
  }, 10000);


  return (
    <RatesContext.Provider value={rates}>
      <currentRateContext.Provider value={currentRate}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switcher />
        </BrowserRouter>
      </currentRateContext.Provider>
    </RatesContext.Provider>

  );
}

export default App;

