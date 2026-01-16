const Header = (props) => <div><h1>{props.title}</h1></div>

const Part = ({ names }) => {
  console.log('Part props', names)
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

const Course = ({ course }) => {

  return (
    <div>
      <Header title={course.name}/>
      <Content parts={course.parts}/>
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