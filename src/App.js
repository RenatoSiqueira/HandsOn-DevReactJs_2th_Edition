import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Common/Header'
import Footer from './Common/Footer'
import Error404 from './Common/Error404'

import Home from './Sections/Home'
import Sobre from './Sections/Sobre'
import Contato from './Sections/Contato'
import Campanhas from './Sections/Campanhas'
import Login from './Sections/Login'

import Admin from './Admin/Index'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/campanhas" component={Campanhas} />
          <Route path="/contato" component={Contato} />
          <Route path="/admin" component={Admin} />
          <Route path='/login' component={Login} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
      </Router>
    )
  }
}

export default App