import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { ICurrency } from "../types";

export function useExchange(currency: ICurrency[]) {
  const [firstCurrency, setFirstCurrency] = useState<ICurrency>();
  const [secondCurrency, setSecondCurrency] = useState<ICurrency>();
  const [firstInputValue, setFirstInputValue] = useState<number | string>();
  const [secondInputValue, setSecondInputValue] = useState<number | string>();

  const exchangeForFirstInput = (newValue: ICurrency | number) => {
    if (typeof newValue === "number") {
      newValue !== undefined &&
        firstCurrency &&
        secondCurrency &&
        setSecondInputValue(
          (newValue / firstCurrency.rate) * secondCurrency.rate
        );
    } else {
      firstInputValue &&
        newValue &&
        secondCurrency &&
        setSecondInputValue(
          (+firstInputValue / newValue.rate) * secondCurrency.rate
        );
    }
  };

  const exchangeForSecondInput = (newValue: ICurrency | number) => {
    if (typeof newValue === "number") {
      newValue !== undefined &&
        secondCurrency &&
        firstCurrency &&
        setFirstInputValue(
          (newValue / secondCurrency.rate) * firstCurrency.rate
        );
    } else {
      secondInputValue &&
        newValue &&
        firstCurrency &&
        setFirstInputValue(
          (+secondInputValue / newValue.rate) * firstCurrency.rate
        );
    }
  };

  return [
    {
      id: 1,
      selectValue: firstCurrency,
      inputValue: firstInputValue,
      handleChangeSelect: (e: SelectChangeEvent) => {
        const newFirstCurrency = currency.find(
          (item: ICurrency) => item.cc === e.target.value
        );
        setFirstCurrency(newFirstCurrency);
        newFirstCurrency && exchangeForFirstInput(newFirstCurrency);
      },
      handleChangeField: (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstInputValue(event.target.value);
        exchangeForFirstInput(+event.target.value);
      },
    },
    {
      id: 2,
      selectValue: secondCurrency,
      inputValue: secondInputValue,
      handleChangeSelect: (e: SelectChangeEvent) => {
        const newSecondCurrency = currency.find(
          (item: ICurrency) => item.cc === e.target.value
        );
        setSecondCurrency(newSecondCurrency);
        newSecondCurrency && exchangeForSecondInput(newSecondCurrency);
      },
      handleChangeField: (event: React.ChangeEvent<HTMLInputElement>) => {
        setSecondInputValue(event.target.value);
        exchangeForSecondInput(+event.target.value);
      },
    },
  ];
}
