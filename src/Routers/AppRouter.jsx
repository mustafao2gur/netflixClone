import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Components/main/Main'
import Navbar from '../Components/navbar/Navbar'
import Home from '../pages/Home'

const AppRouter = () => {
  return (
<>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/' element={<Main/>}/>

</Routes>

</>
  )
}

export default AppRouter