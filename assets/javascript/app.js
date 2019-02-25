$(document).ready(function(){ 

    var arr = [
        {   question : "1What year did Harley Davidson invite the V-twin engine?",
                a : "1909",
                w1 : "1890",
                w2 : "1923",
                w3 : "1913",
            },

        {   question : "q1",
            ans : "ans1",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q2",
            ans : "ans2",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q3",
            ans : "ans3",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },  

        {   question : "q4",  //5
            ans : "ans4",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q5", 
            ans : "ans5",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q6",
            ans : "ans6",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q7",
            ans : "ans7",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q8",
            ans : "ans8",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },  

        {   question : "q9",  //10
            ans : "ans9",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q10", 
            ans : "ans10",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q11",
            ans : "ans11",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q12",
            ans : "ans12",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q13",
            ans : "ans13",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },  

        {   question : "q14",  //15
            ans : "ans14",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q15", 
            ans : "ans15",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q16",
            ans : "ans16",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q17",
            ans : "ans17",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q18",
            ans : "ans18",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },  

        {   question : "q19",  //20
            ans : "ans19",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q20",
            ans : "ans20",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q21", 
            ans : "ans21",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q22",
            ans : "ans22",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q23",
            ans : "ans23",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q24",  //25
            ans : "ans24",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },  

        {   question : "q25",
            ans : "ans25",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q26", 
            ans : "ans26",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q27",
            ans : "ans27",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q28",
            ans : "ans28",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "q29",  //30
            ans : "ans29",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },  
    ]

    var correct = 0; // players score
    var roundCounter = 0; // number of questions answered
    var questions = arr.length-6; //array.length prior tp game
   console.log(questions);

     //set click event to start game
     // setTimeout(reset(), milliseconds)
     // visual counter ticking down

    //Game code
    function play() {
          
        //random number
        i = Math.floor(Math.random() * arr.length); //generates random number 

            //question, answer, and wrong answer from object array
            var question = arr[i].question;
            var answer = arr[i].ans;
            var wrongAns1 = arr[i].w1;
            var wrongAns2 = arr[i].w2;
            var wrongAns3 = arr[i].w3;
               console.log(arr[i].question);
            // array of answer options
            var ansArray = [answer, wrongAns1, wrongAns2, wrongAns3];

        //removes selected object from array after random selections  //not functioning
        arr.shift(ansArray[i]);

        //Shuffles answer choices
        function shuffle(ansArray) {
            for (var i = ansArray.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var temp = ansArray[i];
              ansArray[i] = ansArray[j];
              ansArray[j] = temp;
            }
          return ansArray;
        };

        shuffle(ansArray);
        
        function start(){
               //clears page of content for each round.
               $(".questionBar").empty();
               $(".answerBar").empty();
               $(".score").text("Rider's Score: " + correct);    

             
               //Creates Question
               var qButton = $('<div>');
                    qButton.text(question);
                    qButton.addClass("col-12 questionBox");
               $(".questionBar").append(qButton);
               
               //Creates Answer Buttons with some styling
               for (i=0; i<ansArray.length; i++){

               var answerButton = $("<div>");
                    answerButton.text(ansArray[i]);
                    // answerButton.addClass("answerBox");
                    answerButton.attr("class","btn btn-outline-primary mt-2 ml-4 mb-3");
                    answerButton.attr("style", "width: 400px");
                    answerButton.attr("value", ansArray[i]);
               $(".answerBar").append(answerButton);
               };
               setClickEvent();
          };
        start();

      };
    play();
                                                                                               //timer
        function setClickEvent(){   

        $(".btn").click(function() {
            // alert("click click!");
            userClick = $(this).attr('value');
          //   console.log("userClick: " + userClick);
          //   console.log("answer: " + arr[i].ans);


            if (questions === roundCounter) {
               $(".questionBar").empty();
               $(".answerBar").empty();
                var qButton = $('<div>');
                    qButton.addClass("col-12 questionBox");
                    qButton.text("Your Score is " + correct + " out of " + questions);
               $(".questionBar").append(qButton);
            } else if ( arr[i].ans === userClick) {
               //  alert("winner winner chicken dinner!");
                correct++;
                roundCounter++;
                play();
            } else {
               //  alert("yea lost!");
               roundCounter++;
                play();
            };

            console.log(roundCounter);
            console.log(questions);

          });
        }; // closes setClickEvent()

        function reset() {

        }


}); // closes .ready



//reset

// add timer with numbers on index page

// format index
