import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { WebNavBar } from './WebNavbar'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { Home } from './page/Home'
import { PasswordChecker } from './page/PasswordChecker'
import { Member } from './page/Member'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WebNavBar/>
    <Container>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/passwordchecker' element={<PasswordChecker/>}/>
        <Route path='/member' element={<Member/>}/>
      </Routes>
    </Container>
      
    </>
  )
}

export default App
