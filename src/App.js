import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header"
import SearchTools from "./components/SearchTools"

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={SearchTools} />
      </div>
    </Router>
  )
}
