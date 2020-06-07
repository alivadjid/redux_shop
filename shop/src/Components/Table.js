import React from 'react';
import { connect } from 'react-redux';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
//
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Table.css'
import Modal from './mdlConfChoose';
//import items from '../reducers/items';
import modal from './modal'
import yes from '../image/yes.png';
import no from '../image/no.png';

//export default props => (
class Table1 extends React.Component {
	constructor(props) {
		super(props);
		this.chooseItem = this.chooseItem.bind(this);

		this.state = {showModal: false};

		this.handleShow = this.handleShow.bind(this);
		this.handleHide = this.handleHide.bind(this);
	}
	// Модальное окно
	handleShow = (e) => {
		
		this.setState({showModal: true});
		
		this.picture = e.currentTarget.src;
		
		// console.log(this.props.Item.items.map(item => (
		// 	item.id
		// )));
	}

	handleHide() {
		this.setState({showModal: false});
	}

	// выбор товара
	chooseItem = (e) => {
		console.log(e.currentTarget.id);

	}

	 render() {
		 console.log('inputMoney: ' + this.props.data);
		 	
		 //Модальное окно modal
		 
		 const modal = this.state.showModal ? (
			 <Modal>
			 	<div className="modalOverlay">
			 		<div className="modalWindow">
				 		<div className="modalHeader">
					 		<div className="modalTitle">
				 			</div>
							 <div className="modalBody">
							 	<img src={this.picture} alt="picture" width="100" height="100"/>
							 {this.props.children}
							 <div>
							 Вы выбрали этот товар?
							 </div>
				 			</div>
				 			<div className="modalFooter">
							 <button onClick={this.handleHide} className="yes">
							 <img src={yes} alt="yes"/>
							 </button>
							 <button onClick={this.handleHide} className="no">
							 <img src={no} alt="no"/>
							 </button>
					 			
				 			</div>
						</div> 
					</div>
				</div>
			</Modal> 
		 ) : null;
		// 		 <div className="modal">
		// 			 <div>
		// 				 Вы выбрали этот товар?
		// 			 </div>
					 
					 
		// 			 <button onClick={this.handleHide}>
		// 				<img src={yes} alt="yes"/>
		// 			 </button>
		// 		 </div>
		// 	 </Modal>
		//  ) : null;

		//console.log(this.props.Item);
	 	return(
			
			<table className="table table-bordered">
				<thead className="thead-dark">
					{modal}
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
						<td>
							<button> <img src={item.picture}  onClick={this.handleShow}  alt={item.id} />	</button>
							
						</td>
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
