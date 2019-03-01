$(document).ready(function(){ 

    var questionArray = [
        {   question : "What year did Harley Davidson invite the V-twin engine?",
                ans : "1909",
                w1 : "1890",
                w2 : "1923",
                w3 : "1913",
                w4: "1909"
            },

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            w4: "w4"
            },

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },  

        {   question : "",  //5
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "", 
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },  

        {   question : "",  //10
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "", 
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },  

        {   question : "",  //15
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "", 
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },  

        {   question : "",  //20
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "", 
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "",  //25
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },  

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "", 
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "",  //30
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },  
    ];

    //creates and array that counts the number on objects in question array
    var numArray = [];

        for (i=0; i<questionArray.length; i++){
            numArray.push(i);
        };
    
    //randomizes the order of numbers in numArray 
    function shuffleNumbers(){
        for (var i = numArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = numArray[i];
            numArray[i] = numArray[j];
            numArray[j] = temp;
        };
    };
        shuffleNumbers();
            console.log("shuffled numbers: " + numArray);

    var roundCounter = 0;
    var numberOfQuestions = numArray.length;
    var i = numArray[0]; //current question
    var score = 0;
    

//---------------------------------------------------------------------------
    //Game code
    function play() {
            //question, answer, and wrong answer from object array
            var question = questionArray[i].question;
            var answer = questionArray[i].ans;
            var wrongAns1 = questionArray[i].w1;
            var wrongAns2 = questionArray[i].w2;
            var wrongAns3 = questionArray[i].w3;

            // array of answer options
            var ansArray = [answer, wrongAns1, wrongAns2, wrongAns3];
            

            //Shuffles answer choices
            function shuffleQuestions() {
                for (var i = ansArray.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = ansArray[i];
                ansArray[i] = ansArray[j];
                ansArray[j] = temp;
                };
                // return ansArray;
            };

            shuffleQuestions();
            console.log(ansArray);

        function questAnsConsole(){

               //clears page of content for each round.
            
               $(".answerBar").empty();
             
               //Writes Question on game screen
            
            $(".questionBar").text(questionArray[i].question);
            console.log(questionArray[i].question);
               
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
          questAnsConsole();

                                    //timer
                                    // setInterval(timer, 1000);
                                    // var clock = 30;

                                    // function timer(){
                                    //     clock--;
                                    //     $(".timer").text(clock);
                                    // console.log(clock);
                                    // };

      };

    play();


        function setClickEvent(){                                   

        $(".btn").click(function() {
            userClick = $(this).attr('value');
            console.log("userClick: " + userClick);

            if (roundCounter === numArray.length){                                
                // $(".questionBar").empty();
                $(".answerBar").empty();
                $(".questionBox").text("You got " + score + " out of " + numArray.length + "!"); //Format text so that it is larger!
        

            } else if (questionArray[i].ans === userClick) {
                alert("winner winner chicken dinner!");
                score++;
                roundCounter++;
                play();

            } else {
                // alert("yea lost!");
               roundCounter++;
                play();
            };
            console.log("number of rounds " + roundCounter);
            console.log(score);
          });
        };

}); // closes .ready



//reset

// add timer with numbers on index page


// format index

//<button data-questionNum=24 > </button>