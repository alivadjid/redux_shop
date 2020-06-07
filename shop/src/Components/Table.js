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
import ok from '../image/ok.png';
//export default props => (
class Table1 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {shMdConf: false, shMdGet: false}; // окно подтверждение
		//this.state = {shMdGet: false};

		this.shConf = this.shConf.bind(this);
		this.hdConf = this.hdConf.bind(this);

		this.shGet = this.shGet.bind(this);
		this.hdGet = this.hdGet.bind(this);
	}
	// Модальное окно подтверждение
	shConf = (e) => {
		this.setState({shMdConf: true, shMdGet: false});
		this.picture = e.currentTarget.src;
	}
	hdConf() {
		this.setState({shMdConf: false, shMdGet: false});
	}
	// Модальное окно получения
	shGet() {
		this.setState({shMdGet: true});
		
	}
	hdGet() {
		this.setState({shMdConf: false, shMdGet: false});
		
	}

	 render() {
		 console.log('inputMoney: ' + this.props.data);

// Окно получения выбора
		
		 const mdGet = this.state.shMdGet ? (
			<Modal>
				<div className="modalGet">
					<div className="modalWindow">
						<div className="modalHeader">
							<div className="modalTitle">
							</div>
							<div className="modalBody">
								<img src={this.picture} alt="picture" width="100" height="100"/>
							{this.props.children}
							<div>
							Получите Ваш товар
							</div>
							</div>
							<div className="modalFooter">
							<button onClick={this.hdGet} className="yes">
							<img src={ok} alt="ok"/>
							</button>
							</div>
					 </div> 
				 </div>
			 </div>
		 </Modal> 
		) : null;

// Окно подтверждения выбора
		 const mdConf = this.state.shMdConf ? (
			 <Modal>
			 	<div className="modalConf">
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
							 <button onClick={this.shGet} className="yes">
							 <img src={yes} alt="yes"/>
							 	{mdGet}
							 </button>
							 <button onClick={this.hdConf} className="no">
							 <img src={no} alt="no"/>
							 </button>
					 			
				 			</div>
						</div> 
					</div>
				</div>
			</Modal> 
		 ) : null;

	 	return(
			
			<table className="table table-bordered">
				<thead className="thead-dark">
					{mdConf}
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
							<button> <img src={item.picture}  onClick={this.shConf}  alt={item.id} />	</button>
							
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
