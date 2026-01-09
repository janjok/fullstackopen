const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.p} {props.ex}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part p={props.parts[0].name} ex={props.parts[0].exercises} />
      <Part p={props.parts[1].name} ex={props.parts[1].exercises} />
      <Part p={props.parts[2].name} ex={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  let sum = 0
  const total = props.parts.forEach(v => {
    sum += v.exercises
  })
  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

export default App