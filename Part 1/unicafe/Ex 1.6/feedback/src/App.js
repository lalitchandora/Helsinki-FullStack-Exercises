import { useState } from 'react'
import Button from './Button.js';
import Stats from './Stats.js';

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const giveFeedback = (type) => {
    console.log(type);
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
      <Button type='good' clickHandler={giveFeedback} />
      <Button type='neutral' clickHandler={giveFeedback} />
      <Button type='bad' clickHandler={giveFeedback} />
      {(good===0 && neutral === 0 && bad === 0) ?
      <h6>No feedback given</h6>
      : 
      <>
        <h1>Statistics</h1>
        <Stats good={good} bad={bad} neutral={neutral} />
      </>
      }
    </div>
  )
}

export default App