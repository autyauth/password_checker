
import './App.css'
import { WebNavBar } from './WebNavbar'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { Home } from './page/Home'

import { Members } from './page/Members'

function App() {

  return (
    <>
    <Container fluid className='px-0 mainContainer'>
    <WebNavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/members' element={<Members/>}/>
      </Routes>
      </Container>
    </>
  )
}

export default App
