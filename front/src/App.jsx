/* eslint-disable no-unused-vars */
import './App.css'

import { NavLink, Route, Routes } from 'react-router-dom'

import AboutUsPage from  './pages/AboutUsPage'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import NotFoundPage from './pages/NotFoundPage'

import { Layout } from './components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='About' element={<AboutUsPage/>}/>
          <Route path='Services' element={<ServicesPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes> 
    </>
  )
}

export default App
