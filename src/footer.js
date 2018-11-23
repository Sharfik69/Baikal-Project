import React, { Component } from 'react';
import './footer.css';

export default class footer extends React.Component { 
  render() {
    return (
      <div>
          <div id = "footer">
            <p class = "sw">Designed by <b>Dmitry Z.</b></p>
            <div class = "sq">
                <img src = "img/fb.png" class = "sz" />
                <img src = "img/inst.png" class = "sz" />
                <img src = "img/twi.png" class = "sz" />
                <img src = "img/vk.png" class = "sz" />
            </div>
          </div>
        
      </div>
    );
  }
}


