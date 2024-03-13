import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)



  const LS = localStorage.getItem('local')
 
  function handlerClick(){
    setCount(count => count + 1)

    localStorage.setItem('local', count.toString())

  }

  function handlerClickClear(){
    localStorage.clear()
    setCount(0)
  }

  return (
      <div className="card">
        <button onClick={handlerClick}>
          count is {count}
        </button>
        <p>{count.toString()}</p>
        <h1>{LS}</h1>
        <button onClick={handlerClickClear}>
          clear
        </button>
    
      </div>
 
    
  )
}

export default App
