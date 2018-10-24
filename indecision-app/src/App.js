import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Blank extends React.Component {
  render() {
    return(<div></div>);
  }
}

class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options :[]
    }
  }
  //handleDeleteOptions(): delete array
  //pass functions in as props to pass thing from child
  //to parent.
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option  = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    //Check for empty string
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Option already exists';
    }

    this.setState((prevState) => {
      return {
        //Bad practice to manipulate previous state directly;
        //instead, set new state and concatenate from previous instead
        //of e.g. pushing new option directly onto prev state.
        options: prevState.options.concat([option])
      };
    })
  }
  //handlePick(): randomly pick an option and alert it.

  render() {
     const title = 'Indecision';
     const subtitle = 'Put your life in the hands of a computer.';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
        hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}  
        />
        <Options 
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        />
        <Option />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handlePick}
        disabled={!this.props.hasOptions}>
         What should I do?
        </button>
     </div>
    )
  }
}

//Options
class Options extends React.Component {

  render() {
    return (
      <div>
         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
       {
         //Loops through array with options and renders each
         this.props.options.map((option) =><Option key={option} optionText={option}/>)
       }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
       {this.props.optionText}
      </div>
    );
  }
}

//AddOption
class AddOption extends React.Component {
  //We need to set initial state, so we call constructor here; this is a local state.
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault(); //prevents full page refresh
    const option = e.target.elements.option.value.trim(); //trim removes trailing spaces
    const error = this.props.handleAddOption(option);
    
    this.setState(() => {
      return {
        error
      }
    })
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form  onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
export default Blank;

/*
  COMPONENT STATE IN REACT
  State is just an object with a set of key value pairs. When these
  values change, the state changes.
  
  1. Set default state value / object e.g. start with { count: 0 }
  2. Component will render itself initially with these values. *
  3. State changes based on an event (request, button click, etc.)
  4. Application re-renders to show new state values *
  5. Repeat from 3.
*/

