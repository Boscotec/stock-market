import "./InfoData.css";

interface Prop {
  quote: Record<string, any>;
}

const InfoData = ({ quote = {} }: Prop) => (
  <div className="container">
    <div className="h4">{quote?.symbol?.[0]}</div>
    <div className="h4">{quote?.ask?.[0]}</div>
    {quote.change ? (
      <div className="row">
        <div className={`h5`}>
          +${quote.change?.[0] || 0} ({quote.changepct?.[0] || 0}%)
        </div>
        <div className={`h6`}>Today</div>
      </div>
    ) : null}
  </div>
);

export default InfoData;
