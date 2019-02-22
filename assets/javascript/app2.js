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

    var previousNumber =[];
        console.log(previousNumber);

    //Game code
    function play() {
          
        //random number
        i = Math.floor(Math.random() * arr.length); //generates random number 
            previousNumber.push(i);
                console.log("random number: " + i);
            
            //question, answer, and wrong answer from object array
            var question = arr[i].question;
                console.log("random question: " + arr[i].question);
            var answer = arr[i].ans;
                console.log("random answer: " + arr[i].ans);
            var wrongAns1 = arr[i].w1;
                console.log("randWrongAns1: " + arr[i].w1);
            var wrongAns2 = arr[i].w2;
                console.log("randWrongAns1: " + arr[i].w2);
            var wrongAns3 = arr[i].w3;
                console.log("randWrongAns1: " + arr[i].w3);
            // array of answer options
            var ansArray = [answer, wrongAns1, wrongAns2, wrongAns3];

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


        function start(){
               $(".questionBar").empty();
               $(".answerBar").empty();
            //    $(".timer").text(correct);    

             
               //Creates Question
               var qButton = $('<div>');
                    qButton.text(question);
                    qButton.addClass("questionBox");
               $(".questionBar").append(qButton);
               
               //Creates Answer Buttons with some styling
               for (i=0; i<wrongAnsArray.length; i++){

               var answerButton = $("<div>");
                    answerButton.text(wrongAnsArray[i]);
                    answerButton.addClass("answerBox");
                    answerButton.attr("class","btn btn-outline-primary mt-2 ml-4 mb-3");
                    answerButton.attr("style", "width: 400px");
                    answerButton.attr("value", wrongAnsArray[i]);
               $(".answerBar").append(answerButton);
               };
            //    setClickEvent();
          };
        start();
      };
    play();
});
//                                                                                                //COUNTER
//     function setClickEvent(){
//      $(".btn").click(function(correctAns){
//           // alert("click click yeah bitch!");
//           userClick = $('.btn').attr('value');
//           console.log("userClick: " + userClick);
//           console.log("correctAns: " + correctAns);

//           if (correctAns === userClick) {                                                      //FIX LOGIC
//                alert("winner winner chicken dinner!");
//                correct++;
//                //play();
//           } else {
//                alert("yea suck dummy!");
//                correct++;
//                play();
//           };
//      });
//      };
     
     
// }); // closes .ready


// fix shift issue with q&a Array
// fix if statement for correct answerArray

// add correct answer Counter 
// add timer with numbers on index page
// format index