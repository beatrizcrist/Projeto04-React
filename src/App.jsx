import { useState } from 'react'
import './App.css'

function App() {
    const [value, setValue] = useState(0)

    return (
      <>
        <h1>Contadora</h1>
        <h2>{value}</h2>
        <button type='button' onClick={() => setValue(value + 1)}>Incrementar</button>
        <button type='button' onClick={() => setValue(value - 1)}>Subtrair</button>
        <button type='button' onClick={() => setValue(0)}>Resetar</button>
        <button type='button' onClick={() => setValue(value + value)}>Somar valor com ele mesmo</button>
        <button type='button' onClick={() => setValue(value * value)}>Multiplicar valor com ele mesmo</button>
      </>
    )
}

export default App
