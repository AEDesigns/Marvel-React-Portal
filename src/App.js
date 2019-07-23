import React from 'react';
import './App.css';

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
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.apiKickoff = this.apiKickoff.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
      });
    };

  apiKickoff({this.state.input}){

  }
  render() {
    return (
      <div>
        <input value={this.props.input} onChange={this.props.handleChange}/>
        <button className="api-kickoff">Search the Database</button>
      </div>
    );
  }
}

export default App;
