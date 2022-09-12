import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Converter from "./components/Converter/Converter";
import { GET } from "./API/api";

import styles from "./App.module.css";
import { getCurrency } from "./services/currency";

function App() {
  const [currencies, setCurrencies] = useState<any>();

  const hadlerCurrency = async () => {
    const currency = await getCurrency();
    setCurrencies(currency.data);
    console.log(currency.data);
  };

  useEffect(() => {
    hadlerCurrency();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Header />
      <Converter />
    </div>
  );
}

export default App;
