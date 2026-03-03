import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [pratos, setPratos] = useState([])
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')

  useEffect(() => {
    async function buscarCardapio() {
      const resposta = await fetch("https://69a09a013188b0b1d539219a.mockapi.io/api/v1/pratos")
      const data = await resposta.json()
      setPratos(data)
    }
    buscarCardapio()
  }, [])

  async function adicionarPrato() {
    const novoPrato = { nome, preco }
    
    // Espera (await) enviar para a API
    await fetch("https://69a09a013188b0b1d539219a.mockapi.io/api/v1/pratos", {
      method: "POST",
      body: JSON.stringify(novoPrato),
      headers: { "Content-Type": "application/json" }
    })

    setNome('')
    setPreco('')

    const resposta = await fetch("https://69a09a013188b0b1d539219a.mockapi.io/api/v1/pratos")
    const data = await resposta.json()
    setPratos(data)
  }

  return (
    <div>
      <h1>Cardapio</h1>
      
      <input 
        value={nome} 
        placeholder="Nome do item" 
        type="text" 
        onChange={(evento) => setNome(evento.target.value)}
      />
      <br />

      <input 
        value={preco} 
        placeholder="Valor em R$" 
        type="text" 
        onChange={(evento) => setPreco(evento.target.value)}
      />
      <br />
      <br />

      
      <button onClick={adicionarPrato}>Enviar Prato</button>

      <ul>
        {pratos.map((prato) => {
          return (
            <li key={prato.id}>
              {prato.nome} - R$ {prato.preco}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App