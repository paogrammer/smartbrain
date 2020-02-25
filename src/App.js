import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: '5f9a751b73934248a5d33afc002fe3ee'
});

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict("5f9a751b73934248a5d33afc002fe3ee", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );
  }

  render() {
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
         />
        
        <Navigation />
         <Logo />
         <Rank />
         <ImageLinkForm 
         onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        { /*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
