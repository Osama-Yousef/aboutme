'use strict';
var score = 0;

 var name = prompt("enter your name ?");
 console.log(name);
 console.log(typeof name);


 

function myQuestion1(){
 var locat = prompt("are you live in jordan ?  (y/n) or (yes/no)").toLocaleLowerCase();

 while (locat !== "yes" && locat !== "no" && locat !== "y" && locat !== "n") {
   locat = prompt("please answer  yes / no / y / n ").toLocaleLowerCase();
 }


 if (locat === "yes" || locat === "y") { alert("WoW we are in the same country , nice to meet you ");score++; }
 else { alert("Oh noo ! you must visit us!"); }

}
myQuestion1();


function myQuestion2(){

 var userInput = prompt("are you feeling good?  (y/n) or (yes/no) ").toLocaleLowerCase();


 while (userInput !== "yes" && userInput !== "no" && userInput !== "y" && userInput !== "n") {

   userInput = prompt("please answer  yes / no / y / n ").toLocaleLowerCase();
 }

 if (userInput === "yes" || userInput === "y") { alert(" i wish more good feelings to u ");score++; }
 else { alert(" try to do something you love , you will be better"); }
}



myQuestion2();


function myQuestion3(){


 var educ = prompt("do you have education history ?(y/n) or (yes/no)").toLocaleLowerCase();


 while (educ !== "yes" && educ !== "no" && educ !== "y" && educ !== "n") {
   educ = prompt("please answer  yes / no / y / n ").toLocaleLowerCase();

 }

 if (educ === "yes" || educ === "y") { alert(" Niiice coz learning is a good thing ");score++; }
 else { alert(" you should work on your self more"); }
}
 myQuestion3();

 function myQuestion4(){
 var job = prompt("do you have job experience ?(y/n) or (yes/no) ").toLocaleLowerCase();

 while (job !== "yes" && job !== "no" && job !== "y" && job !== "n") {
   job = prompt("please answer  yes / no / y / n").toLocaleLowerCase();

 }

 if (job === "yes" || job === "y") { alert(" Amaziiing , the experience nowadays is useful to have a job ");score++; }
 else { alert(" So hooow you will get moneyyy!!!"); }

 }
 myQuestion4();


 function myQuestion5(){

 var purp = prompt("do you have purposes ?(y/n) or (yes/no) ").toLocaleLowerCase();

 while (purp !== "yes" && purp !== "no" && purp !== "y" && purp !== "n") {
   purp = prompt("please answer  yes / no / y / n").toLocaleLowerCase();

 }

 if (purp === "yes" || purp === "y") { alert(" You will be success,keep going to achieve them all ");score++; }
 else { alert(" So why youuu still a live hhh "); }


 }

 myQuestion5();

 function myQuestion6(){

for (let j = 0; j <= 3; j++){

var guessNum = prompt(" guess the number i choose in my mind between 1-20 ? please choose a numeric value");

var num = parseInt(guessNum);
//console.log(typeof(num));

if ( num <= 10 && num >= 1) { alert("the guess is too low "); }
else if ( num >= 11 && num <= 13 ) { alert("it is near value but still low"); }
else if ( num >= 17 && num <= 20 ) { alert("it is near value but still high"); }
else if ( num === 16 || num === 14) { alert("it is too near value "); }
else if ( num == 15) { alert("its correct you are good guesser !");score++;
break; } 
//console.log(num);
}

alert(" the correct answer is 15");

 }

 myQuestion6();





function myQuestion7() {
  var carType = ['bmw', 'kia', 'ford','porsche','lambo','ferrari','audi','honda','mercedes','bentley'];

  for (var k = 0; k < 6; k++) {
      var answerByUser = prompt('guess what is my best car type? Is it : bmw , kia , ford , porsche , lambo , ferrari , audi , honda , mercedes , bentley' );
      var guess = answerByUser.toLowerCase();

      
          if (guess === carType[4]) {
              alert('Correct Answer !!!');
              score++;
              
              break;}
          
      
      else { alert('wrong answer! please try again');}
     
         
    

  }
}

myQuestion7();

alert('My best car type is : lambo');

alert(' You got ' + score + ' correct answers ! out of 7 questions ');










