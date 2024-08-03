import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/header'
import Main from './Pages/Main/main'
import ForgetPSW from './Pages/ForgetPSW/forgetPSW'
import 'bootstrap/dist/css/bootstrap.min.css'
import ChangePSW from './Pages/ChangePSW/changePSW'
import NotFound from './Pages/NotFound/notFound'
import SuccessPSWChange from './Pages/SuccessPSWChange/successPSWChange'

function App() {

  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path = "/" element={<Main />} />
            <Route exact path = "/forgetPSW" element={<ForgetPSW />} />
            <Route exact path = "/changePSW" element={<ChangePSW />} />
            <Route exact path = "/successPSWChange" element={<SuccessPSWChange />}></Route>
            <Route exact path = "*" element = {<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
