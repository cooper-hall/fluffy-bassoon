import { useState, useEffect } from 'react'
import './App.css'
import React from "react"
import Eighteen from './Eighteen'


function App() {
  
  const[recipeCards, setRecipeCards] = useState([])
  const[showModal, setShowModal] = useState(false)

  useEffect(()=> {
    const request = async () => {
      let req = await fetch ('http://localhost:3000/recipes')
      let res = await req.json()
      setRecipeCards(res)
    }
    request()
  }, [])

  return (
    <div className="App">
     <h1 className='header'>Ye Olde Mom n' Pop Recipe Shoppe</h1>
      <div>
        <Eighteen recipeCards={recipeCards} showModal={showModal}/>
      </div>
    </div>
  )
}

export default App
