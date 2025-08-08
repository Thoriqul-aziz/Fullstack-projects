import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Statistics = (props) => {
  const Statisticline = ({ text, counter }) => (
    <>
      <td>{text}</td>
      <td>{counter}</td>
    </>
  );
  if (props.allButton.length === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <table>
      <tbody>
        <tr>
          <Statisticline
            allButton={props.allButton}
            text="good"
            counter={props.good}
          />
        </tr>
        <tr>
          <Statisticline
            allButton={props.allButton}
            text="neutral"
            counter={props.neutral}
          />
        </tr>
        <tr>
          <Statisticline
            allButton={props.allButton}
            text="bad"
            counter={props.bad}
          />
        </tr>
        <tr>
          <Statisticline
            allButton={props.allButton}
            text="total"
            counter={props.total}
          />
        </tr>
        <tr>
          <Statisticline
            allButton={props.allButton}
            text="average"
            counter={props.average}
          />
        </tr>
        <tr>
          <Statisticline
            allButton={props.allButton}
            text="positive"
            counter={props.positive}
          />
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  const [allButton, setAll] = useState([]);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  const goodButton = () => {
    const updatedGood = good + 1;
    const updatedTotal = updatedGood + neutral + bad;
    setGood(updatedGood);
    setTotal(updatedTotal);
    const score = updatedGood - bad;
    const updatedAverage = score / updatedTotal;
    setAverage(updatedAverage);
    const updatedPositive = (updatedGood / updatedTotal) * 100;
    setPositive(updatedPositive + " %");
    setAll(allButton.concat(""));
  };
  const neutralButton = () => {
    const updatedNeutral = neutral + 1;
    const updatedTotal = good + updatedNeutral + bad;
    setNeutral(updatedNeutral);
    setTotal(updatedTotal);
    const score = good - bad;
    const updatedAverage = score / updatedTotal;
    setAverage(updatedAverage);
    const updatedPositive = (good / updatedTotal) * 100;
    setPositive(updatedPositive + " %");
  };
  const badButton = () => {
    const updatedBad = bad + 1;
    const updatedTotal = good + neutral + updatedBad;
    setBad(updatedBad);
    setTotal(updatedTotal);
    const score = good - updatedBad;
    const updatedAverage = score / updatedTotal;
    setAverage(updatedAverage);
    const updatedPositive = (good / updatedTotal) * 100;
    setPositive(updatedPositive + " %");
  };

  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={goodButton} text="good" />
      <Button onClick={neutralButton} text="neutral" />
      <Button onClick={badButton} text="bad" />
      <h1>statistics</h1>
      <div>
        <Statistics
          allButton={allButton}
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          average={average}
          positive={positive}
        />
      </div>
    </>
  );
};

export default App;
