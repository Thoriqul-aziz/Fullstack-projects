import { useMemo, useState } from "react";

const Title = ({ title }) => <h1>{title}</h1>;
const Text = ({ p }) => <div>{p}</div>;
const Votes = ({ vote }) => <div>Has {vote} votes</div>;
const Mostvotes = ({ word, votes }) => {
  <div> {word}</div>;
  <div> Has {votes} votes</div>;
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const App = () => {
  const anecdotes = [
    { text: "If it hurts, do it more often.", value: 0 },
    {
      text: "Adding manpower to a late software project makes it later!",
      value: 0,
    },
    {
      text: "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      value: 0,
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      value: 0,
    },
    { text: "Premature optimization is the root of all evil.", value: 0 },
    {
      text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      value: 0,
    },
    {
      text: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      value: 0,
    },
    { text: "The only way to go fast, is to go well.", value: 0 },
  ];
  const [selected, setSelected] = useState(anecdotes[0].text);
  const [vote, setVote] = useState(anecdotes);
  const [index, setIndex] = useState(0);
  const mostVote = useMemo(() => {
    const most = Math.max(...vote.map(word => word.value));
    if (most === 0) return [];
    const double = vote.filter(word => word.value === most);
    return double.length > 0 ? [double[0]] : []
  }, [vote]);

  const next = () => {
    const randomAnecdots = Math.floor(Math.random() * anecdotes.length);
    setSelected(anecdotes[randomAnecdots].text);
    setIndex(randomAnecdots);
  };
  const voteButton = () => {
    const copy = [...vote];
    copy[index].value += 1;
    setVote(copy);
    console.log(vote);
  };

  const currentWord = vote[index].value;
  return (
    <div>
      <Title title={"Anecdots of the day"} />
      <Text p={selected} />
      <Votes vote={currentWord} />
      <Button onClick={voteButton} text={"Vote"} />
      <Button onClick={next} text={"Next anecdotes"} />
      <Title title={"Anecdots with most votes"} />
      <Mostvotes word={mostVote} votes />
      {mostVote.map((winner, index) => (
        <p key={index}>
          {winner.text} <br />
          Has {winner.value} votes
        </p>
      ))}
    </div>
  );
};

export default App;
