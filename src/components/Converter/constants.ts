import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { ICurrency, IConverterState } from "../../utils/types";

export const initialState = { currency: null, value: null };

export const inputs = (
  firstСurrency: IConverterState,
  setFirstCurrency: React.Dispatch<React.SetStateAction<IConverterState>>,
  secondCurrency: IConverterState,
  setSecondCurrency: React.Dispatch<React.SetStateAction<IConverterState>>,
  currency: ICurrency[] | null
) => {
  const exchangeForFirstInput = (newValue: IConverterState) => {
    if (
      newValue.value !== null &&
      newValue.currency &&
      secondCurrency.currency
    ) {
      setSecondCurrency({
        currency: secondCurrency.currency,
        value:
          (+newValue.value / newValue.currency.rate) *
          secondCurrency.currency.rate,
      });
    }
  };

  const handleChangeFirstSelect = (event: SelectChangeEvent) => {
    const newValue = {
      currency: currency?.find(
        (item: ICurrency) => item.cc === event.target.value
      ),
      value: firstСurrency?.value,
    };

    setFirstCurrency(newValue);
    exchangeForFirstInput(newValue);
  };

  const exchangeForSecondInput = (newValue: IConverterState) => {
    if (
      newValue.value !== null &&
      newValue.currency &&
      firstСurrency.currency
    ) {
      setFirstCurrency({
        currency: firstСurrency.currency,
        value:
          (+newValue.value / newValue.currency.rate) *
          firstСurrency.currency.rate,
      });
    }
  };

  const handleChangeSecondSelect = (event: SelectChangeEvent) => {
    const newValue = {
      currency: currency?.find(
        (item: ICurrency) => item.cc === event.target.value
      ),
      value: secondCurrency?.value,
    };

    setSecondCurrency(newValue);
    exchangeForSecondInput(newValue);
  };

  return [
    {
      id: 1,
      value: firstСurrency,
      handleChangeSelect: handleChangeFirstSelect,
      handleChangeField: (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = { ...firstСurrency, value: event.target.value };
        setFirstCurrency(newValue);
        exchangeForFirstInput(newValue);
      },
    },
    {
      id: 2,
      value: secondCurrency,
      handleChangeSelect: handleChangeSecondSelect,
      handleChangeField: (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = { ...secondCurrency, value: event.target.value };
        setSecondCurrency(newValue);
        exchangeForSecondInput(newValue);
      },
    },
  ];
};
