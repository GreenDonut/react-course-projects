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
    this.state = {
      options :['Thing one', 'Thing two', 'Thing three']
    }
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer.';
   

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0}/>
        <Options options={this.state.options}/>
        <Option />
        <AddOption />
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
  handlePick() {
    alert('handlePick');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}
        disabled={!this.props.hasOptions}>
         What should I do?
        </button>
     </div>
    )
  }
}

//Options
class Options extends React.Component {
  constructor(props) {
    super(props); //Calling super  inside constructor = accessing props of parent 
    //Making sure the context is always correct.
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    alert('remove all');
  }
  render() {
    return (
      <div>
         <button onClick={this.handleRemoveAll}>Remove All</button>
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
  handleAddOption(e) {
    e.preventDefault(); //prevents full page refresh
    const option = e.target.elements.option.value.trim(); //trim removes trailing spaces
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
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