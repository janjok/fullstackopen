import { useState } from 'react'



const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

const StatisticLine = (props) => {
  if(props.text === "positive"){
    return (
      <>
        <td>{props.text}</td>
        <td>{props.value} %</td>
      </>
    )
  }

  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const avg = (props.good - props.bad) / all
  const pos = props.good / all * 100
  const fixedAvg = avg.toFixed(1)
  const fixedPos = pos.toFixed(1)

  if(all === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <table>
      <tbody>
        <tr>
          <StatisticLine text="good" value={props.good} />
        </tr>
        <tr>
          <StatisticLine text="neutral" value={props.neutral} />
        </tr>
        <tr>
          <StatisticLine text="bad" value={props.bad} />
        </tr>
        <tr>
          <StatisticLine text="all" value={all} />
        </tr>
        <tr>
          <StatisticLine text="average" value={fixedAvg} />
        </tr>
        <tr>
          <StatisticLine text="positive" value={fixedPos} />
        </tr>
      </tbody>
    </table>
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
