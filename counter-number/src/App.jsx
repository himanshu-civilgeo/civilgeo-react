import { useState } from 'react'

import './App.css'

function App() {
  
  let [counter, setCounter] = useState(12)
  const addValue =  () => {

      if(counter == 20) {
        setCounter(counter = 20)
      }
      else{
      // console.log("clicked", {counter});    
      // counter = counter + 1
      setCounter(counter + 1)
      }
  }


  const removeValue = () => {

    if(counter == 0) {
      setCounter(counter = 0)
    }
    else {
    setCounter(counter - 1)
  }
}

  return (
    <>
      
      <h1>Counter Number</h1>

      <h4>Counter Value: {counter}</h4>

      <button
        onClick={addValue}
      >
      Add Value and value changes to {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value</button>

    </>
  )
}

export default App
