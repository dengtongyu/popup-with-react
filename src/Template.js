import React, { Component } from 'react';

import './Template.css';

let setTimeId = 0;

class Template extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text || '',
            //keep: this.props.keep || false,
            timeOut: this.props.timeOut || 0,
            icon: this.props.icon || 'info',
            panelWidth: 0,
            panelHeight: 0,
            closeCallBack: this.props.closeCallBack || null
        };
    }

    componentDidMount() {
        this.setAlertSize();
    }


    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    setAlertSize = () => {
        if(this.refs.panel) {
            if(this.state.panelWidth !== this.refs.panel.offsetWidth || this.state.panelHeight !== this.refs.panel.offsetHeight) {
                this.setState({
                    panelWidth: this.refs.panel.offsetWidth,
                    panelHeight: this.refs.panel.offsetHeight
                });
            }

	        if(this.state.timeOut > 0) {
	            this.setTimeId = setTimeout(()=>{
	                this.closeMassge();
	            },this.state.timeOut);
	        }
        }
    }

    closeMassge = (event) => {
        clearTimeout(this.setTimeId);

        this.props.depose();
        
        if(this.state.closeCallBack) this.state.closeCallBack();
    }

    iconType = (type) => {
        if(type === 'info') {
            return (
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3939" xlinkHref="http://www.w3.org/1999/xlink" width="30" height="30"><defs><style type="text/css"></style></defs><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" p-id="3940" fill="#ffffff"></path><path d="M512 336m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" p-id="3941" fill="#ffffff"></path><path d="M536 448h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" p-id="3942" fill="#ffffff"></path></svg>
            );
        }
        if(type === 'err') {
            return (
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3761" xlinkHref="http://www.w3.org/1999/xlink" width="30" height="30"><defs><style type="text/css"></style></defs><path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 0.3L512 465.6l-99.3-118.4-66.1-0.3c-4.4 0-8 3.5-8 8 0 1.9 0.7 3.7 1.9 5.2l130.1 155L340.5 670c-1.2 1.5-1.9 3.3-1.9 5.2 0 4.4 3.6 8 8 8l66.1-0.3L512 564.4l99.3 118.4 66 0.3c4.4 0 8-3.5 8-8 0-1.9-0.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" p-id="3762" fill="#ffffff"></path><path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" p-id="3763" fill="#ffffff"></path></svg>
            );
        }

        if(type === 'success') {
            return (
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3583" xlinkHref="http://www.w3.org/1999/xlink" width="30" height="30"><defs><style type="text/css"></style></defs><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8c12.7 17.7 39 17.7 51.7 0l210.6-292c3.9-5.3 0.1-12.7-6.4-12.7z" p-id="3584" fill="#ffffff"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" p-id="3585" fill="#ffffff"></path></svg>
            );
        }
    }

    render() {
         return (
            <div className="alert-panel" 
                ref="panel" 
                style={{
                    marginLeft:-this.state.panelWidth/2,
                    marginTop:-this.state.panelHeight/2}}>
                <div className="alert-icon-box">
                    {this.iconType(this.state.icon)}
                </div>
                <div className="alert-massge">{this.state.text}</div>
                <div className="alert-icon-close" onClick={this.closeMassge}>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4118" xlinkHref="http://www.w3.org/1999/xlink" width="30" height="30"><defs><style type="text/css"></style></defs><path d="M563.8 512l262.5-312.9c4.4-5.2 0.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9c-4.4 5.2-0.7 13.1 6.1 13.1h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" p-id="4119" fill="#ffffff"></path></svg>
                </div>
            </div>
        );
        
    }
}

export default Template;