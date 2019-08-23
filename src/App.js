import React from 'react';
import './App.css';
import CustomCard from './components/Card';
import Checkboxes from '../src/components/Checkbox';
import AvengersLogo from './components/Logo'
const createMarvelString = (baseUrl, endpoint, inputValue, myApiKey) => baseUrl + endpoint + encodeURI(inputValue) + myApiKey
const baseURL = "https://gateway.marvel.com/v1/public/"
const myApiKey = "&apikey=6d1f112aae8581fdaca4b89efca28a99";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Marvel Search Engine 2.0',
      inputValue: '',
      eventsApi: [],
      comicsApi: [],
      charactersApi: [],
      loaderImg: false
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
    this.setState({
      loaderImg: true
    })
    fetch(marvelEvents)
      .then((res) => {
        return res.json()
      })
      .then(res => {
        this.setState({
          eventsApi: res.data.results,
          loaderImg: false
        });
        //fix fetch to only accept what I want to accept (events, comics, characters)
      })
      .catch((err) => {
        this.setState({
          loaderImg: false
        })
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
        <div class="row">
          <div className="col-2">
            <AvengersLogo />
          </div>
          <div className="col-7">
            <h1 className="App-header-1">{this.state.title}</h1>
          </div>
          <div className="col-3"></div>
        </div>
        <div className="do-it-all">
          <form>
            <input className="Marvel-Input" type="text" value={this.state.inputValue} onChange={this.handleChange} placeholder="With Great Power..." />
            <button className="api-kickoff Marvel-Input" type="submit" onClick={this.handleSubmit}>Search The Multiverse</button>
          </form>
          <Checkboxes />
        </div>
        <h2 className='App-header-2 app-head-2 api-header'>Marvel Characters</h2>
        <div class="row">
          {this.state.charactersApi.map((e, index) => {
            return <CustomCard key={index} title={e.title} img={e.thumbnail.path} body={e.description} />
          })}
        </div>
        <h2 className="App-header-3 app-head-3 api-header">Marvel Events</h2>
        <div class="row">
          {this.state.eventsApi.map((e, index) => {
            return <CustomCard key={index} title={e.title} img={e.thumbnail.path} body={e.description} />
          })}
        </div>
        <h2 className="App-header-4 app-head-4 api-header">Marvel Comics</h2>
        <div class="row">
          {this.state.comicsApi.map((e, index) => {
            return <CustomCard key={index} title={e.title} img={e.thumbnail.path} body={e.description} />
          })}
        </div>
        <footer>
          <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </footer>
      </div >
    )
  }
}


export default App;
