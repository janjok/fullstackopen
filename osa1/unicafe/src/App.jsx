import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Stats = ({ text, amount }) => <p>{text} {amount}</p>

const Total = ({ total }) => <p>all {total}</p>

const Average = ({ g, n, b}) => {
  const allVotes = g + n + b

  return (
    <p>average {(g-b) / allVotes}</p>
  )
}

const Positive = ({ t, g }) => <p>positive {g / t} %</p>

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
      <Stats text='good' amount={good} />
      <Stats text='neutral' amount={neutral} />
      <Stats text='bad' amount={bad} />
      <Total total={good + neutral + bad} />
      <Average g={good} n={neutral} b={bad} />
      <Positive t={good + neutral + bad} g={good} />
    </div>
  )
}

export default App