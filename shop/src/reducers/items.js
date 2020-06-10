import bonaqua from '../image/bonaqua.png';
import snickers from '../image/snickers.png';
import orbit from '../image/orbit.png';
import cocaCola from '../image/coca-cola.png';
import twix from '../image/twix.png';

const initialState = [
	{id: 0, picture: bonaqua, name: 'Бонаква', price: '30', quality: '2'},
  {id: 1, picture: snickers, name: 'Сникерс', price: '42', quality: '20'},
	{id: 2, picture: orbit, name: 'Орбит', price: '24', quality: '36'},
	{id: 3, picture: cocaCola, name: 'Coca-Cola', price: '28', quality: '1'},
	{id: 4, picture: twix, name: 'Твикс', price: '45', quality: '23'}
];

// const products = (state, action) => {
// 	switch (action.type) {
// 		case 'ADD_TO_CART':
// 			return {
// 				...state,
// 				quality: state.quality - 1
// 			}
// 		default:
// 			return state
// 	}
// }



// export default function items(state = initialState, action) {
// 	switch (action.type) {
// 		case 'MINUS_QUALITY':
// 		return {
// 			...state,
// 			...action.payload.reduce((obj, product) => {
// 				obj[product.id] = product
// 				return obj
// 			}, {})
// 		}
// 	default:
// 		const { productId} = action
// 		if (productId) {
// 			return {
// 				...state,
// 				[productId]: products(state[productId], action)
// 			}
// 		}
// 	return state;
// 	}
// }

// export default function items(state = initialState, action) {
// 	switch(action.type) {
// 		case 'MINUS_QUALITY':
// 			return state.map( n => n.id === action.payload.id
// 				? {
// 					...n
					
// 				}
// 				: n
// 			);
// 	}
// }
export default function items(state = initialState, action) {
	switch(action.type) {
		case 'MINUS_QUALITY':
			return state.map( n => n.id === +action.payload
				? {
					...n,
					quality: n.quality - 1
					}
					: n)
		
		case 'CUR_PRICE':
			if (action.payload === 'USD') {
				
				return state;

			} else if (action.payload === 'EUR') {
				return state;
			}
		break;
			
		default:
			return state;
		
	}
	// if (action.type === 'MINUS_QUALITY') {
	// 	console.log(action);
	// 	console.log(state);
		
	// 	return state.map( n => n.id === +action.payload
			
	// 		? {
	// 			...n,
	// 			quality: n.quality - 1
	// 			}
	// 			: n
			// Math.max(1, n.quality -1 || 0 ),
			// (n.id === action.payload)
			// ? {
			// 	quality: 100
			// 	}
			// :'ha-ha'
		// )
	// };

}