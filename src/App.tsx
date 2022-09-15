import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Converter from "./components/converter/Converter";
import { getCurrency } from "./services/currency";
import { ICurrency } from "./types";

import styles from "./App.module.css";

function App() {
  const [listCurrency, setListCurrency] = useState<ICurrency[] | []>([]);

  const handlerCurrency = async () => {
    const currency = await getCurrency();
    setListCurrency(currency.data);
  };

  useEffect(() => {
    handlerCurrency();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Header currency={listCurrency} />
      <Converter currency={listCurrency} />
    </div>
  );
}

export default App;
