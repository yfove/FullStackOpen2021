import ReactDOM from 'react-dom'
import React, {useState} from 'react'


const Header = ({text}) => {
  <h2>{text}</h2>
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

  return (
    <div>
      code here
      <Button handleClick={increaseGood} text={"Good"} />
      <Button handleClick={increaseNeutral} text={"Neutral"} />
      <Button handleClick={increaseBad} text={"Bad"} />
    </div>

   
  )
}







ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
