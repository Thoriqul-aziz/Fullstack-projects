import { useState } from "react";

const App = () => {
  const course = "Half Stack application development";
  const part = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component",
  ];
  const exercises = [10, 7, 14];
  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    );
  };

  const Content = (props) => {
    const Part = (number) => {
      return (
        <div>
          <p>
            {props.number}
            {number.part} {number.exercises}
          </p>
        </div>
      );
    };
    return (
      <div>
        <Part part={part[0]} exercises={exercises[0]} />
        <Part part={part[1]} exercises={exercises[1]} />
        <Part part={part[2]} exercises={exercises[2]} />
      </div>
    );
  };

  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.exercises}</p>
      </div>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercises={exercises[0] + exercises[1] + exercises[2]} />
    </div>
  );
};

export default App;
