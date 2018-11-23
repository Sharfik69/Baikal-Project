import React from 'react'; 
import './table.css'

export default class table extends React.Component { 
    render() { 
        return ( 
        <div class = "back1">

        <div class="jumbotron">
        <div class="container marketing">
        
        <div class = "row mb-2"> 
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" /> 
            <div class = "col-md-6"> 
                <table class="table table-striped table"> 
                    <thead> 
                        <tr> 
                            <th class = "table-dark hh" colspan="2" scope="col"><p class = "hh2">Классический маршрут по КБЖД</p></th> 
                        </tr> 
                    </thead> 
                    <tbody> 
                        <tr class = "table-secondary hh"> 
                            <td><p>07:40</p></td> 
                            <td><p>Отправление от вокзала Иркутск-пассажирский.</p></td> 
                        </tr> 
                        <tr class = "table-info hh"> 
                            <td><p>09:50-10:30</p></td> 
                            <td><p>Слюдянка (166 км)</p></td> 
                        </tr> 
                        <tr class = "table-secondary hh"> 
                            <td><p>11:00-11:50</p></td> 
                            <td><p>Ангасолка (149 км)</p></td> 
                        </tr> 
                        <tr class = "table-info hh"> 
                            <td><p>12:10-13:20</p></td> 
                            <td><p>Шарыжалгай (137 км)</p></td> 
                        </tr> 
                        <tr class = "table-secondary hh"> 
                            <td><p>13:40-14:30</p></td> 
                            <td><p>Киркирей (123 км)</p></td> 
                        </tr> 
                        <tr class = "table-info hh"> 
                            <td><p>15:00-15:40</p></td> 
                            <td><p>Половинная (110 км)</p></td> 
                        </tr> 
                        <tr class = "table-secondary hh"> 
                            <td><p>16:00-16:40</p></td> 
                            <td><p>Итальянская Стенка (102 км)</p></td> 
                        </tr> 
                        <tr class = "table-info hh"> 
                            <td><p>17:00</p></td> 
                            <td><p>Прибытие в Порт Байкал (72 км). В зависимости от назначенной группы, в поезде указывается очередность и время отправления парома до Листвянки и возвращение в Иркутск.</p></td> 
                        </tr> 
                    </tbody> 
                </table> 
            </div> 
            <div class = "col-md-6"> 
                <table class="table table-striped table-striped"> 
                    <thead> 
                        <tr> 

                            <th class="table-dark hh" colspan="2" scope="col">Зеркальный маршрут по КБЖД (Понедельник, Пятница)</th> 
                        </tr> 
                    </thead> 
                <tbody> 
                    <tr class = "table-secondary hh"> 

                        <td><p>07:00-8:30</p></td> 
                        <td><p>Отправление от Драмтеатра им Охлопкова (точное время указано в билетах) и переправа на пароме.</p></td> 
                    </tr> 
                <tr class = "table-info hh"> 

                    <td><p >10:20 </p></td> 
                    <td><p>Порт Байкал </p></td> 
                </tr> 
                <tr class = "table-secondary hh"> 

                    <td><p>11:20-11:40</p></td> 
                    <td><p>Уланово (97 км)</p></td> 
                </tr> 
                <tr class = "table-info hh"> 

                    <td><p>11:50-12:20</p></td> 
                    <td><p>Итальянская Стенка (102 км)</p></td> 
                </tr> 
                <tr class = "table-secondary hh"> 

                    <td><p>12:40-13:30</p></td> 
                    <td><p>Половинная (110 км)</p></td> 
                </tr> 
                <tr class = "table-info hh"> 

                    <td><p>13:50-14:20</p></td> 
                    <td><p>Киркирей (123 км)</p></td> 
                </tr> 
                <tr class = "table-secondary hh"> 

                    <td><p>15:20-16:30</p></td> 
                    <td><p>Ангасолка (149 км)</p></td> 
                </tr> 
                <tr class = "table-info hh"> 

                    <td><p>17:00-17:40</p></td> 
                    <td><p>Слюдянка (166 км)</p></td> 
                </tr> 
                <tr class = "table-secondary hh"> 
                    <td><p>20:15</p></td> 
                    <td><p>Прибытие на вокзал Иркутск Пассажирский.</p></td> 
                </tr> 

                </tbody> 
            </table> 

            </div> 
        </div> 
        </div>
        </div>
        </div>
        ); 
    } 
};