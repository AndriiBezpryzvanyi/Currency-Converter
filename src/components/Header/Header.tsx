import React from "react";

import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import styles from "./headerStyles.module.css";

interface HeaderProps {
  currency?: string[];
}

const Header: React.FC<HeaderProps> = (currency) => {
  return (
    <div className={styles.container}>
      <CurrencyExchangeIcon />
      <div></div>
    </div>
  );
};

export default Header;
