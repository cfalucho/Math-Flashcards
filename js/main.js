

// var additionEnter = document.getElementById("userInput");
// additionEnter.addEventListener("keyup", function(event){
//     if(event.keyCode === 13){
//         event.preventDefault();
//         document.getElementById("enter").click();
//         document.getElementById("userInput").value ="";
//     }
// });

var enterKey = document.getElementById("addInput");
enterKey.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("addition").click();
        event.currentTarget.value ="";
        }        
    })
;

var enterKey = document.getElementById("subtractInput")
    enterKey.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("subtract").click();
        event.currentTarget.value ="";
        }        
    })
;

var enterKey = document.getElementById("multiplyInput")
    enterKey.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("multiply").click();
        event.currentTarget.value ="";
        }        
    })
;

var enterKey = document.getElementById("divisionInput")
    enterKey.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("division").click();
        event.currentTarget.value ="";
        }        
    })
;


//Clicking on different tab links opens contents specific for that tab 
function openPage(pageName, elmnt, color){
  
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    
    for(i = 0; i < tabcontent.length;  i++){
        tabcontent[i].style.display ="none";
        
    }

    tablinks = document.getElementsByClassName("tablink");
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].style.backgroundColor ="";
        
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

    document.getElementById("flex-item1").click();
    event.currentTarget.value ="";


}

// Generate random numbers to HTML for Addition, Subtraction and Multiplication
// Return 2 random values if called
function generateRandomNums(){
    rand1 = Math.floor(Math.random() * 10);
    rand2 = Math.floor(Math.random() * 10);

    var generateNums1 = document.getElementsByClassName("randomNum1");
    var generateNums2 = document.getElementsByClassName("randomNum2");
    
    for(i = 0; i < generateNums1.length; i++){
        generateNums1[i].innerHTML = rand1;
    }
    for(i = 0; i < generateNums2.length; i++){
        generateNums2[i].innerHTML = rand2;   
    }    
    
    return[rand1, rand2];
}






//----------ADDITION------------------------

function additionAnswer (){
    var values = generateRandomNums()
    var first = values[0]
    var second = values[1];
    additionTotal = first + second;
    console.log(additionTotal);
}

function additionSubmit(){
    var userInput = parseInt(document.getElementById("addInput").value); 
    if(additionTotal === userInput){
        console.log("Good job");
        generateRandomNums();
        additionAnswer();
    }
    else {
        alert("Invalid answer, try again.");;
    }
}   

//----------SUBTRACTION------------------------

function subtractionAnswer (){
    var values = generateRandomNums()
    var first = values[0]
    var second = values[1];

    subtractTotal = first - second;
    console.log(subtractTotal);
}
function subractSubmit(){
    var userAnswer = parseInt(document.getElementById("subtractInput").value);
    if(subtractTotal == userAnswer){
        console.log("Good job");
        generateRandomNums();
        subtractionAnswer();
    }
    else {
       alert("Invalid answer, try again.");;
    }
}   

//----------MULTIPLICATION------------------------

function multiplyAnswer (){
    var values = generateRandomNums()
    var first = values[0]
    var second = values[1];

    multiplyTotal = first * second;
    console.log(multiplyTotal);
}

function multiplySubmit(){
    var userAnswer = parseInt(document.getElementById("multiplyInput").value);
    if(multiplyTotal == userAnswer){
        console.log("Good job");
        generateRandomNums();
        multiplyAnswer();
    }
    else {
       alert("Invalid answer, try again.");;
    }
}   

//----------MULTIPLICATION------------------------

function generateFactorableNums(){
    var botNum = Math.floor(Math.random() * (10 - 1) + 1);
    console.log(botNum)

    var topNum = botNum * Math.floor(Math.random() *(10 - 1) + 1);
    console.log(topNum)


    var topNumber = document.getElementsByClassName("topNumber");
    var bottomNumber = document.getElementsByClassName("bottomNumber");
   
    for(i = 0; i < topNumber.length; i++){
        topNumber[i].innerHTML = topNum;
    }
    for(i = 0; i < bottomNumber.length; i++){
       bottomNumber[i].innerHTML = botNum;   
    }    
    
    return[topNum, botNum];

}

function divisonAnswer(){
    var values = generateFactorableNums()
    var topNum = values[0]
    var botNum = values[1];

    factorNum = topNum / botNum;
    console.log(factorNum);
}

function divisionSubmit(){
    var userAnswer = parseInt(document.getElementById("divisionInput").value);
    if(factorNum == userAnswer){
        console.log("Good job");
        generateFactorableNums();
        divisonAnswer();
    }
    else {
       alert("Invalid answer, try again.");;
    }
}   