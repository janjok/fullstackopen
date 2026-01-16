const Header = (props) => <div><h1>{props.title}</h1></div>

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
      <Part names={parts}/>
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
      <p>total of exercises {totalExercises}</p>
    </div>
  )
}

const Course = ({ course }) => {

  return (
    <div>
      <Header title={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

export default App