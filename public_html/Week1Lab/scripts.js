/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var riddle1 = document.getElementById("riddle1");
var riddle2 = document.getElementById("riddle2");
var riddle3 = document.getElementById("riddle3");
var riddle4 = document.getElementById("riddle4");
var riddle5 = document.getElementById("riddle5");
var riddle6 = document.getElementById("riddle6");
var riddle7 = document.getElementById("riddle7");
var riddle8 = document.getElementById("riddle8");
var riddle9 = document.getElementById("riddle9");
var riddle10 = document.getElementById("riddle10");


var json = {
                "riddle1" : "Your breath or an illness",
                "riddle2" : "A yard stick",
                "riddle3" : "A fence.",
                "riddle4" : "A comb.",
                "riddle5" : "The word incorrectly",
                "riddle6" : "A snail",
                "riddle7" : "Nothing",
                "riddle8" : "Rain",
                "riddle9" : "A Candle",
                "riddle10" : "A coat tree"
            };
            
            riddle1.onclick = function setspan1()
            {
                document.getElementById("answer1").innerHTML= json.riddle1;
            }
            riddle2.onclick = function setspan2()
            {
                document.getElementById("answer2").innerHTML= json.riddle2;
            }
            
            riddle3.onclick = function setspan3()
            {
                document.getElementById("answer3").innerHTML = json.riddle3;
            }
            
            riddle4.onclick = function setspan4()
            {
                document.getElementById("answer4").innerHTML= json.riddle4;
            }
            
            riddle5.onclick = function setspan5()
            {
                document.getElementById("answer5").innerHTML= json.riddle5;
            }
            
            riddle6.onclick = function setspan6()
            {
                document.getElementById("answer6").innerHTML= json.riddle6;
            }
            
            riddle7.onclick = function setspan7()
            {
                document.getElementById("answer7").innerHTML= json.riddle7;
            }
            
            riddle8.onclick = function setspan8()
            {
                document.getElementById("answer8").innerHTML= json.riddle8;
            }
            
            riddle9.onclick = function setspan9()
            {
                document.getElementById("answer9").innerHTML= json.riddle9;
            }
            
            riddle10.onclick = function setspan10()
            {
                document.getElementById("answer10").innerHTML = json.riddle10;
            }
          

//document.getElementById('answer1').insertAdjacentHTML('afterbegin', 'json.riddle1');