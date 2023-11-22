//gets username from email
function btn1(){
    var userEmail = prompt("enter username+@gmail.com");
    var upTo= userEmail.length -10;
    // alert(upTo); checks the split of username
    // var userSplit = userEmail.split("@");
    // alert(userSplit);
    var user= userEmail.substring(0,upTo);
    var userChoice = confirm("confirm the entered email "+userEmail+" is yours.")
    if(userChoice){
        alert("welcome "+ user);
    }else{alert("try again")}
    
}

//print contents of window
function btn2(){
    window.print();
}

//area of triangle
function btn3(){
    var base = prompt("enter base");
    var height = prompt("enter height");
    var area = (base* height)/2;
    alert("area of the triangle is "+area+"cm^2");
}

//display the current day and time
function btn4(){
    const time= new Date();
    const currentTime= time.toLocaleString(); //converts a value to a string in a format that is specific to the user's locale

    document.querySelector("#dt").textContent = "It is "+currentTime;
}

//get the current date
function btn5(){
    const d = new Date();
    document.getElementById("dt").innerHTML ="day: " + d.getDate();
}


/*takes a random integer between 1 and 10, 
user is then prompted to input a guess number. 
The program displays a message "Good Work" if the input matches
otherwise "Not matched".*/
function btn6(){
    var userNum= prompt("guess my number, its between 1 and 10")
    var guessNum= Math.floor(Math.random()* 10)+1;
    if (userNum== guessNum){
        alert("Good Work");
    }else{
        alert(`wrong number, my number was ${guessNum}`); //backticks
    }  
}

/*rotate the string 'w3resource' in the right direction. 
This is done by periodically removing one letter from the string end and attaching it to the front.*/
function btn7(){
    var element = document.querySelector("pre");
    var text =  element.textContent;

    // if (inerval){
    //     clearInterval(interval);
    //     interval = null; // Reset the interval variable
    // } 
    // else {
    // interval =
    setInterval(function () 
    {
     //This extracts from the beginning of the string text up to, but not including, the last character.
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    element.textContent = text;
    }, 100)
    }
// }


//area of a triangle where three sides are 5, 6, 7.
function btn8(){}







//calculate multiplication and division of two numbers
function btn9(){
    let mChoice= confirm("Multiply numbers?");
    if (mChoice){
        let numbers=prompt("enter two numbers to multiply");
        const splitArray= numbers.split(" ");
        let fNum= splitArray[0];
        let sNum= splitArray[1];
        var total= fNum*sNum;
    }else{
       let dChoice= confirm("Divide numbers?");
        if(dChoice){
            let numbers= prompt("enter two numbers to divide");
            const splitArray= numbers.split(" ");
            let fNum= splitArray[0];
            let sNum= splitArray[1];
            var total= fNum/ sNum;
        }
    }
    alert(`the result is: ${total}`);  
}

//convert temperatures to and from Celsius, Fahrenheit. [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
function btn10(){
    let choice = confirm("convert from celsius?");
if (choice){
    let c= prompt("enter celsius");
    var converted= c *(9/5)+ 32 + "°F";
}else{
    choice=confirm("convert from fahrenheit?");
    if(choice){
        let f= prompt("enter fahrenheit");
        converted=(f-32) * (5/9) + "°C" ;
    }
}
alert(converted)
}


/*find the types of a given angle:
• Acute angle: between 0 and 90 degrees.
• Right angle: An 90 degree angle.
• Obtuse angle: between 90 and 180 degrees.
• Straight angle: A 180 degree angle */
function btn11(){
    let input= prompt("enter angle");
    if (input>0 && input<90){
        alert("this is an accute angle");
    }else if (input==90){
        alert("this is a right angle");
    }else if (input>90 && input<180){
        alert("this is an obtuse angle");
    }else if (input==180){
        alert("this is a 180 degree angle");
    }else{ alert("invalid number");}
}

//find all distinct prime factors of a given integer.
function btn12(){}

//light and dark mode/theme
function btn13(){}
