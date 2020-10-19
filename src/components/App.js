import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let cities = ["Goa", "Lonavala", "Darjeeling"];
    return (
      <>
        <ol>
          {cities.map((city, index) => {
            return <li key={"location" + (index + 1)}>{city}</li>;
          })}
        </ol>
      </>
    );
  }
}

export default App;
