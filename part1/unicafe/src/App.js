import { useState } from 'react'

import Statistics from './components/Statistics/Statistics'
import FeedbackButton from './components/FeedbackButton/FeedbackButton'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>
        Give Feedback
      </h1>
      <div>
        <FeedbackButton text="Good" onClick={() => setGood(prevGood => prevGood + 1)} />
        <FeedbackButton text="Neutral" onClick={() => setNeutral(prevNeut => prevNeut + 1)} />
        <FeedbackButton text="Bad" onClick={() => setBad(prevBad => prevBad + 1)} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App