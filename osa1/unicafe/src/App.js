import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statisticline = (props) => <tbody><tr><td>{props.text}</td><td>{props.value}</td></tr></tbody>


const Statistics = (props) => {
  return(
  props.allVotes === 0? 'No feedback given' :
  <table>
    <Statisticline text='Good' value={props.good} />
    <Statisticline text='Neutral' value={props.neutral} />
    <Statisticline text='Bad' value={props.bad} />
    <Statisticline text='All' value={props.allVotes} />
    <Statisticline text='Average' value={props.average} />
    <Statisticline text='Positive' value={props.positive} />
  </table>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 const goodHandler = () => {
  setGood(good + 1)
  console.log('clicked good')}
  
  const neutralHandler = () => {
    setNeutral(neutral + 1)
    console.log('clicked neutral')}
    
    const badHandler = () => {
      setBad(bad + 1)
      console.log('clicked bad')}

  const allVotes = good + bad + neutral
  const average = ((good *1 + neutral* 0 + bad *-1)/allVotes).toFixed(2)
  const positive = (good/allVotes*100).toFixed(1)+ ' %'

  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={goodHandler} text='Good'/>
      <Button handleClick={neutralHandler} text='Neutral'/>
      <Button handleClick={badHandler} text='Bad'/>
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} allVotes={allVotes} average={average} positive={positive}/>
    </div>
  )
}

export default App