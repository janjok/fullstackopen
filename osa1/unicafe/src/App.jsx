import { useState } from 'react'



const Button = (props) => {
  console.log("Button props:", props)
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

const StatisticLine = (props) => {
  if(props.text === "positive"){
    return <p>{props.text}: {props.value} %</p>
  }

  return (
    <>
      <p>{props.text}: {props.value}</p>
    </>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const avg = (props.good - props.bad) / all
  const pos = props.good / all * 100

  if(all === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={avg} />
      <StatisticLine text="positive" value={pos} />
    </div>
  )

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const clickGood = () => {
    const newGood = good + 1
    setGood(newGood)
  }

  const clickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const clickBad = () => {
    const newBad = bad + 1
    setBad(newBad)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={clickGood} />
      <Button text="neutral" onClick={clickNeutral} />
      <Button text="bad" onClick={clickBad} />
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
