import React from "react";
import { Props } from "../../types";
import { Select, MenuItem, TextField } from "@mui/material";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { useExchange } from "../../hooks/useExchange";

import styles from "./converterStyles.module.css";

const Converter: React.FC<Props> = ({ currency }) => {
  const arrowsIconStyles = {
    position: "absolute",
    width: "40px",
    height: "auto",
    fill: "rgb(116, 116, 109)",
  };

  const inputs = useExchange(currency);

  if (!currency) {
    return <div className={styles.loading}>...Loading</div>;
  }

  return (
    <div className={styles.container}>
      <SyncAltIcon sx={arrowsIconStyles} />
      {inputs.map((item) => (
        <div className={styles.inputsBlock} key={item.id}>
          <Select
            value={item?.selectValue?.cc ?? ""}
            key={item.id}
            onChange={item.handleChangeSelect}
            className={styles.select}
          >
            {currency?.map((option) => (
              <MenuItem key={option.cc} value={option.cc}>
                {option.cc}
              </MenuItem>
            ))}
          </Select>
          <TextField
            type="number"
            onChange={item.handleChangeField}
            value={item.inputValue ?? ""}
            variant="outlined"
            className={styles.textField}
          />
        </div>
      ))}
    </div>
  );
};

export default Converter;
