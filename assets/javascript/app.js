$(document).ready(function(){ 
    //questions, objects in an array
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
    
    //creates an array that counts the number on objects in question array
    var numArray = [];
        
    //populates the array with the length of questionArray
    for (i=0; i<questionArray.length; i++){
        numArray.push(i);
    };

    //randomizes the order of numbers in numArray to be used to randomly pull questions and corropnding answers
    function shuffleNumbers(){
        for (var j = numArray.length - 1; j > 0; j--) {
            var k = Math.floor(Math.random() * (j + 1));
            var temp = numArray[j];
            numArray[j] = numArray[k];
            numArray[k] = temp;
        };
    };

    shuffleNumbers();

    //rounderCounter counts down numArray to end game when empty
    var roundCounter = 0;
    var score = 0;


//---------------------------------------------------------------------------
    //Game code
    function play(answer) {
            //pulls first number from numArray to Q&A
            var i = numArray.shift();
                   
            var answer = questionArray[i].ans;
            var wrongAns1 = questionArray[i].w1;
            var wrongAns2 = questionArray[i].w2;
            var wrongAns3 = questionArray[i].w3;

            // array of answer options
            var ansArray = [answer, wrongAns1, wrongAns2, wrongAns3];
                
                //Shuffles answer choices, return shuffled ansArray;
                function shuffleQuestions() {
                    for (var l = ansArray.length - 1; l > 0; l--) {
                    var m = Math.floor(Math.random() * (l + 1));
                    var temp = ansArray[l];
                    ansArray[l] = ansArray[m];
                    ansArray[m] = temp;
                        };
                    };

                shuffleQuestions();
                    console.log(ansArray);

        function questAnsConsole(){

               //Writes Question on screen.
                $(".questionBox").text(questionArray[i].question);
                    console.log(questionArray[i].question)
                    //Writes Answer on screen.
                    $(".answerBox1").text(ansArray[0]).attr("data-item", ansArray[0]);
                    $(".answerBox2").text(ansArray[1]).attr("data-item", ansArray[1]);
                    $(".answerBox3").text(ansArray[2]).attr("data-item", ansArray[2]);
                    $(".answerBox4").text(ansArray[3]).attr("data-item", ansArray[3]);
                };

        questAnsConsole(); 
      };// closes Play
        
      console.log(answer);

      setClickEvent();
                              
    play();

        function setClickEvent(){

            $("button").click(function() {
               var userClick = $(this).attr("data-item");
               console.log("this: " + this);
               console.log(userClick);

            if ( numArray.length === false){                                
                $(".questionBox").text("You got " + score + " out of " + numArray.length + "!"); //Format text so that it is larger!
                $(".answerArea").hide();
            };

            if (questionArray[i].ans === userClick) {
                console.log("answer: " + answer);
                console.log(userClick);
                alert("winner winner chicken dinner!");
                score++;
                // roundCounter++;
                
                play();

            } else {
                // alert("yea lost!");
                // roundCounter++;
                
                play();
            };

            // console.log("number of rounds " + roundCounter); 
            console.log("User Score: " + score);
           });
        };
}); // closes .ready

// click event cant not reference "answer"

//reset

// add timer with numbers on index page


// format index page



