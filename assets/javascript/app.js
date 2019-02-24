$(document).ready(function(){ 

    var arr = [
        {   question : "1What year did Harley Davidson invite the V-twin engine?",
                a : "1909",
                w1 : "1890",
                w2 : "1923",
                w3 : "1913",
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
    ]

    var correct = 0;

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

            // array of answer options
            var ansArray = [answer, wrongAns1, wrongAns2, wrongAns3];

        //removes selected object from array after random selections
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
        }

        shuffle(ansArray);
        console.log(ansArray);
        
        function start(){
               $(".questionBar").empty();
               $(".answerBar").empty();
               $(".score").text("Rider's Score: " + correct);    

             
               //Creates Question
               var qButton = $('<div>');
                    qButton.text(question);
                    qButton.addClass("questionBox");
               $(".questionBar").append(qButton);
               
               //Creates Answer Buttons with some styling
               for (i=0; i<ansArray.length; i++){

               var answerButton = $("<div>");
                    answerButton.text(ansArray[i]);
                    answerButton.addClass("answerBox");
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

                                                                                               //COUNTER
        function setClickEvent(){   

        $(".btn").click(function() {
            // alert("click click!");
            userClick = $(this).attr('value');
            console.log("userClick: " + userClick);
            console.log("answer: " + arr[i].ans);

            if ( arr[i].ans === userClick) {                                                      //FIX LOGIC
                alert("winner winner chicken dinner!");
                correct++;
                play();
            } else {
                alert("yea lost!");
                play();
            };
          });
        };

     
}); // closes .ready


// fix if statement for correct answerArray
//reset

// add correct answer Counter 
// add timer with numbers on index page
// format index