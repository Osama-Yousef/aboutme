'use strict';

var name = prompt("enter your name ?");
console.log(name);
console.log(typeof name);




var locat = prompt("are you live in jordan ?  (y/n) or (yes/no)").toLocaleLowerCase();

while (locat !== "yes" && locat !== "no" && locat !=="y" && locat !=="n") {
  locat = prompt("please answer  yes / no / y / n ").toLocaleLowerCase();
}
  

if ( locat === "yes" || locat === "y") { alert("WoW we are in the same country , nice to meet you "); }
else { alert("Oh noo ! you must visit us!"); }



var userInput = prompt("are you feeling good?  (y/n) or (yes/no) ").toLocaleLowerCase();


while (userInput !== "yes" && userInput !== "no" && userInput !== "y" && userInput !=="n") {

  userInput = prompt("please answer  yes / no / y / n ").toLocaleLowerCase();
}

if (userInput === "yes" || userInput ===  "y") { alert(" i wish more good feelings to u "); }
else { alert(" try to do something you love , you will be better"); }





var educ = prompt("do you have education history ?(y/n) or (yes/no)").toLocaleLowerCase();


while (educ !== "yes" && educ !== "no" && educ !== "y" && educ !== "n") {
  educ = prompt("please answer  yes / no / y / n ").toLocaleLowerCase();

}

if (educ === "yes" || educ === "y" ) { alert(" Niiice coz learning is a good thing "); }
else { alert(" you should work on your self more"); }



var job = prompt("do you have job experience ?(y/n) or (yes/no) ").toLocaleLowerCase();

while (job !== "yes" && job !== "no" && job !== "y" && job !== "n") {
  job = prompt("please answer  yes / no / y / n").toLocaleLowerCase();

}

if (job === "yes" || job === "y") { alert(" Amaziiing , the experience nowadays is useful to have a job "); }
else { alert(" So hooow you will get moneyyy!!!"); }



var purp = prompt("do you have purposes ?(y/n) or (yes/no) ").toLocaleLowerCase();

while (purp !== "yes" && purp !== "no" && purp !== "y" && purp !== "n" ) {
  purp = prompt("please answer  yes / no / y / n").toLocaleLowerCase();

}

if (purp === "yes" || purp === "y") { alert(" You will be success,keep going to achieve them all "); }
else { alert(" So why youuu still a live hhh "); }






