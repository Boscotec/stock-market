import { useEffect, useState } from "react";
import InfoData from "./InfoData";
import StockChart from "./StockChart";
import Timeline from "./Timeline";
import { getStockData, getStockQuotes } from "./Network";
import "./App.css";

function App() {
  const [ticker, setTicker] = useState("1D");
  const [symbol, setSymbol] = useState("AAPL");
  const [graphData, setGraphData] = useState<number[][]>([]);
  const [quote, setQoute] = useState<Record<string, any>>({});
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(symbol);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [symbol]);

  const onChange = (e: Record<string, any>) => setSymbol(e.target.value);

  const onClickTime = (ticker: string) => {
    setTicker(ticker);
  };

  useEffect(() => {
    if (debouncedValue) {
      getStockQuotes(debouncedValue).then((res: any) => {
        setQoute(res);
      });
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (debouncedValue && ticker) {
      getStockData(ticker, debouncedValue).then((res: any) => {
        setGraphData(res);
      });
    }
  }, [ticker, debouncedValue]);

  return (
    <div className="App">
      <div className="form-field">
        <input
          value={symbol}
          onChange={onChange}
          name="symbol"
          className="input"
          placeholder="Enter Symbol"
        />
      </div>

      <InfoData quote={quote} />
      <StockChart graphData={graphData} />
      <Timeline time={ticker} onClickTime={onClickTime} />
    </div>
  );
}

export default App;
