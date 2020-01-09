import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import Action from './Action';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = { 
      options: []
    };
  }

  componentDidMount(){
    console.log('fetching data')
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({options}))
      } 
    } catch (e){
      console.log(e)
    }    
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      console.log('saving data')
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }
  componentWillUnmount(){
    console.log('Component Will Unmount')
  }
  handleDeleteOption(option){
    this.setState((prevState) => ({
      options: prevState.options.filter((opt) => opt !== option)
    }) )
  }
  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }) );
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({
        options: prevState.options.concat(option)
    }) );
  }

  render() {
    const title = `Indecision`
    const subtitle = `Let computer make decisions for you`;
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

