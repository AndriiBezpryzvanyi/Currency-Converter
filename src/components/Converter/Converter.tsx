import React, { useState } from "react";
import { IConverterState, Props, ICurrency } from "../../utils/types";
import { Select, MenuItem, TextField, SelectChangeEvent } from "@mui/material";
import { initialState, inputs } from "./constants";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

import styles from "./converterStyles.module.css";

const Converter: React.FC<Props> = ({ currency }) => {
  const [firstСurrency, setFirstCurrency] =
    useState<IConverterState>(initialState);
  const [secondCurrency, setSecondCurrency] =
    useState<IConverterState>(initialState);

  if (!currency) {
    return <div className={styles.loading}>...Loading</div>;
  }

  return (
    <div className={styles.container}>
      <SyncAltIcon
        sx={{
          position: "absolute",
          width: "40px",
          height: "auto",
          fill: "rgb(116, 116, 109)",
        }}
      />
      {inputs(
        firstСurrency,
        setFirstCurrency,
        secondCurrency,
        setSecondCurrency,
        currency
      ).map((item) => (
        <div className={styles.inputsBlock} key={item.id}>
          <Select
            value={item.value.currency?.cc ?? ""}
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
            value={item.value.value ?? ""}
            variant="outlined"
            className={styles.textField}
          />
        </div>
      ))}
    </div>
  );
};

export default Converter;
