import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header"
import SearchTools from "./components/SearchTools"
import Footer from "./components/Footer"

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={SearchTools} />
        <Footer />
      </div>
    </Router>
  )
}
