import ReactDOM from 'react-dom'
import React, {useState} from 'react'

const Header = props => <h1>{props.name}</h1>

const Statistic = ({feedback, value}) => {
  return (
    <td>{feedback} {value}</td>
  )
}

const Statistics = ({good, neutral, bad, all, average, positive }) => {
  if (good === 0 & neutral === 0 & bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <tr><Statistic feedback="good" value={good}/></tr>
        <tr><Statistic feedback="neutral" value={neutral}/></tr>
        <tr><Statistic feedback="bad" value={bad}/></tr>
        <tr><Statistic feedback="all" value={all}/></tr>
        <tr><Statistic feedback="average" value={average}/></tr>
        <tr><Statistic feedback="positive" value={positive + '%'}/></tr>
      </tbody>
    </table>
  )
}

const Button = ({handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () =>  setGood(good + 1)
  const increaseNeutral = () =>  setNeutral(neutral + 1)
  const increaseBad = () =>  setBad(bad + 1)

  const all = good + neutral + bad
  const average = (((good-bad) / all) * 100).toFixed(2)
  const positive = ((good / all) * 100).toFixed(2)

  return (
    <div>
      <Header name="Customer feedback"/>
      <Button handleClick={increaseGood} text={"Good"} />
      <Button handleClick={increaseNeutral} text={"Neutral"} />
      <Button handleClick={increaseBad} text={"Bad"} />
      <Header name="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    
    </div>

   
  )
}







ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
