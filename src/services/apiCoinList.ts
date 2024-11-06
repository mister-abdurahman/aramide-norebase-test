import { RES_PER_PAGE } from "../utils/constants";

export const getCoinList = async (curPage: number) => {
  const from = (curPage - 1) * RES_PER_PAGE;
  const res = await fetch(
    `https://api.coinlore.net/api/tickers/?start=${from}&limit=${RES_PER_PAGE}`
  );
  if (!res.ok) throw new Error("An error occured");
  return res.json();
};
