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
  console.log(course)
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

const App = () => {
  const course = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middleware',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App