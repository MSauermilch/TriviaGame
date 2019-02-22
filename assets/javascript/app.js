$(document).ready(function(){ 

//array example: q1[0]= question; q1[1]= correct answer; q1[3], q1[4], q1[5] = wrong answers.

var q01 = ["What year did Harley Davidson invite the V-twin engine?",   
"1909", "1890", "1923", "1913"];

var q02 = ["Harley Davidson has been producing motorcycle for police forces for over how many years?",
"Over 100 years", "Since 1950", "Since day one", "Since never. Harley hates the police."];

var q03 = ["In 1960, Harley produced it's frist and only scooter. It was named what?",
"Topper", "The Scooter", "Hopper", "Little pig"];

var q04 = ["The first Harley-Davidson carburetor was made from a?",
"Empty tomate can", "Beer bottle", "Model-t carburetor", "A reworked Honda carb"];

var q05 = ["Harley's were created in what US city?",
"Milwaukee, WI", "Detroit,MI", "Fargo, CA", "Sturgis, SD"];

var q06 = ["question06 Elvis", "answer", "wrong1", "wrong2", "wrong3"];

var q07 = ["Q7: countries produced in ", "answer", "wrong1", "wrong2", "wrong3"];

var q08 = ["The first movie to really put a Harley center stage was?",
"The Wild Ones", "Mad Max", "Rebel with a cause", "Easy Rider"];

var q09 = ["question10", "answer", "wrong1", "wrong2", "wrong3"];
var q10 = ["question10", "answer", "wrong1", "wrong2", "wrong3"];
var q11 = ["question11", "answer", "wrong1", "wrong2", "wrong3"];
var q12 = ["question12", "answer", "wrong1", "wrong2", "wrong3"];
var q13 = ["question13", "answer", "wrong1", "wrong2", "wrong3"];
var q14 = ["question14", "answer", "wrong1", "wrong2", "wrong3"];
var q15 = ["question15", "answer", "wrong1", "wrong2", "wrong3"];
var q16 = ["question16", "answer", "wrong1", "wrong2", "wrong3"];
var q17 = ["question17", "answer", "wrong1", "wrong2", "wrong3"];
var q18 = ["question18", "answer", "wrong1", "wrong2", "wrong3"];
var q19 = ["question19", "answer", "wrong1", "wrong2", "wrong3"];
var q20 = ["question20", "answer", "wrong1", "wrong2", "wrong3"];
var q21 = ["question21", "answer", "wrong1", "wrong2", "wrong3"];
var q22 = ["question22", "answer", "wrong1", "wrong2", "wrong3"];
var q23 = ["question23", "answer", "wrong1", "wrong2", "wrong3"];
var q24 = ["question24", "answer", "wrong1", "wrong2", "wrong3"];
var q25 = ["question25", "answer", "wrong1", "wrong2", "wrong3"];
var q26 = ["question26", "answer", "wrong1", "wrong2", "wrong3"];
var q27 = ["question27", "answer", "wrong1", "wrong2", "wrong3"];
var q28 = ["question28", "answer", "wrong1", "wrong2", "wrong3"];
var q29 = ["question29", "answer", "wrong1", "wrong2", "wrong3"];
var q30 = ["question30", "answer", "wrong1", "wrong2", "wrong3"];

// bank of question arrays
     var questionArray = [  q01, q02, q03, q04, q05, q06, q07, q08, q09, q10, 
          q11, q12, q13, q14, q15, q16, q17, q18, q19, q20,
          q21, q22, q23, q24, q25, q26, q27, q28, q29, q30
          ];
          
//   ------------------------------------------------------------------------------------

     var userChoise = 0;
     var correct = 0;
     var notCorrect = 0; // maybe create a percentage of correct answers

//Game code

     function play() {

          var randomQ = [questionArray[Math.floor(Math.random() * questionArray.length)]]; //generates random question
               questionArray.shift(randomQ); //removes selected question from array
                    console.log("randomQ: " + randomQ);

          var elements = randomQ.shift();// randomQ is an array with in an array, shift removes it and makes it simply an array.
                    // console.log("elements: " + elements);

          var question = elements[0]; //Game quesion.
                    // console.log("question: " + question);

          elements.shift(elements[0]); //removes question/ first var[0] from arrays   //need to work on. removing var not array

          var answerWin = elements[0]; //answer replaces question[0]'s place in array if users choice equals this win!!!!!
                    // console.log("winning answer: " + answerWin);

          var answerArray = []; // empty random answer array
                    

          elements.sort(function() {         //generates random numbers
               return 0.5 - Math.random();
               });

          for (var i = 0; i < elements.length; i++) { // push elements back into array randomly
               answerArray.push(elements[i]);
               };

                    
          function start(){
               $(".questionBar").empty();
               $(".answerBar").empty();

               //Creates Question
               var qButton = $('<div>');
                    qButton.text(question);
                    qButton.addClass("questionBox");
               $(".questionBar").append(qButton);
               
               for (i=0; i<answerArray.length; i++){
                    // console.log(answerArray[i]);

               //Creates Answer Buttons with some styling
               var answerButton = $("<div>");
                    answerButton.text(answerArray[i]);
                    answerButton.addClass("answerBox");
                    answerButton.attr("class","btn btn-outline-primary mt-2 ml-4 mb-3");
                    answerButton.attr("style", "width: 400px");
                    answerButton.attr("value", answerArray[i]);
               $(".answerBar").append(answerButton);
               };
               setClickEvent();
          };
       start();
     };  //play()
     
     play();

     // counter
    function setClickEvent(){
     $(".btn").click(function(answerWin){
          // alert("click click yeah bitch!");
          var userClick = $('.btn').attr('value');
          console.log(userClick);

          if (answerWin === userClick) {
               alert("winner winner chicken dinner!");
               correct++;
               //play();
          } else {
               alert("yea suck dummy!");
               correct++;
               play();
          };
     });
     };
     
     
}); // closes .ready


// fix shift issue with q&a Array
// fix if statement for correct answerArray
// add correct answer Counter 
// add timer with numbers on index page
// format index