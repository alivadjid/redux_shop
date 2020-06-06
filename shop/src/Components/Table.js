import React from 'react';
import { connect } from 'react-redux';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
//
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Table.css'
//import items from '../reducers/items';


//export default props => (
class Table1 extends React.Component {
	// constructor(props) {
	// super(props);
	// this.wrapper = React.createRef();
	// }
	myfunction() {
		console.log('push');
	}
	 render() {
		console.log(this.props.Item);
	 	return(
			<table className="table table-bordered">
  			<thead className="thead-dark">
    			<tr>
      			<th scrope="col">#</th>
      			<th>Товар</th>
						<th>Название</th>
						<th>Цена</th>
						<th>Количество</th>
    			</tr>
  			</thead>
				<tbody>
				{ this.props.Item.items.map(item => (
					<tr key={item.id}>
						<td>{item.id}</td>
						<td><button><img src={item.picture} alt="aqua" onClick={this.myfunction} /></button></td>
						<td>{item.name}</td>
						<td>{item.price}</td>
						<td>{item.quality}</td>
					</tr>
				))}
				</tbody>
			</table>
			
		)
		}
 }
 export default connect(
	 state =>({
		 Item: state,

	 }),
	 dispatch => ({})
 )(Table1);
//)
// class Table1 extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.wrapper = React.createRef();
// 	}
// 	render() {
// 		return (
// 			<div ref={this.wrapper}>{this.props.children}
			
// 				<BootstrapTable data={this.props.data}>
// 					<TableHeaderColumn isKey dataField='id'>
// 					ID
// 					</TableHeaderColumn>
// 					<TableHeaderColumn dataField='name'>
// 					Name
// 					</TableHeaderColumn>
// 					<TableHeaderColumn dataField='value'>
// 					Value
// 					</TableHeaderColumn>
// 				</BootstrapTable>	
			
// 				</div>

// 		);
// 	}
// }

// export default Table1;






// export default class Table1 extends React.Component {
// 	static propTypes = {
// 		name: React.PropTypes.string,
// 	};

// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		return (
// 			<div> </div>
// 		)
// 	}
// }