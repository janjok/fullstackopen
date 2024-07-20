const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name}/>
      <Content parts={props.course.parts}/>
      <Total total={props.course.parts}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <h2>{props.course}</h2>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.parts.name} {props.parts.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  const { parts } = props
  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} parts={part} />
      )}
    </div>
  )
}

const Total = (props) => {
  let { total } = props
  let amount = total.reduce((a, c) => a + c.exercises, 0)
  return (
    <div>
        <p><b>total of {amount} exercises</b></p>
    </div>
  )
}

const App = () => {
  const courses = [
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
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  let allCourses = courses.map(c => 
    <Course key={c.id} course={c}/>
  )

return (
  <div>
    <h1>Web development curriculum</h1>
    {allCourses}
  </div>
)
}

export default App
