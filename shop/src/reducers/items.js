import bonaqua from '../image/bonaqua.png';
import snickers from '../image/snickers.png';
import orbit from '../image/orbit.png';
import cocaCola from '../image/coca-cola.png';
import twix from '../image/twix.png';

const initialState = [
	{id: 0, picture: bonaqua, name: 'Бонаква', price: '30', quality: '14'},
  {id: 1, picture: snickers, name: 'Сникерс', price: '42', quality: '20'},
	{id: 2, picture: orbit, name: 'Орбит', price: '24', quality: '36'},
	{id: 3, picture: cocaCola, name: 'Coca-Cola', price: '28', quality: '15'},
	{id: 4, picture: twix, name: 'Твикс', price: '45', quality: '23'}
];

export default function items(state = initialState) {
	
	return state;
}