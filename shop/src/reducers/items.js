import bonaqua from '../image/bonaqua.png';
import snickers from '../image/snickers.png';
import orbit from '../image/orbit.png';
import cocaCola from '../image/coca-cola.png';
import twix from '../image/twix.png';
import axios from  'axios';

const initialState = [
	{id: 0, picture: bonaqua, name: 'Бонаква', price: '30', quality: '2'},
  {id: 1, picture: snickers, name: 'Сникерс', price: '42', quality: '20'},
	{id: 2, picture: orbit, name: 'Орбит', price: '24', quality: '36'},
	{id: 3, picture: cocaCola, name: 'Coca-Cola', price: '28', quality: '1'},
	{id: 4, picture: twix, name: 'Твикс', price: '45', quality: '23'}
];





function getCurrency() {
	axios.get('https://www.cbr-xml-daily.ru/daily_utf8.xml')
    .then(response => (this.info = response.data));
    console.log(this.info);
    const parser = new DOMParser();
    let xmlDoc = parser.parseFromString(this.info, "text/xml")
    console.log(xmlDoc)
    let USD = xmlDoc.getElementById("R01235")
    console.log(USD)
}

export default function items(state = initialState, action) {
	switch(action.type) {
		case 'MINUS_QUALITY': 
			return state.map( n => n.id === +action.payload
				? {
					...n,
					quality: n.quality - 1
					}
					: n)
		case 'USD':
			return state.map( n => n.price !== 0 
				?	{
					...n,
					price: Number(initialState[n.id].price /60).toFixed(2)
				}
				:n);
		case 'EUR':
			return state.map( n => n.price !== 0
				? {
					...n,
					price: Number(initialState[n.id].price /80).toFixed(2)
				}
				:n);
		case 'RUB':
			return state.map( n => n.price !==0 
				? {
					...n,
					price: initialState[n.id].price
				}
				:n);
		default:
			return state;
	}
}