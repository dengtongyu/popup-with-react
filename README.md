# popup-with-react

![popup-with-react](https://raw.githubusercontent.com/dengtongyu/popup-with-react/master/res/popup-with-react.png) 

## 前言
popup-with-react 用react作为模板开发，适用于create-react-app。不兼容低版本IE浏览器。

## 运行
```sh
npm install popup-with-react --dev-save
```

## 用法

### 引入js模块
```js
import Popup from 'popup-with-react';
```

### 调用
```js
let dialog = new Popup();
dialog.show({text:'这是一条消息！'});
```

### 参数
```js
text:string                //显示的文本
icon:string                //消息类型-info，success，err，默认info
timeOut:number             //超时自动关闭的时间，毫秒
closeCallBack:function     //关闭消息弹窗后的回调方法
```

### 实例
```js
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
```