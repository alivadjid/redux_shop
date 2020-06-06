import bonaqua from '../image/bonaqua.png';
import snickers from '../image/snickers.png';
import orbit from '../image/orbit.png';

const initialState = [
	{id: 1, picture: bonaqua, name: 'Бонаква', price: '30', quality: '14'},
  {id: 2, picture: snickers, name: 'Сникерс', price: '42', quality: '20'},
  {id: 3, picture: orbit, name: 'Орбит', price: '24', quality: '36'}
];

export default function items(state = initialState) {
	
	return state;
}