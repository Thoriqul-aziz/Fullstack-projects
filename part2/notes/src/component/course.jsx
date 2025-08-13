const Course = ({ course }) => {
  const Header = ({ header }) => {
    return <div>{header}</div>;
  };
  const Content = ({ l, z, i, t }) => {
    const Part = ({ parts }) => <>{parts}</>;
    const Total = ({ exercises }) => <>{exercises}</>;

    return (
      <div>
        <Part parts={l} />
        <Part parts={i} />
        <Total exercises={z} />
        <Total exercises={t} />
      </div>
    );
  };
  const a = course.map((course) => {
    return (
      <div>
        <h2 key={course.id}>{course.name}</h2>
      </div>
    );
  });
  const b = course.map((course) => {
    return course.parts.map((parts) => (
      <p key={parts.id}>
        {parts.name} {parts.exercises}
      </p>
    ));
  });
  const aku = course.map((course) => {
    return course.parts.reduce((s, p) => {
      s + p.exercises, 0;
      return <b>Total of {p.exercises} exercises</b>;
    });
  });
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <Header header={a[0]} />
      <Content l={b[0]} z={aku[0]} />
      <Header header={a[1]} />
      <Content i={b[1]} t={aku[1]} />
    </div>
  );
};

export default Course;
