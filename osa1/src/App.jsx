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
      <Part p={props.course.parts[0].name} ex={props.course.parts[0].exercises} />
      <Part p={props.course.parts[1].name} ex={props.course.parts[1].exercises} />
      <Part p={props.course.parts[2].name} ex={props.course.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  let sum = 0
  const total = props.course.parts.forEach(v => {
    sum += v.exercises
  })
  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  )
}

const App = () => {
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

  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App