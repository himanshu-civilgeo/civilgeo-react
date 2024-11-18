import { useState } from 'react'
import './App.css'
import Card from './components/card'

function Tailwind() {
  
    const [cards, setCards] = useState(0);


  return ( 
    <>
        <h4 className='bg-green-400 text-black p-4 rounded-xl mb-8'>Tailwind Test Heading</h4>
        
        <Card price = "250$"/>
        <Card/>
    </>
  )
}

export default Tailwind
