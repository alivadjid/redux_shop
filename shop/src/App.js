import React, { Component } from 'react';
import logo from './image/logo.svg';
import bonaqua from './image/bonaqua.png';
import snickers from './image/snickers.png';
import orbit from './image/orbit.png';
//import bon from './image/bon.html';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Table1 from './Components/Table';
//import { render } from '@testing-library/react';

//function App() {

  var data = [
    {id: 1, picture: bonaqua, name: 'Бонаква', price: '30', quality: '14'},
    {id: 2, picture: snickers, name: 'Сникерс', price: '42', quality: '20'},
    {id: 3, picture: orbit, name: 'Орбит', price: '24', quality: '36'}
  ];
  console.log (typeof(data));
class App extends Component{  
  
  myfunction() {
    console.log('Clicked')
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Basic Table
        </p>
        < div className="container">
        <Table1 data={data} />
        </div>
        
        
        
       
      
      </header>
      
      </div>
    
  );
  }
}

export default App;
