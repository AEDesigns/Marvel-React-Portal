import React from 'react';
import './App.css';
import CustomCard from './components/Card';
import Checkboxes from '../src/components/Checkbox';
const createMarvelString = (baseUrl, endpoint, inputValue, myApiKey) => baseUrl + endpoint + encodeURI(inputValue) + myApiKey
const baseURL = "https://gateway.marvel.com/v1/public/"
const myApiKey = 1234569;


class App extends React.Component {
  constructor(props) {
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
  handleSubmit(event) {
    this.fetchInput(this.state.inputValue);
    event.preventDefault();
  }
  fetchInput(input) {
    const marvelEvents = createMarvelString(baseURL, "events?nameStartsWith=", input, myApiKey);
    const marvelComics = createMarvelString(baseURL, "comics?titleStartsWith=", input, myApiKey);
    const marvelCharacters = createMarvelString(baseURL, "characters?nameStartsWith=", input, myApiKey);
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
    fetch(marvelComics)
      .then((res) => {
        return res.json()
      })
      .then(res => {
        this.setState({
          comicsApi: res.data.results
        });
        //fix fetch to only accept what I want to accept (events, comics, characters)
      })
      .catch((err) => {
        console.log(err)
      });
    fetch(marvelCharacters)
      .then((res) => {
        return res.json()
      })
      .then(res => {
        this.setState({
          charactersApi: res.data.results
        });
        //fix fetch to only accept what I want to accept (events, comics, characters)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  render() {
    return (
      <div>
        <h1 className="App-header-1">{this.state.title}</h1>
        <div className="do-it-all">
          <form>
            <input className="Marvel-Input" type="text" value={this.state.inputValue} onChange={this.handleChange} placeholder="With Great Power..." />
            <button className="api-kickoff Marvel-Input" type="submit" onClick={this.handleSubmit}>Search The Multiverse</button>
          </form>
          <Checkboxes />
        </div>
        <h2 className="App-header-2 api-header">Marvel Characters</h2>
        <div class="row">
          {this.state.charactersApi.map((e, index) => {
            return <CustomCard key={index} title={e.title} img={e.thumbnail.path} body={e.description} />
          })}
        </div>
        <h2 className="App-header-2 api-header">Marvel Events</h2>
        <div class="row">
          {this.state.eventsApi.map((e, index) => {
            return <CustomCard key={index} title={e.title} img={e.thumbnail.path} body={e.description} />
          })}
        </div>
        <h2 className="App-header-2 api-header">Marvel Comics</h2>
        <div class="row">
          {this.state.comicsApi.map((e, index) => {
            return <CustomCard key={index} title={e.title} img={e.thumbnail.path} body={e.description} />
          })}
        </div>
      </div>
    )
  }
}


export default App;
