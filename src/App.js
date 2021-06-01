import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Table from './components/Table'
import Character from './components/Character'

function App() {
  return (
    <div className="container-fluid">
      <Navbar />

      <main className="row my-5 justify-content-center">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/table">
            <Table/>
          </Route>
          <Route path="/about" component={About}/>
          <Route path="/:id" component={Character}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
