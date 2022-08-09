import React, { Component } from 'react';
import './App.css';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: null,
      isLoading: false
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    fetch('http://localhost:3001/api/v1/urls')
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        this.setState({error: 'There has been an error, please try again.'})
        console.log("Error")
      }
    })
    .then(data => {
      console.log(data)
      this.setState({
          urls: data.urls,
          isLoading: false,
      })
    })
    .catch(error => {
      this.setState({
        error: error.message,
      })
      console.log("Error")
    })
  }

  addUrl = (newUrl) => {
    // this.setState({ urls: [...this.state.urls, newUrl]})

    this.setState({ isLoading: true })
    fetch('http://localhost:3001/api/v1/urls', {
      method: 'POST',
      body: JSON.stringify(newUrl),
      headers: { "Content-type": 'application/json' },
  })
  alert("Thank You!")
  this.getData()
  }

  render() {
    console.log(this.state)
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl}/>
        </header>

        {this.state.urls && <UrlContainer urls={this.state.urls}/>}
      </main>
    );
  }
}

export default App;
