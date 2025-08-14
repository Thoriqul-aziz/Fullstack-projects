import { useState } from "react";

const Display = (props) => <div>{props.value}</div>;

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button onClick={() => setToValue(1000)} text="thousand" />
      <Button onClick={() => setToValue(0)} text="reset" />
      <Button onClick={() => setToValue(value + 1)} text="increment" />
    </div>
  );
};

/* const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = clicks.left + 1;
    setClicks({ ...clicks, left: updatedLeft });
    setTotal(updatedLeft + clicks.right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = clicks.right + 1;
    setClicks({ ...clicks, right: updatedRight });
    setTotal(updatedRight + clicks.left);
  };

  return (
    <div>
      {clicks.left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {clicks.right}
      <p>{allClicks.join(" ")}</p>
      <History allClicks={allClicks} />
    </div>
  );
};

/*const Display = ({ counter }) => <div>{counter}</div>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);
  const tambah = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };
  const kurang = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };
  const zero = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={tambah} text="plus" />
      <Button onClick={kurang} text="minus" />
      <Button onClick={zero} text="zero" />
    </div>
  );
};

Penghitung terus-menerus
/* const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}

/* const App = () => {
 const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

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
        <Part part={course.parts[0].name} exercises={course.parts[0].exercises} />
        <Part part={course.parts[1].name} exercises={course.parts[1].exercises} />
        <Part part={course.parts[2].name} exercises={course.parts[2].exercises} />
      </div>
    );
  };

  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.parts}</p>
      </div>
    );
  };

  return (
    <div>
      <Header course={course.name} />
      <Content />
      <Total parts={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises} />
    </div>
  );
}; */

export default App;
