import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header"
import SearchResults from './components/SearchResults';
import SearchTools from "./components/SearchTools"

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={SearchTools} />
        <br />
        <Route exact path="/" component={SearchResults} />
      </div>
    </Router>
  )
}
