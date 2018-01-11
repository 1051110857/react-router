import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { Router, Route, IndexRoute } from 'react-router'
import Main from './components/Main'
import About from './routers/About'
import Home from './routers/Index'
import Other from './routers/Other'
console.log(createBrowserHistory().location.pathname)
class App extends React.Component {
  constructor () {
    super()
  }
  render () {
 
  }
 
}
console.log(createBrowserHistory().location)

ReactDOM.render(
  
 <Router history={createBrowserHistory()}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
       <Route path='other' component={Other} />
      <Route path='about' component={About} />
    </Route>
  </Router>
, document.getElementById('app')) 