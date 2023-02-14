import logo from './google-canada.webp';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div >
        <img src={logo} alt="logo"/>
      </div>
      <div>
        <input  id='searchBar' type="text" />
      </div>
      <div>
        <button className='btn'>Google Search</button>
        <button className='btn'>I'm Feeling Lucky</button>
      </div>
      <div >
        <p>Google.ca offererd in: <span id="lang" >{props.language }</span></p>
      </div>
    </div>
  );
}

export default App;   