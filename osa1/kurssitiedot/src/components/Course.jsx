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

export default Course