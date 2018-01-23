import "./index.css"
import App from "./components/App"
import Home from "./components/Home"
import Projects from "./components/ProjectsContainer"
import { Router, Route, hashHistory, IndexRoute } from "react-router"
import React from "react"
import ReactDOM from "react-dom"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/projects" component={Projects} />
    </Route>
  </Router>,
  document.getElementById("root")
)
registerServiceWorker()
