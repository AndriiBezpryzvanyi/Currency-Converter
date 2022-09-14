export interface ICurrency {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
}

export interface IConverterState {
  currency?: ICurrency | null;
  value: number | string | null;
}

export interface Props {
  currency?: ICurrency[] | null;
}
