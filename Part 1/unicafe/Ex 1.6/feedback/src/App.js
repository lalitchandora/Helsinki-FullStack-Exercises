import { useState } from 'react'
import Button from './Button.js';

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const giveFeedback = (type) => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button type='good' clickHandler={giveFeedback}/>
      <Button type='neutral' clickHandler={giveFeedback}/>
      <Button type='bad' clickHandler={giveFeedback}/>
      <h1>Statistics</h1>
      <h6>Good: {good}</h6>
      <h6>Neutral: {neutral}</h6>
      <h6>Bad: {bad}</h6>
    </div>
  )
}

export default App