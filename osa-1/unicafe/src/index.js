import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => <button onClick={onClick}> {text}</button>



const Average = ({ good, neutral, bad, total}) => {
  if (total <= 0) {
    return <p>no votes yet</p>
  }

  const average = parseFloat((good*1 + bad*-1)/total).toFixed(1)
  return (
    <tr>
      <StatisticCell cell='average' />
      <StatisticCell cell={average} />
    </tr>
  )
}

const Positive = ({ good, total }) => {
  const positive = parseFloat((good / total) * 100).toFixed(1) + ' %'
  return (
    <tr>
      <StatisticCell cell='positive' />
      <StatisticCell cell={positive} />
    </tr>

  )
}

// const StatisticLine = ({ text, value}) => <p> {text} {value}</p>

const StatisticCell = ({ cell }) => <td>{cell}</td>

const StatisticsTable = ({ good, neutral, bad, total}) => {
  

  
  return (
    <table>
      <tbody>
        <tr>
          <StatisticCell cell='good' />
          <StatisticCell cell={good} />
        </tr>
        
        <tr>
          <StatisticCell cell='neutral'/> 
          <StatisticCell cell={neutral} />
        </tr>

        <tr>
          <StatisticCell cell='bad' />
          <StatisticCell cell={bad} />
        </tr>
        
        <tr>
          <StatisticCell cell='all' />
          <StatisticCell cell={total} />
        </tr>
        <Average good={good} neutral={neutral} bad={bad} total={total} />
        <Positive good={good} total={total} />
      </tbody>
    </table>
  )
}

/*      <tr>
<StatisticCell cell='average' />
<StatisticCell cell={total} />
</tr>
<tr>
<StatisticCell cell='positive' />
<StatisticCell cell={positive} />
</tr>
*/
//    <Average good={good} neutral={neutral} bad={bad} total={total} />
//    <Positive good={good} total={total} />

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  if (total <= 0) {
    return (
      <>
        <p>no feedback given</p>
      </>
    )
  }

  return <StatisticsTable good={good} neutral={neutral} bad={bad} total={total} />
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={() => setGood(good + 1)} text='good' />
        <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button onClick={() => setBad(bad + 1)} text='bad' />
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
