import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import { Home } from './Components/Home/Home.jsx'
import { About } from './Components/About/About.jsx'
import { Contact } from './Components/Contact/Contact.jsx'
import { Cars } from './Components/Cars/Cars.jsx'
import { Partner } from './Components/Partner/Partner.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path=""  element={<Home />}/>
      <Route path="/About"  element={<About />}/>
      <Route path="/Cars"  element={<Cars />}/>
      <Route path="/Contact"  element={<Contact />}/>
      <Route path="/Partner"  element={<Partner />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
