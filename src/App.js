import React, { Component } from 'react'
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BubbleSort from './BubbleSort';
import SelectionSort from './SelectionSort';
import BinarySearch from './BinarySearch';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/BubbleSort' exact component={BubbleSort} />
          <Route path='/SelectionSort' exact component={SelectionSort} />
          <Route path='/BinarySearch' exact component={BinarySearch} />
        </Switch>
      </Router>
    )
  }
}

export default App

