import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [pratos, setPratos] = useState([])
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  useEffect(() =>{
    async function buscarCardapio(){
      const resposta = await fetch("https://69a09a013188b0b1d539219a.mockapi.io/api/v1/pratos")
      const data = await resposta.json()
      setPratos(data)
    }

    buscarCardapio()

  }, [])

  async function adicionarPrato(){
    const novoPrato = {nome, preco}
    fetch("https://69a09a013188b0b1d539219a.mockapi.io/api/v1/pratos", {
      method: "POST",
      body: JSON.stringify(novoPrato),
      headers: {"Content-Type": "application/json"}
    })
    setNome('')
    setPreco('')
  }

  return (
      <div>
        <h1>Cardapio</h1>
        <input value={nome} type="text" onChange={((evento) =>{
          setNome(evento.target.value)
        })}/>

        <input value={preco} type="text" onChange={((evento) =>{
          setPreco(evento.target.value)
        })}/>

        <button onClick={adicionarPrato}>Enviar Prato</button>
      </div>
  )
}

export default App
