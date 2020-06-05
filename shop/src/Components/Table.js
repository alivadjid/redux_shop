import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
//
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Table.css'
import bonaqua from '../image/bonaqua.png';

export default props => (
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
		{ props.data.map(item => (
				<tr key={item.id}>
					<td>{item.id}</td>
					<td><button><img src={item.picture} alt="aqua"  /></button></td>
					<td>{item.name}</td>
					<td>{item.price}</td>
					<td>{item.quality}</td>
				</tr>
		))}
  </tbody>
</table>
)
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