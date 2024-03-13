import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)



  const LS = localStorage.getItem('local')
 
  function handlerClick(){
    setCount(count => count + 1)
    
    localStorage.setItem('local', count.toString())

  }

  return (
    
      <div className="card">
        <button onClick={handlerClick}>
          count is {count}
        </button>
        <p>{count.toString()}</p>
        <h1>{LS}</h1>
    
      </div>
 
    
  )
}

export default App
