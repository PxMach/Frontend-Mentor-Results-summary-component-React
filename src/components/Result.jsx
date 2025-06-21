import "../App.css";

export default function Result() {
  return (
    <div className="result left">
      <p>Your Result</p>
      <div className="score">
        <p>76</p>
        <span>of 100</span>
      </div>

      <p className="great">Great</p>
      <span className="description">
        You scored higher than 65% of the people who have taken these tests.
      </span>
    </div>
  );
}
