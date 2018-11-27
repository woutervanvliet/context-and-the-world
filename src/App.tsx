import React, { Component } from 'react';
import './App.css';

import Clock from './clock';
import RelativeDate from './relative-date'
import World from "./world";
import Country from "./country";
import Area from "./area";

class App extends Component {
  render() {
    return (
	  <World>
		  <Area timezoneOffset={0}>
			  <Country name={"Denmark"}>
				  <Clock />
			  </Country>
		  </Area>
		  <Area timezoneOffset={-Math.PI}>
			  <Country name={"Krakozia"}>
				  <Clock />
			  </Country>
		  </Area>
		  <RelativeDate />
	  </World>
    );
  }
}

export default App;
