import React, { Component } from "react";
import "./App.css";
// import { SmurfContext } from './contexts/SmurfContext'; 
import { connect } from 'react-redux';
import { getSmurf, postSmurf } from '../actions'; 
import { timingSafeEqual } from "crypto";

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      // name: "", 
      // age: "", 
      // height: ""
      name: ""
    }
  }
  addSmurf = (name, age, height) => { 
    const newSmurf ={
      name: name,
      age: age,  
      height: height 
    }
    // this.setState({
    //   name: [...this.state.name, newSmurf.name],
    //   age: [...this.state.name, newSmurf.age],
    //   height: [...this.state.name, newSmurf.height]
    // })
      this.props.postSmurf(newSmurf)
  }
  handleChange = (e) => { 
    this.setState({name:  e.target.value});
  }
  handleChange2 = (e) => { 
    this.setState({age:  e.target.value});
  }
  handleChange3 = (e) => { 
    this.setState({height:  e.target.value});
  }
  handleSubmit = (e) => { 
    e.preventDefault();
    this.addSmurf(this.state.name, this.state.age, this.state.height);
    // this.addSmurf(this.state.age);
    // this.addSmurf(this.state.height);
    // this.props.postSmurf({name: this.state.name, age: this.state.age, height: this.state.height})
  }
  render(props) {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {console.log(this.props)}
        <button onClick={this.props.getSmurf}>Get Smurfs</button>
        {/* <button onClick={() => this.props.postSmurf({
          name: 'SisterSmurf', 
          age: 400, 
          height: '6cm' 
         
        })}>Post Smurf</button> */}
        <div style={{display: `flex`}}>
          <form style={{width: `150px`, marginLeft: `100px`, display: `flex`, flexDirection: `column`}}onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                />
                <label>age</label>
                <input
                type="text"
                value={this.state.age}
                onChange={this.handleChange2}
                name="random text"
                />
                 <label>height</label>
                <input
                type="text"
                value={this.state.height}
                onChange={this.handleChange3}
                name="random text"
                />
                <button>Post Smurf</button>
          </form>
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
        </div>
        
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
