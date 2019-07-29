import React from 'react';
import './App.css';
import CustomCard from './components/Card';
const createMarvelString = (baseUrl, endpoint, inputValue, myApiKey) => baseUrl + endpoint + encodeURI(inputValue) + myApiKey
const baseURL = "https://gateway.marvel.com/v1/public/"
const myApiKey = "&apikey=6d1f112aae8581fdaca4b89efca28a99";

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
      this.fetchInput(this.state.inputValue);
      event.preventDefault();
    }
    fetchInput(input){
      var marvelEvents = createMarvelString(baseURL, "events?nameStartsWith=", input, myApiKey);
      fetch(marvelEvents)
      .then((res) => {
        return res.json()
      })
      .then(res => {
        this.setState({
          eventsApi: res.data.results
        });
        //fix fetch to only accept what I want to accept (events, comics, characters)
      })
      .catch((err) => {
        console.log(err)
      });
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
        {this.state.eventsApi.map((e, index) => 
        {
          console.log(e)
          return <CustomCard key={index} title={e.title} img={e.thumbnail.path}  body={e.description}/>
          })}
      </div>
    )
  }
}


export default App;
