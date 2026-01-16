const Header = (props) => <div><h2>{props.title}</h2></div>

const Part = ({ names }) => {
  return (
    <div>
      {names.map(n =>
        <p key={n.id}>{n.name} {n.exercises}</p>
      )}
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part names={parts} />
    </div>
  )
}

const Total = ({ parts }) => {
  const arrayOfExercises = parts.map(ex => ex.exercises)
  const totalExercises = arrayOfExercises.reduce(
    (acc, curr) => acc + curr,
  )

  return (
    <div>
      <strong>total of exercises {totalExercises}</strong>
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Header title={course[0].name} />
      <Content parts={course[0].parts}/>
      <Total parts={course[0].parts}/>
      <Header title={course[1].name} />
      <Content parts={course[1].parts}/>
      <Total parts={course[1].parts}/>
    </div>
  )
}

export default Course