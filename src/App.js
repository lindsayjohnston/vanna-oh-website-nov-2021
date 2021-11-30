import React from 'react';
import './App.css';
import MainBodyLandscape from "./components/landscape/MainBodyLandscape/MainBodyLandscape.js";
import MainBodyPortrait from './components/portrait/MainBodyPortrait/MainBodyPortrait';

const screen = window.screen;

class App extends React.Component {

  state = {
    screenOrientation: window.screen.orientation.type,
    pages:  [ 
      {id: 1, title: "about", content: "ABOUT -Lorem Ipsum – Generator, Origins and Meaninghttps://loremipsum.io Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging ..." },
      {id: 2, title: "music", content: "music -Lorem Ipsum – Generator, Origins and Meaninghttps://loremipsum.io Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging ..." },
      
    ] 
  }

  constructor(props) {
    super(props);
    this.setScreenOrientation = this.setScreenOrientation.bind(this);
  }

  setScreenOrientation = () => {
    this.setState({
      screenOrientation: window.screen.orientation.type
    })
  }

  componentDidMount() {
    screen.orientation.addEventListener("change", this.setScreenOrientation);
  }

  render() {

    let appBody = null;

    if (this.state.screenOrientation === "landscape-primary" || this.state.screenOrientation === "landscape-secondary") {
      appBody = <MainBodyLandscape />
    } else {
      appBody = <MainBodyPortrait pages={this.state.pages}/>
    }

    return (
      <div className="App">
        <div className="titleContainerPortrait">
          <h1 className="titlePortrait"> vanna oh! </h1>
        </div>
        {appBody}
      </div>

    )
  }
}

export default App;
