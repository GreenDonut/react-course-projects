import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Blank extends React.Component {
  render() {
    return(<div></div>);
  }
}

class IndecisionApp extends React.Component {
  render() {

    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer.';
    const options = ['Thing one', 'Thing two', 'Thing four'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options  options={options}/>
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
  render() {
    return (
      <div>
        <button> What should I do?</button>
     </div>
    )
  }
}

//Options
class Options extends React.Component {
  render() {
    return (
      <div>
       {
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
  render() {
    return (
      <div>
        <h3>AddOption Component Here</h3>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
export default Blank;
