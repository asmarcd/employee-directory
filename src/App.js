import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header"

export default function App() {
  return (
    <Router>
      <div>
      <Header />
      </div>
    </Router>
  )
}
