import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Popup from 'popup-with-react';

class App extends Component {

  clickText1 = (event) => {
    let dialog = new Popup();
    dialog.show({text:'这是一条消息！'});
  }

  clickText2 = (event) => {
    let dialog = new Popup();
    dialog.show({text:'消息类型有：info、success、err', icon:'success'});
  }

  clickText3 = (event) => {
    let dialog = new Popup();
    dialog.show({text:'这是一条2秒后关闭的消息！', timeOut:2000, icon:'err'});
  }

  clickText4 = (event) => {
    let dialog = new Popup();
    dialog.show({text:'这是一条关闭后执行回调的消息', closeCallBack:()=>{
      alert('消息弹窗关闭了！')
    }});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={this.clickText1}>
          点击显示基础弹窗
        </p>
        <p className="App-intro" onClick={this.clickText2}>
          点击显示消息类型(info、success、err)
        </p>
        <p className="App-intro" onClick={this.clickText3}>
          点击显示自动关闭的消息弹窗
        </p>
        <p className="App-intro" onClick={this.clickText4}>
          点击显示关闭后回调的消息弹窗
        </p>
      </div>
    );
  }
}

export default App;
