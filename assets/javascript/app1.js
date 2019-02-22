$(document).ready(function(){ 

//array example: q1[0]= question; q1[1]= correct answer; q1[3], q1[4], q1[5] = wrong answers.
     var : question, answer, wrong1, wrong2, wrong3;

     data = {
          q01 : "What year did Harley Davidson invite the V-twin engine?",   
          "1909", "1890", "1923", "1913";

          q02 : "Harley Davidson has been producing motorcycle for police forces for over how many years?",
          "Over 100 years", "Since 1950", "Since day one", "Since never. Harley hates the police.";

          q03 : "In 1960, Harley produced it's frist and only scooter. It was named what?",
          "Topper", "The Scooter", "Hopper", "Little pig";

          q04 : "The first Harley-Davidson carburetor was made from a?",
          "Empty tomate can", "Beer bottle", "Model-t carburetor", "A reworked Honda carb";

          q05 : "Harley's were created in what US city?",
          "Milwaukee, WI", "Detroit,MI", "Fargo, CA", "Sturgis, SD";
          e
          q06 : "question06 Elvis", "answer", "wrong1", "wrong2", "wrong3";

          q07 : "Q7: countries produced in ", "answer", "wrong1", "wrong2", "wrong3";

          q08 : "The first movie to really put a Harley center stage was?",
          "The Wild Ones", "Mad Max", "Rebel with a cause", "Easy Rider";

          q09 : "question09", "answer", "wrong1", "wrong2", "wrong3";
          q10 : "question10", "answer", "wrong1", "wrong2", "wrong3";
          q11 : "question11", "answer", "wrong1", "wrong2", "wrong3";
          q12 : "question12", "answer", "wrong1", "wrong2", "wrong3";
          q13 : "question13", "answer", "wrong1", "wrong2", "wrong3";
          q14 : "question14", "answer", "wrong1", "wrong2", "wrong3";
          q15 : "question15", "answer", "wrong1", "wrong2", "wrong3";
          q16 : "question16", "answer", "wrong1", "wrong2", "wrong3";
          q17 : "question17", "answer", "wrong1", "wrong2", "wrong3";
          q18 : "question18", "answer", "wrong1", "wrong2", "wrong3";
          q19 : "question19", "answer", "wrong1", "wrong2", "wrong3";
          q20 : "question20", "answer", "wrong1", "wrong2", "wrong3";
          q21 : "question21", "answer", "wrong1", "wrong2", "wrong3";
          q22 : "question22", "answer", "wrong1", "wrong2", "wrong3";
          q23 : "question23", "answer", "wrong1", "wrong2", "wrong3";
          q24 : "question24", "answer", "wrong1", "wrong2", "wrong3";
          q25 : "question25", "answer", "wrong1", "wrong2", "wrong3";
          q26 : "question26", "answer", "wrong1", "wrong2", "wrong3";
          q27 : "question27", "answer", "wrong1", "wrong2", "wrong3";
          q28 : "question28", "answer", "wrong1", "wrong2", "wrong3";
          q29 : "question29", "answer", "wrong1", "wrong2", "wrong3";
          q30 : "question30", "answer", "wrong1", "wrong2", "wrong3";
          };


          
//   ------------------------------------------------------------------------------------

     var userChoise = 0;
     var correct = 0;
     

     //Game code

     function play() {
                                                  //remove brackets in randomQuestion
          var randomQuestion = [questionArray[Math.floor(Math.random() * questionArray.length)]]; //generates random question
               questionArray.shift(randomQuestion); //removes selected question from array, maybe be malfunctioning,
                    console.log("Elements: " + randomQuestion);

          elements= randomQuestion.shift();// randomQuestion something is wrong with this
               //    console.log("elements: " + elements);

//   -------------------------------------------------------------------------------------


          var question = elements.shift();   //Game quesion.
                    console.log("question: " + question);
                    console.log(elements);
          
          var correctAns = elements[0];      //Game answer.
                    console.log("winning answer: " + correctAns);
                   
          var answerArray = [];              // empty random answer array
                    
          elements.sort(function() {         //generates random numbers    
               return 0.5 - Math.random();
               });

          for (var i = 0; i < elements.length; i++) { // push random elements into Answer Array
               answerArray.push(elements[i]);
               console.log(elements[i]);
               };

                    
          function start(){
               $(".questionBar").empty();
               $(".answerBar").empty();
               $(".timer").text(correct);    //currently being used to count questions

               console.log(answerArray)
               //Creates Question
               var qButton = $('<div>');
                    qButton.text(question);
                    qButton.addClass("questionBox");
               $(".questionBar").append(qButton);
               
               //Creates Answer Buttons with some styling
               for (i=0; i<answerArray.length; i++){
                    // console.log(answerArray[i]);
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
                                                                                               //COUNTER
    function setClickEvent(){
     $(".btn").click(function(correctAns){
          // alert("click click yeah bitch!");
          userClick = $('.btn').attr('value');
          console.log("userClick: " + userClick);
          console.log("correctAns: " + correctAns);

          if (correctAns === userClick) {                                                      //FIX LOGIC
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