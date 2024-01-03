import { useState, useEffect } from 'react'
import './App.css'
import Tours from './components/Tours'
import data from './data'


function App() {
  const [tours, setTours] = useState([])

  function removeTour(id){
    const newTours = (tours.filter(tour => tour.id !== id))
    setTours(newTours)
  }
  useEffect(()=>{
    setTours(data)
  }, [])
  return (
    <div>
      <Tours tours={tours} removeTour= {removeTour}/>
    </div>
  )
}

export default App
