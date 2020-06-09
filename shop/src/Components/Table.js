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
import alert from '../image/alert.png';
//export default props => (
class Table1 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {shMdConf: false, shMdGet: false, shAl: false, shEndQ: false}; // окно подтверждение
		//this.state = {shMdGet: false};

		this.shConf = this.shConf.bind(this);
		this.hdConf = this.hdConf.bind(this);

		this.shGet = this.shGet.bind(this);
		this.hdGet = this.hdGet.bind(this);
		
		
		this.hdAl = this.hdAl.bind(this);

		this.hdEndQ = this.hdEndQ.bind(this);

		this.id = 0;
	}
	// Модальное окно подтверждение
	shConf = (e) => {
		
		let id = e.currentTarget.alt;
		let price = this.props.Item.items[id].price;
		let inputMoney = this.props.data;
		let restMoney = inputMoney - price;
		
		if ( restMoney < 0 ) {
			this.setState({shAl: true})
		} else if ( this.props.Item.items[id].quality === 0) {
			this.setState({shEndQ: true});
		}else {
			this.setState({shMdConf: true});
			this.picture = e.currentTarget.src;
			this.id = e.currentTarget.alt;
			console.log('shConf.id: ' + id)
			console.log('price: '+price);
		}
		//console.log(this.props.Item.items[0]);
		//console.log(e.currentTarget.alt);
	}
	hdConf() {
		this.setState({shMdConf: false, shMdGet: false});
	}
	// Модальное окно получения
	shGet() {
		this.setState({shMdGet: true});
		let id = this.id;
		console.log('Запущена shGet')
		console.log('shGet.id: '+ id)
		//let price = this.props.Item.items[id].price;
		
		this.props.onChangeSpeed(this.props.Item.items[id].price);
		
	}
	hdGet() {
		console.log('hdGetFunc')
		this.setState({shMdGet: false, shMdConf: false});
		this.props.onMinusQuality(this.id)
	}

	hdAl() {
		this.setState({shAl: false});
	}
	hdEndQ() {
		this.setState({shEndQ: false});
	}
	 render() {

		 //console.log('inputMoney: ' + this.props.data);

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
							
							<div>
							Получите Ваш товар
							</div>
							</div>
							<div className="modalFooter">
							<button onClick={this.hdGet} className="btn btn-success">Спасибо!
							
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
				 {mdGet}
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
							 <button onClick={this.shGet} className="btn btn-success">Да</button>
							 <button onClick={this.hdConf} className="btn btn-danger">Нет</button>
				 			</div>
						</div> 
					</div>
				</div>
			</Modal> 
		 ) : null;

		 const mdAl = this.state.shAl ? (
			<Modal>
				<div className="modalAl">
					<div className="modalWindow">
						<div className="modalHeader">
							<div className="modalTitle">
							</div>
							<div className="modalBody">
								<img src={alert} alt="picture" width="100" height="100"/>
							<div>
							Недостаточно средств.
							</div>
							</div>
							<div className="modalFooter">
							<button onClick={this.hdAl} className="btn btn-warning">Понял!
							
							</button>
							</div>
					 </div> 
				 </div>
			 </div>
		 </Modal> 
		) : null;

		 const mdEndQ = this.state.shEndQ ? (
			<Modal>
				<div className="modalEndQ">
					<div className="modalWindow">
						<div className="modalHeader">
							<div className="modalTitle">
							</div>
							<div className="modalBody">
								<img src={alert} alt="picture" width="100" height="100"/>
							<div>
							<p>Выбранный продукт закончился. </p>
							<p>Выберите другой.</p>
							</div>
							</div>
							<div className="modalFooter">
							<button onClick={this.hdEndQ} className="btn btn-info">Ок</button>
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
					{mdAl}
					{mdEndQ}
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
						<td>{item.id + 1}</td>
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
	 dispatch => ({
		 onMinusQuality: (id) => {
			 dispatch({ type: 'MINUS_QUALITY', payload: id})
		 }
	 })
 )(Table1);
