import React from 'react'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import Home from './Router/Home'
import Profile from "./Router/Profile"
import About from './Router/About'
import Contact from "./Router/Contact"
import Services from './Router/Services'
import Settings from "./Router/Settings"
import WebDevelopment from './Router/WebDevelopment'
import AppDevelopment from './Router/AppDevelopment'
import UIUXDesign from './Router/UIUXDesign'
import "./App.css";
import BlogDetails from './Components/BlogDetails'


export default function App() {
  return (
    <BrowserRouter>
    <div className="header">
      <Link to ={"/Home"}>Home</Link>
      <Link to ={"/Profile"}>Profile</Link>
      <Link to ={"/About"}>About</Link>
      <Link to ={"/Contact"}>Contact</Link>
      <Link to ={"/Services"}>Services</Link>
      <Link to ={"/Settings"}>Settings</Link>
    </div>
    <Routes>
      <Route path="/Home"element={<Home />}/>
      <Route path="/Profile"element={<Profile />}/>
      <Route path="/About"element={<About />}/>
      <Route path="/Contact"element={<Contact />}/>
      <Route path="/Services"element={<Services />}>
        <Route path="WebDevelopment"element={<WebDevelopment/>}/>
        <Route path="AppDevelopment"element={<AppDevelopment/>}/>
        <Route path="UIUXDesign"element={<UIUXDesign/>}/>
        
        </Route>
        <Route path="/Blog/:id"element={<BlogDetails />}/>
      <Route path="/Settings"element={<Settings />}/>
    </Routes>
</BrowserRouter>  
  )
}
