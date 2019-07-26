import React from 'react';
import './App.css';
import './config.js';
import './helper';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Marvel Search Engine 2.0'
    };
  }
  render(){
    return(
      <div>
        <h1 className="App-header">{this.state.title}</h1>
        <div className="do-it-all">
          <InputKickoff className="api-input" input={this.state.inputValue} handleChange={this.handleChange}/>
        </div>
      </div>
    )
  }
}

class InputKickoff extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
      });
    };
    handleSubmit(event){
      console.log(this.state.inputValue);
      event.preventDefault();
    }
  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} placeholder="With Great Power..."/>
          <button className="api-kickoff" type="submit" onClick={this.handleSubmit}>Search The Multiverse</button>
        </form>
      </div>
    );
  }
}

export default App;
