import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  const handleCount = () => setCount(count + 1)

  return (
    <div className="App">
      <h1>
          Samosa Selector
      </h1>
      <h2>Count: {count}</h2>
      <button className="samosa-btn" onClick={handleCount}><img src="samosa.png" /></button>
      <div className='container'>
        <Card className="card" heading="Double Stuffed" info="2x per click" samosaCount="10 samosas"/>
        <Card className="card" heading="Party Pack" info="5x per click" samosaCount="100 samosas"/>
        <Card className="card" heading="Full Feast" info="10x per click" samosaCount="1000 samosas"/>
      </div>
      </div>
  )
}

export default App
