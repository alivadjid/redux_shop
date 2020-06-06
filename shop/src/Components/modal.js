import React from 'react';
import PropTypes from 'prop-types';
import Portal from './Portal';
import Icon from '../image/orbit.png';
import Button from '../image/ok.png';


const Modal = ({
	title, isOpen, onCancel, onSubmit, children
}) => {

	return (
		<>
		{ isOpen &&
			<Portal>
				<div className="modalOverlay">
					<div className="modalWindow">
						<div className="modalHeader">
							<div className="modalTitle">{title}</div>
							<Icon name="times" onClick={onCancel} />
						</div>
						<div className="modalBody">
							{children}
						</div>
						<div className="modalFooter">
							<Button onClick={onCancel} >Cancel</Button>
							<Button onClick={onSubmit} >Submit</Button>
						</div>
					</div>
				</div>
		</Portal>
		}
		</>
	);
};

Modal.propTypes = {
	title: PropTypes.string,
	isOpen: PropTypes.bool,
	onCancel: PropTypes.func,
	onSubmit: PropTypes.func,
	children: PropTypes.node,
};

Modal.defaultProps = {
	title: 'Modal title',
	isOpent: false,
	onCancel: () => {},
	onSubmit: () => {},
	children: null,
};


export default Modal;
