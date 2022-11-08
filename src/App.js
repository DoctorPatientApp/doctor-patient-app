
import React from "react"
import "./App.css"
import HomePage from "./components/Home"
import Doctor from "./components/Doctor"
import { Routes, Route } from "react-router-dom"
import Patient from "./components/Patient"
import DefaultLayout from "./layouts/default_layout"
import DoctorLogin from "./components/Doctor/Doctor-login"

const App = () => (

  <>
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route index element={<HomePage />} />
          <Route path='doctor' element={<Doctor />} >
            <Route path="login" element={<DoctorLogin/>}/>
          </Route>
          <Route path = 'patient' element={<Patient/>}>
          </Route>
        </Route>
      </Routes>
  </>

)



export default App