import React, { Component } from 'react';
import './information.css'
export default class information extends React.Component {
  render() {
    return (
        <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
                <main role="main">
                <div class="container marketing">
                <hr class="featurette-divider" />

                <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading">Почему <span class="text-muted">Байкальская Железная Дорога? </span></h2>
                    <p class="lead">Кругобайкальскую железную дорогу можно по праву назвать 
                    главной достопримечательностью на Байкале.
                    Современная кругобайкальская дорога является 
                    историко-архитектурным памятником и используется в основном, туристами. 
                    Это 89 километров байкальской красоты, которые можно проехать на старинном поезде, 
                    сквозь арки и тоннели, спроектированные итальянскими мастерами. 
                    Вы увидите Байкал с высоты и остановитесь в самых красивых местах</p>
                </div>
                <div class="col-md-5">
                    <img class = "featurette-image img-fluid mx-auto radius" src = "img/Bridge.jpg" alt="Bridge" />
                </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading">Есть <span class="text-muted">где разгуляться?</span></h2>
                    <p class="lead">На действующем сейчас пути Кругобайкальской дороги находится 38
                     тоннелей общей длиной 9063 метра, пять каменных галерей общей длиной 295 метров
                      и три железобетонных галереи с отверстиями.
                     Самый длинный тоннель - через мыс Половинный длиной 777,5 метров.</p>
                </div>
                <div class="col-md-5 order-md-1">
                    <img class="featurette-image img-fluid mx-auto" src="img/Bridge2.jpg" alt="Generic placeholder image" />
                </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading">Что <span class="text-muted">интересного?</span></h2>
                    <p class="lead">В состав комплекса Кругобайкальской железной дороги 
                    входит 582 памятника инженерного искусства, 172 памятника архитектуры, 
                    16 археологических и 46 природных и ландшафтных памятников.</p>
                </div>
                <div class="col-md-5">
                    <img class="featurette-image img-fluid mx-auto" src="img/Bridge3.jpg" alt="Generic placeholder image" />
                </div>
                </div>
                <hr class="featurette-divider" />
                
            </div>
            </main>
      </div>
    );
  }
}
