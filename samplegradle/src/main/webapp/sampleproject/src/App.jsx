import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Hello from './views/Hello'
import Sample from './views/Sample'
import ReduxTest from './views/ReduxTest'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Link to='/'>Home</Link>
          | <Link to='/hello'>Hello</Link>
          | <Link to='/sample'>Sample</Link>
          | <Link to='/redux'>Redux</Link>
          <Routes>
            <Route path='/hello' Component={Hello}/>
            <Route path='/sample' Component={Sample}/>
            <Route path='/redux' Component={ReduxTest}/>

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
