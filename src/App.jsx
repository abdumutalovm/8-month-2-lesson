import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
        <Main></Main>
      </div>
    </>
  )
}

export default App
