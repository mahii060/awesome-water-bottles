import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watch from './components/Watch/Watch'
import Bottles from './components/Bottles/Bottles'

function App() {
  // const [watches, setWatches] = useState([])

  // useEffect(() => {
  //   fetch('https://raw.githubusercontent.com/mahii060/watches-data/main/watches.json')
  //     .then(res => res.json())
  //     .then(data => setWatches(data))
  // }, [])

  return (
    <>
      <h1>Memorable Water Bottles</h1>
      <Bottles />
    </>
  )
}

export default App
