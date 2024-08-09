import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/header'
import Main from './Pages/Main/main'
import ForgetPSW from './Pages/ForgetPSW/forgetPSW'
import 'bootstrap/dist/css/bootstrap.min.css'
import ChangePSW from './Pages/ChangePSW/changePSW'
import NotFound from './Pages/NotFound/notFound'
import SuccessPSWChange from './Pages/SuccessPSWChange/successPSWChange'
import Footer from './Components/Footer/footer'
import KidsProducts from './Pages/KidsProducts/kidsProducts'
import TeenagersProducts from './Pages/TeenagersProducts/teenagersProducts'
import AdultsProducts from './Pages/AdultsProducts/adultsProducts'
import Products from './Pages/Products/products'
import RegisterAndLogin from './Pages/RegisterAndLogin/registerAndLogin'
import Register from './Pages/Register/register'
import Admin from './Pages/Admin/admin'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

function App() {

  // // Cuando ingreso, verifico si mi usuario está logueado y si es Admin

  // [isAdmin, setIsAdmin] = useState(false)
  // [isLogged, setIsLogged] = useState(false)

  // const verifyToken = async (token) => {
  //   const response = await fetch('http://localhost:8080/api/users/testing', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({token})})
  //   if (response.status == 200)
  //     return true
  //   else
  //     return false
  // }

  // useEffect(() => {
  //     const my_cookie = Cookies.get('loginCookie')
  //     if (!my_cookie) {
  //       setIsAdmin(false)
  //       setIsLogged(false)
  //     }

  //     else {
  //       if verifyToken(my_cookie)
  //     }
  // })
  

  // if(Cookies.get('loginCookie'))
  //   user_isLogged = true


  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path = "/" element={<Main />} />
            <Route exact path = "/forgetPSW" element={<ForgetPSW />} />
            <Route exact path = "/changePSW" element={<ChangePSW />} />
            <Route exact path = "/successPSWChange" element={<SuccessPSWChange />}></Route>
            <Route exact path = "/successPSWChange" element={<SuccessPSWChange />}></Route>
            <Route exact path = "/products/all" element={<Products />}></Route>
            <Route exact path = "/products/kids" element={<KidsProducts />}></Route>
            <Route exact path = "/products/teenagers" element={<TeenagersProducts />}></Route>
            <Route exact path = "/products/adults" element={<AdultsProducts />}></Route>
            <Route exact path = "/Register_and_Login" element={<RegisterAndLogin />}></Route>
            <Route exact path = "/Register" element={<Register />}></Route>
            <Route exact path = "/admin_access" element={<Admin />}></Route>
            <Route exact path = "*" element = {<NotFound />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
