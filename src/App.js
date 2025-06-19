import "./styles.css";
import data from "./data.json";
// console.log(data);
export default function App() {
  return (
    <div className="component-wrapper">
      <Result />
      <Summary />
    </div>
  );
}

function Result() {
  return <div>Your Results</div>;
}

function Summary() {
  return (
    <>
      <div>Summary</div>
      <ScoresList data={data} />
      <Button />
    </>
  );
}

function ScoresList({ data }) {
  console.log(data);
  return (
    <>
      <ul className="grid-container scores-list">
        {data.map((skill) => (
          <li key={skill.category}>
            <span>
              <img src={skill.icon}></img>
            </span>
            <span>{skill.category}</span>
            <span>{skill.score}</span>
          </li>
        ))}
      </ul>

      <div>
        <div>icon</div>
        <div>item name</div>
        <div>score</div>
        <div> / total_pts</div>
      </div>
    </>
  );
}

function Button() {
  return <button>Continue</button>;
}
