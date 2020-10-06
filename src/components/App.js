import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
           <>
		<ol>
			<li key="location1" >Goa</li>
			<li key="location2" >Lonavala</li>
			<li key="location3" >Tokyo</li>
			<li key="location4" >Amsterdam</li>
			<li key="location5" >New York</li>
			<li key="location6" >Darjeeling</li>
		</ol>
	</>
        )
    }
}


export default App;
