import { Route, Routes } from 'react-router'
import { About, Contact, HomePage } from './pages'
import './App.scss'


function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  )
}

export default App
