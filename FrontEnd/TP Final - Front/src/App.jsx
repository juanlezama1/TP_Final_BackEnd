import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/header'
import Main from './Pages/Main/main'

function App() {

  return (

    <BrowserRouter>
      <div className='container-fluid'>
    <Header />

      <Routes>
        <Route exact path = "/" element={<Main />} />
      </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
