import "./App.css";
import datas from "../data.json";
import Evaluation from "./components/Evaluation";
import Result from "./components/Result";

function App() {
  const dataElements = datas.map((data) => {
    return (
      <Evaluation
        category={data.category}
        score={data.score}
        icon={data.icon}
      />
    );
  });
  return (
    <main>
      <Result />
      <section className="summary-section">
        <h2>Summary</h2>
        {dataElements}
        <button className="button" type="button">
          Continue
        </button>
      </section>
    </main>
  );
}

export default App;
