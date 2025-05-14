import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './component/Table/Table'
import Demo from './component/Table/demo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Table/>
    <Demo/>
    </>
  )
}

export default App
