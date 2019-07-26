import React from 'react';
import './App.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

const createMarvelString = (baseUrl, endpoint, {inputValue}, myApiKey) => baseUrl + endpoint + encodeURI(inputValue) + myApiKey
const baseURL = "https://gateway.marvel.com/v1/public/";
const myApiKey = "&apikey=6d1f112aae8581fdaca4b89efca28a99";

const marvelEvents = createMarvelString(baseURL, "events?nameStartsWith=", {inputValue}, myApiKey);
const marvelComics = createMarvelString(baseURL, "comics?titleStartsWith=", {inputValue}, myApiKey);
const marvelCharacters = createMarvelString(baseURL, "characters?nameStartsWith=", {inputValue}, myApiKey);

let FetchMarvelEvents = function fetchMarvelEvents(input){
  fetch(marvelEvents)
  .then((res) =>{
    return res.json()
  })
  .then(res => {
    
  })
}
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Marvel Search Engine 2.0',
    };
  }
  render(){
    return(
      <div>
        <h1 className="App-header">{this.state.title}</h1>
        <div className="do-it-all">
          <InputKickoff className="api-input"/>
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
