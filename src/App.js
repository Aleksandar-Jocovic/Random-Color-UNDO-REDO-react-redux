import React from 'react'
import Background from './components/Background'
import BackgroundSecond from './components/BackgroundSecond'

import './App.css'

const App = () => {

  const handleChange = () => {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let randoms = [];
    let finalRandoms = "#"

    for (let i = 0; i < 6; i++) {
      randoms[i] = arr[Math.floor(Math.random() * 15)];
      finalRandoms += `${randoms[i]}`
    }

    return finalRandoms
  }

  return (
    <div className="appStyle">
      <Background handleChange={handleChange} />
      <BackgroundSecond handleChange={handleChange} />
    </div>
  )
}

export default App
