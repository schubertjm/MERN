import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './App.css';
import Form from './components/Form'
import APIResult from './components/APIResult'

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Star Wars API</h1>
        <div className="flex">
          <Form></Form>
        </div>
        <hr/>
          <Switch>
            <Route exact path = "/:type/:id">
              <APIResult></APIResult>
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
