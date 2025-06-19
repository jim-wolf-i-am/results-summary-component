import "./styles.css";
import data from "./data.json";
console.log(data);
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
      <ScoreItem />
      <Button />
    </>
  );
}

function ScoreItem() {
  return (
    <div>
      <div>icon</div>
      <div>item name</div>
      <div>score</div>
      <div> / total_pts</div>
    </div>
  );
}

function Button() {
  return <button>Continue</button>;
}
