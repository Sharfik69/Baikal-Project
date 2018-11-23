import React, { Component } from 'react';
import './header.css';

export default class header extends React.Component { 
  render() {
    return (
      <div>
          <div class = "component">
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />
            <div class = "box tit">
                <h1 class = "tit">КРУГОБАЙКАЛЬСКАЯ ЖЕЛЕЗНАЯ ДОРОГА</h1>
            </div>
          </div>
      </div>
    );
  }
}