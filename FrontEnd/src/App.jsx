import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/header'
import Main from './Pages/Main/main'
import ForgetPSW from './Pages/ForgetPSW/forgetPSW'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

function App() {

  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path = "/" element={<Main />} />
            <Route exact path = "/forgetPSW" element={<ForgetPSW />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
