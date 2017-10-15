import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Account from './Account';

import request from 'superagent';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sum: -1,
      next: -1
    }
  }

  componentWillMount() {
    request
    .get('/api/data')
    .set('accept', 'json')
    .end((err, res) => {
      
      this.setState({
        sum: Math.round(res.body[0].distanceTo1337,0),
        next: Math.round(res.body[1].distanceTo1337,0)
      })
    });
  }

  render() {

    let response = "";
    if (this.state.sum === 0) {
      response = "WOW! Du er kontoens 1337-mester, GODT JOBBET!";
    } else if (this.state.sum < 10) {
      response = "Nesten 1337! Skikkelig bra.";
    } else if (this.state.sum < 50) {
      response = "Ikke langt unna, imponert!";
    } else if (this.state.sum < 100) {
      response = "Et lite stykke fra, men skal ikke mye til for å nå toppen!";
    } else if (this.state.sum < 500) {
      response = "Du er inne på noe, men du er et stykke fra.";
    } else if (this.state.sum < 1000) {
      response = "Du må nok jobbe hardere for å være i nærheten av the awesomeness!";
    } else if (this.state.sum < 10000) {
      response = "Du er et godt stykke unna.";
    } else  {
      response = "Du er milesvis unna å være 1337. Prøv hardere!";
    }

    return (
      <div className="App">
        <p className="App__Header__text">Kroner fra 1337</p>
        <div className="App__Sum">{this.state.sum != -1 ? `${this.state.sum} kr` : 'Laster'} </div>
        <p className="App__Status">{this.state.sum != -1 ? response : ''}</p>
        <p className="App__Explanation">Forklaring: Tallet viser den konto som er nærmest summen 1337 kroner av dine bruks- og sparekontoer</p>
        <p className="App__Status">Neste beste konto: {this.state.next != -1 ? `${this.state.next} kr` : 'Laster'}</p>
        <p className="App__Footer">Ⓒ Tobias Rusås Olsen - 2017</p>
      </div>
    );
  }
}

export default App;
