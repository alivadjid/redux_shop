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

    this.reset = this.reset.bind(this);
    
    this.price = 0;
  }

  onChangeSpeed(price) {
    let price1 = this.state.value - price;
    //console.log('price1 = ' + price1);
    this.setState({ value: price1})
    this.price = price1;
  }
  handleChange(event) {
    this.setState({ value: event.target.value }); 
  }
  reset() {
    if ( this.state.value == 0 ) {
      console.log('нечего выводить')
      this.setState({value: ''});
    } else
    console.log('take your money: ' + this.state.value)
    this.setState({value: ''});
  }
  render() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="form-group col-xs-12">
          <div className="input-group mb-3">
            <input type="text" 
            className="form-control" 
            placeholder="Введите значение" 
            aria-label="Recipient's username" 
            aria-describedby="button-addon2"
            value={this.state.value} 
            onChange={this.handleChange}/>
            <div className="input-group-append">
            <button className="btn btn-outline-secondary" 
            type="button" 
            id="button-addon2"
            onClick={this.reset}
            >Сбросить
            </button>
            </div>
          </div>
        </div>

        <div className="mainLine">
          <input type="inputMoney" value={this.state.value} onChange={this.handleChange} className="moneyInput"/>
          <button type="btnReset" className="btn btn-primary" onClick={this.reset}> Сбросить</button>
        </div>
        <p>
          Вендинговый аппарат
        </p>
        <div className="container">
        <Table1 data={this.state.value} onChangeSpeed={this.onChangeSpeed}/>
        </div>
      
      </header>
      
    </div>
      
    
  );
  }
}

export default App;
