import React from "react";
import { ICurrency, Props } from "../../types";

import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import styles from "./headerStyles.module.css";

const Header: React.FC<Props> = ({ currency = [] }) => {
  const headerCurrency = currency.filter(
    (item: ICurrency) => item.cc === "EUR" || item.cc === "USD"
  );

  return (
    <div className={styles.container}>
      <CurrencyExchangeIcon />
      <div className={styles.headerCurrencyBlock}>
        {headerCurrency.map((item, index) => (
          <div key={index}>
            <span className={styles.name}>{item.cc}: </span>
            <span className={styles.rate}>{item.rate}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
