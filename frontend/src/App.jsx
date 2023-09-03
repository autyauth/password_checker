import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { WebNavBar } from './WebNavbar'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { Home } from './page/Home'
import { PasswordChecker } from './page/PasswordChecker'
import { Members } from './page/Members'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container fluid className='px-0 mainContainer'>
    <WebNavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/passwordchecker' element={<PasswordChecker/>}/>
        <Route path='/members' element={<Members/>}/>
      </Routes>
      </Container>
    </>
  )
}

export default App
