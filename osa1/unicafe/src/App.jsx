import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = (props) => {
  if(props.text === 'positive') return <p>{props.text} {props.amount} %</p>

  return(
    <p>{props.text} {props.amount}</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <h2>statistics</h2>
      <Statistics text='good' amount={good} />
      <Statistics text='neutral' amount={neutral} />
      <Statistics text='bad' amount={bad} />
      <Statistics text='all' amount={good + neutral + bad} />
      <Statistics text='average' amount={(good - bad) / (good + neutral + bad)} />
      <Statistics text='positive' amount={good / (good + neutral + bad)} />
    </div>
  )
}

export default App