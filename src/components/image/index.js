import React from "react";
import "./estilo.css";
  export default class Image extends React.Component {
    state = {
      open: true
    }

    constructor(props){
        super(props);
    }
      
    toggleImage = () => {
      this.setState(state => ({ open: !state.open }))
    }
  
    getImageName = () => this.state.open ? this.props.front : this.props.back
  
    render() {
        const imageName = this.getImageName();
      return (
          <img className="Image" src={imageName} onClick={this.toggleImage} />
      );
    }
  }
  