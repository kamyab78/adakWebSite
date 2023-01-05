import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing/Landing'

class App extends Component{
  render(){
    return(
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route exact path='/' component={Landing} />
               
                </Suspense>
            </Router>
    )
}
}

export default App;
