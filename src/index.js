import React from 'react';
import ReactDOM from 'react-dom';

import Template from './Template';
import './Template.css';

class Popup {
	constructor() {
	    this.pieceTarget = document.createElement('div');
        this.pieceTarget.className = 'popup';
        document.body.appendChild(this.pieceTarget);
	}

	show(data) {
		ReactDOM.render(
		    <Template {...data} depose={() => this.depose()}/>,
		    this.pieceTarget
		);
	}


	depose() {
		ReactDOM.unmountComponentAtNode(this.pieceTarget);
        document.body.removeChild(this.pieceTarget);
	}
}

export default Popup;