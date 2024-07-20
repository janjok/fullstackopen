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
    <h1>{props.course}</h1>
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
        <p>total of {amount} exercises</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
    {
      name: "Fundamentals of React", 
      exercises: 10,
      id: 1
    },
    {
      name: "Using props to pass data",
      exercises: 7,
      id: 2
    },
    {
      name: "State of a component",
      exercises: 14,
      id: 3
    }
  ]
}
  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App
