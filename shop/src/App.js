import React, { Component } from 'react';
// import bonaqua from './image/bonaqua.png';
// import snickers from './image/snickers.png';
// import orbit from './image/orbit.png';
//import bon from './image/bon.html';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Table1 from './Components/Table';
//import { render } from '@testing-library/react';

//function App() {

  //var data = [
  //   {id: 1, picture: bonaqua, name: 'Бонаква', price: '30', quality: '14'},
  //   {id: 2, picture: snickers, name: 'Сникерс', price: '42', quality: '20'},
  //   {id: 3, picture: orbit, name: 'Орбит', price: '24', quality: '36'}
  // ];
  //console.log (typeof(data));
class App extends Component{  
  constructor(props) {
    super(props);
    this.state = { value: ''};
    this.handleChange = this.handleChange.bind(this);

    this.onChangeSpeed = this.onChangeSpeed.bind(this);

    
  }

  onChangeSpeed(price) {
    let price1 = this.state.value - price;
    //console.log('price1 = ' + price1);
    this.setState({ value: price1})
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    
  }
  render() {

  return (
    <div className="App">
      <header className="App-header">
        <input type="inputMoney" value={this.state.value} onChange={this.handleChange} className="moneyInput"/>
        
        <p>
          Вендинговый аппарат
        </p>
        < div className="container">
        <Table1 data={this.state.value} onChangeSpeed={this.onChangeSpeed}/>
        </div>
      
      </header>
      
      </div>
      
    
  );
  }
}

export default App;
