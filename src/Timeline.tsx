import "./Timeline.css";

interface Prop {
  time: string;
  onClickTime: (time: string) => void;
}

const Timeline = ({ time, onClickTime }: Prop) => (
  <div className="buttons__container">
    <div
      onClick={() => onClickTime("1D")}
      className={`button ${time === "1D" && "active"}`}
    >
      1D
    </div>
    <div
      className={`button ${time === "1W" && "active"}`}
      onClick={() => onClickTime("1W")}
    >
      1W
    </div>
    <div
      className={`button ${time === "1M" && "active"}`}
      onClick={() => onClickTime("1M")}
    >
      1M
    </div>
    <div
      className={`button ${time === "3M" && "active"}`}
      onClick={() => onClickTime("3M")}
    >
      3M
    </div>
    <div
      className={`button ${time === "1Y" && "active"}`}
      onClick={() => onClickTime("1Y")}
    >
      1Y
    </div>
    <div
      className={`button ${time === "5Y" && "active"}`}
      onClick={() => onClickTime("5Y")}
    >
      5Y
    </div>
  </div>
);

export default Timeline;
