import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <CurrencyGroupPair/>
      </div>
    );
  }
}

class AmountInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
          <input type="number" className="amount" value={this.props.value} onChange={this.props.convert}></input>
        </div>
    );
  }
}

class CurrencySelector extends React.Component {
  render() {
    return(
      <div>
        <select><option>GHS</option></select>
      </div>
    );
  }
}

class CurrencyGroup extends React.Component {
  render() {
    return(
      <div className="currency">
          <AmountInput value={this.props.value} convert={this.props.convert}/>
          <CurrencySelector/>
       </div>
    );
  }
}

class CurrencyGroupPair extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Array(2).fill(0),
      exchange_rate: 4.7,
    };
    this.convert = this.convert.bind(this);
  }
  convert() {
    console.log('hi');
    this.setState({value: [0,0]});
  }
  
  render() {
    return(
      <div className="currency">
          <CurrencyGroup value={this.state.value[0]} convert={this.convert}/>
          <CurrencyGroup value={this.state.value[1]} convert={this.convert}/>
       </div>
    );
  }
}

export default App;
