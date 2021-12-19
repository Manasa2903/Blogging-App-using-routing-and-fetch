<<<<<<< HEAD
import {Route, Switch} from 'react-router-dom'
=======
import { Route, Switch} from 'react-router-dom'
>>>>>>> ccd28e54de8dc6fff5fcfaf47a75cb538fb403b0

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import BlogItemDetails from './components/BlogItemDetails'

import './App.css'

const App = () => (
<<<<<<< HEAD
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blogs/:id" component={BlogItemDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
=======
    <div className="app-container">
      <div className="responsive-container">
        <Header />
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/blogs/:id" component={BlogItemDetails} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
>>>>>>> ccd28e54de8dc6fff5fcfaf47a75cb538fb403b0
)

export default App
