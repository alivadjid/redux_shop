import React from 'react';
import { connect } from 'react-redux';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
//
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Table.css'
import Modal from './mdlConfChoose';
//import items from '../reducers/items';
import modal from './modal'


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
	handleShow() {
		
		this.setState({showModal: true});
		//console.log(e.currentTarget.id);
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

				 <div className="modal">
					 <div>
						 With a portal, we can render content into a different 
						 part of the DOM, as if it were any other React child.
					 </div>
					 
					 This is being renderred indeise the #modal-container div.
					 <button onClick={this.handleHide}>Hide modal</button>
				 </div>
			 </Modal>
		 ) : null;
		 
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
							<button id={item.id} onClick={this.handleShow}>
								<img src={item.picture} alt={item.id} />
							</button>
							
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
