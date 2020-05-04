import React from 'react';
import ReactDOM from 'react-dom';
import HomeScreen from './components/screens/HomeScreen.js'

const element = <h1>My first header!!</h1>;
console.log(element);

ReactDOM.render(<HomeScreen/>, document.getElementById('root'));  