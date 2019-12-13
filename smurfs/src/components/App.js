import React, { Component } from "react";
import "./App.css";
// import { SmurfContext } from './contexts/SmurfContext'; 
import { connect } from 'react-redux';
import { getSmurf, postSmurf } from '../actions'; 

class App extends Component {
  
  render(props) {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {console.log(this.props)}
        <button onClick={this.props.getSmurf}>Get Smurfs</button>
        <button onClick={() => this.props.postSmurf({
          name: 'SisterSmurf', 
          age: 400, 
          height: '6cm' 
         
        })}>Post Smurf</button>
        {this.props.isFetching  && this.props.smurf.length > 0 ? this.props.smurf.map(item => { 
          return (<div>
            <ul>
              <li>Name: {item.name}</li>
              <li>Age: {item.age}</li>
              <li>Height: {item.height}</li>
              <li>Id: {item.id}</li>
            </ul>
          </div>)
        }) : null}
        
        {/* <SmurfContext.Provider>
        </SmurfContext.Provider> */}
      </div>
    );
  }
}

const mapStateToProps = state => { 
  return {
    // name: state.name, 
    // age: state.age, 
    // height: state.height, 
    // id: state.id,
    smurf: state.smurf,
    isFetching: state.isFetching

  }
}
export default connect(
  mapStateToProps, 
  { getSmurf, postSmurf }
)(App);
