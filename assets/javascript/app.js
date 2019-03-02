$(document).ready(function(){ 

    var questionArray = [
        {   question : "What year did Harley Davidson invite the V-twin engine?",
                ans : "1909",
                w1 : "1890",
                w2 : "1923",
                w3 : "1913",
                w4: "1909"
            },

        {   question : "2",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            w4: "w4"
            },

        {   question : "3",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "4",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },  

        {   question : "5",  //5
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "6", 
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "7",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "8",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "9",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },  

        {   question : "10",  //10
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "11", 
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "12",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "13",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "14",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },  

        {   question : "15",  //15
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "16", 
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "17",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "18",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "19",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },  

        {   question : "20",  //20
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "21",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "22", 
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "23",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "24",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "25",  //25
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },  

        {   question : "26",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "27", 
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "28",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "29",
            ans : "ans",
            w1 : "w1",
            w2 : "w2",
            w3 : "w3",
            },

        {   question : "30",  //30
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

    var i = numArray[0]; //current question Object's location reference number
    var roundCounter = 0;
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
                
                    //Shuffles answer choices, return shuffled ansArray;
                    function shuffleQuestions() {
                        for (var i = ansArray.length - 1; i > 0; i--) {
                        var j = Math.floor(Math.random() * (i + 1));
                        var temp = ansArray[i];
                        ansArray[i] = ansArray[j];
                        ansArray[j] = temp;
                        };
                    };

                    shuffleQuestions();

        function questAnsConsole(){

               //Writes Question on screen.
                $(".questionBox").text(questionArray[i].question);
                    //Writes Answer on screen.
                    $(".answerBox1").text(ansArray[0]).attr("value", ansArray[0]);
                    $(".answerBox2").text(ansArray[1]).attr("value", ansArray[1]);
                    $(".answerBox3").text(ansArray[2]).attr("value", ansArray[2]);
                    $(".answerBox4").text(ansArray[3]).attr("value", ansArray[3]);

                
          };
          questAnsConsole();
          setClickEvent();
                                    //timer
                                    // setInterval(timer, 1000);
                                    // var clock = 30;

                                    // function timer(){
                                    //     clock--;
                                    //     $(".timer").text(clock);
                                    // console.log(clock);
                                    // };

      };// closes Play

    play();

        function setClickEvent(){

            $("button").click(function() {
               var userClick = document.getElementById(".button").Value;
               console.log(this);
               alert(userClick);

            if (roundCounter === numArray.length){                                
                $(".questionBox").text("You got " + score + " out of " + numArray.length + "!"); //Format text so that it is larger!
                $(".answerArea").hide();

            } else if (questionArray[i].ans === userClick) {
                alert("winner winner chicken dinner!");
                score++;
                roundCounter++;
                play();

            } else {
                alert("yea lost!");
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

