import React, { useEffect, useState } from "react";
import axios from "axios";
import "./estilo.css";
export default class Item extends React.Component{
  
  constructor(props){
    super(props);
    var urliten = "";
}

  setIten = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/item/${this.props.item}`
      const res = await axios.get(url)
      //toArray.push(res.data.sprites["default"]);
      console.log(url)
      console.log(res.data.sprites["default"])
      this.urliten = res.data.sprites["default"]
    } catch (e) {
      console.log(e);
    }
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto)
  }


  render(){
    this.setIten();
    return (
      <img className="Item" src={this.urliten}/>
      
    );
  }
  
}

