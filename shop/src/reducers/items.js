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

function parseXML(xmlString) {
	var parser = new DOMParser();
	var docError = parser.parseFromString('INVALID', 'text/xml');
	var parsererrorNS = docError.getElementsByTagName("parsererror")[0].namespaceURI;
	var doc = parser.parseFromString(xmlString,'text/xml');
	if (doc.getElementsByTagNameNS(parsererrorNS, 'parsererror').length>0) {
		throw new Error('Error parsing XML');
	}
	return doc;
	
}

function getCurrency(curName) {
	let valuteValue = 60;
	axios
    .get('https://www.cbr-xml-daily.ru/daily_utf8.xml')
    .then(response => {
      let a = response.data
      try {
      //XMLDocumetn object
      var doc = parseXML(a);
      } catch (e) {
      console.log(e)
      return;
      }
      //Element object 
      var rootElement = doc.documentElement;
      var children = rootElement.childNodes;
      for(var i=0; i< children.length; i++) {
      	var child = children[i];
        if(child.nodeType == Node.ELEMENT_NODE) {
        	if (child.attributes.ID.textContent === curName) {
						console.log(child.getElementsByTagName("Value")[0].textContent);
						valuteValue = child.getElementsByTagName("Value")[0].textContent;
						
          }
        }
      }
		})
		return valuteValue;
		
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
					price: Number(initialState[n.id].price /getCurrency('R01235')).toFixed(2)
				}
				:n);
		case 'EUR':
			return state.map( n => n.price !== 0
				? {
					...n,
					price: Number(initialState[n.id].price /getCurrency('R01239')).toFixed(2)
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