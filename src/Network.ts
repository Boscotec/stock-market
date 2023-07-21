import axios from "axios";

const baseUrl = "https://api.marketdata.app/v1/stocks";
const token =
  "format=json&token=MUZnUlVST3k4OXF6bVlFbXJ5aHFoMUFveE8xNUF0Vl9aT0RCX0M0eWhURT0";

export const getStockQuotes = async (symbol: string) => {
  try {
    const response = await axios.get(`${baseUrl}/quotes/${symbol}/?${token}`);
    const { data } = response || {};
    return data
  } catch (error: any) {
    console.error("Error", error.message);
  }
};
 
export const getStockData = async (resolution: string, symbol: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}/candles/${resolution}/${symbol}/?${token}`
    );
    const { data } = response || {};
    return [data.t, data.c];
  } catch (error: any) {
    console.error("Error", error.message);
  }
};

