import React from 'react';
import './App.css';
import CustomCard from './components/Card';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Marvel Search Engine 2.0',
      inputValue: '',
      eventsApi: [],
      comicsApi: [],
      charactersApi: []
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
      apiKickOff(this.state.inputValue);
      event.preventDefault();
    }
  render(){
    return(
      <div>
        <h1 className="App-header">{this.state.title}</h1>
        <div className="do-it-all">
          <form>
            <input type="text" value={this.state.inputValue} onChange={this.handleChange} placeholder="With Great Power..."/>
            <button className="api-kickoff" type="submit" onClick={this.handleSubmit}>Search The Multiverse</button>
          </form>
        </div>
        {this.state.eventsApi.map((e, index) => <CustomCard key={index} title={'ass'} img='https://via.placeholder.com/300x150' body={'cory'}/>)}
      </div>
    )
  }
}

const createMarvelString = (baseUrl, endpoint, inputValue, myApiKey) => baseUrl + endpoint + encodeURI(inputValue) + myApiKey
const baseURL = "https://gateway.marvel.com/v1/public/"
const myApiKey = "&apikey=6d1f112aae8581fdaca4b89efca28a99";

function apiKickOff(inputValue){
  var marvelEvents = createMarvelString(baseURL, "events?nameStartsWith=", inputValue, myApiKey);
  fetch(marvelEvents)
  .then((res) => {
    return res.json()
  })
  .then(res => {
    console.log(res.data.results)
    const eventsResults = res.data.results;
    this.setState({
    })
  })
  .catch((err) => {
    console.log(err);
});

}

export default App;
