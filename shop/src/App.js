import React, { Component } from 'react';
// import bonaqua from './image/bonaqua.png';
// import snickers from './image/snickers.png';
// import orbit from './image/orbit.png';
//import bon from './image/bon.html';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Table1 from './Components/Table';
import Modal from './Components/mdlConfChoose';
//import { render } from '@testing-library/react';

//function App() {

  //var data = [
  //   {id: 1, picture: bonaqua, name: 'Бонаква', price: '30', quality: '14'},
  //   {id: 2, picture: snickers, name: 'Сникерс', price: '42', quality: '20'},
  //   {id: 3, picture: orbit, name: 'Орбит', price: '24', quality: '36'}
  // ];
  //console.log (typeof(data));

  //const Currency = React.createContext('123');
class App extends Component{  
  constructor(props) {
    super(props);
    this.state = { value: '', shReset: false, value1: '', currency: '', curR: '', money: 0};
    
    this.handleChange = this.handleChange.bind(this);
    this.onChangeSpeed = this.onChangeSpeed.bind(this);
    this.reset = this.reset.bind(this);
    //this.price = 0;
    this.hdReset = this.hdReset.bind(this);
    this.slctChnge = this.slctChnge.bind(this);
  }
  hdReset() {
		this.setState({shReset: false});
	}
  onChangeSpeed(price) {
    let price1 = this.state.value - price;
    //console.log('price1 = ' + price1);
    this.setState({ value: price1})
    //this.price = price1;
    // this.setState({money: this.state.value}) 
    // console.log('money:  '+ this.state.money)
    
  }
  handleChange(event) {
    this.setState({ value: event.target.value }); 
    // this.setState({money: this.state.value}) 
    // console.log('money:  '+ this.state.money)
  }
  reset() {
    if ( this.state.value == 0 ) {
      console.log('нечего выводить')
      this.setState({value: ''});
    } else
    var val = this.state.value; 
    console.log('take your money: ' + this.state.value)
    this.setState({shReset: true});
    this.setState({value1: val})
    this.setState({value: ''});
    var currency = document.getElementById("inGrSel01");
    var value = currency.value;
    console.log(value)
    this.setState({currency: value})
  }
  slctChnge() {
    //console.log('hi');
    
    var curr = document.getElementById("inGrSel01").value;
    //this.setState({money: this.state.value})
    // this.state.money = this.state.value
    // console.log('state.money: '+this.state.money)
    // if ( curr === 'USD') {
    //   // let moneyUSD = this.state.money/60;
    //   // console.log('USD: ' + moneyUSD)
    //   // // let moneyUSD = this.state.money / 60;
    //   // //this.setState({value: moneyUSD})
    //   // this.state.value = moneyUSD
    // } else if ( curr === 'EUR') {
    //   let moneyEUR = this.state.money / 80;
    //   console.log('EUR: '+moneyEUR)
    //   //this.setState({value: moneyEUR})
    // } else if( curr === 'RUB') {
    //   console.log('else RUB'+this.state.money)
    //   //this.setState({value: this.state.money})
    // }
    this.setState({curR: curr});
    // switch (curr) {
    //   case 'RUB':
    //     //console.log('RUB');
    //     // Currency = 'RUB'
    //     this.setState({curR: curr})
    //     break;
    //   case 'USD':
    //     // Currency = 'USD'
    //     //console.log('USD');
    //     this.setState({curR: curr})
    //     break;
    //   case 'EUR':
    //     // Currency = 'EUR'
    //     //console.log('EUR');
    //     this.setState({curR: curr})
    //     break;
    //   default:
    //     console.log('n')
    // }
  }
  render() {
    const mdReset = this.state.shReset ? (
      <Modal>
      <div className="modalGet">
        <div className="modalWindow">
          <div className="modalHeader">
            <div className="modalTitle">
            </div>
            <div className="modalBody">
              <p> {this.state.value1} {this.state.currency}</p>
            
            <div>
            Получите сдачу
            </div>
            </div>
            <div className="modalFooter">
            <button onClick={this.hdReset} className="btn btn-success">Спасибо!
            
            </button>
            </div>
         </div> 
       </div>
     </div>
   </Modal> 
  ) : null;

  return (
    <div className="App">
      <header className="App-header">
        <div className="form-group col-xs-12">
          <div className="input-group mb-3">          
            <select className="custom-select" onChange={this.slctChnge} id="inGrSel01">
              <option value="RUB">RUB</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
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
        {mdReset}
        <p>
          Вендинговый аппарат
        </p>
        <div className="container">
        
          <Table1 data={this.state.value} dataCur={this.state.curR} onChangeSpeed={this.onChangeSpeed}/>
        
        </div>
      
      </header>
      
    </div>
      
    
  );
  }
}

export default App;
