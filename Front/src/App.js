import React, {Component} from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import addbox from './Components/addbox';
import boxList from './Components/listboxes';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={addbox} />
          <Route exact path='/addbox' component={addbox} />
          <Route exact path='/listboxes' component={boxList} />
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
