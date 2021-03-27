/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
//import Name from './Components/Name'
import Main from './Components/Main';
import { ChakraProvider } from "@chakra-ui/react"
import Webcam from './Webcam';

const Hello = () => {
  return (
    <div>
      <Main/>
      <Webcam/>
    </div>
  );
};

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/" component={Hello} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
