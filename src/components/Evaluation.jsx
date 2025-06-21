export default function Evaluation(props) {
  const categoryClass = `evaluation-${props.category.toLowerCase()}`;

  return (
    <div className={`evaluation ${categoryClass}`}>
      <div className="evaluation-header">
        <img src={props.icon} alt="illustration" />
        <p>{props.category}</p>
      </div>
      <p className="note">
        {props.score}
        <span> / 100</span>
      </p>
    </div>
  );
}
