import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [pratos, setPratos] = useState([])
  useEffect(() =>{
    async function buscarCardapio(){
      const resposta = await fetch("https://69a09a013188b0b1d539219a.mockapi.io/api/v1/pratos")
      const data = await resposta.json()
    }

  }, [])

  return (
      <div>
        <h1>Cardapio</h1>
        <input type="text"/>
      </div>
  )
}

export default App
