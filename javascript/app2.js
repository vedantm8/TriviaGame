var timerOn = false;
var timerID = '';
var endGameClicked = true;


var questionRight = 0;
var questionWrong = 0;
var questionUnAnswered = 0;

var question1 = 'Rick Astley is never gonna...'
var answer1A = 'Give you up';
var answer1B = 'Gonna let you down';
var answer1C = 'Make you cry';
var answer1D = 'hurt you';
var answer1E = 'All of the above';

var question2 = 'If you pick an answer to this question, what is the percentage that you will get the correct answer?'
var answer2A = '25%';
var answer2B = '0%';
var answer2C = '100%';
var answer2D = '33.3333%';

var question3 = 'What is the largest organ in the body?'
var answer3A = 'Kidney';
var answer3B = 'Heart';
var answer3C = 'The skin';
var answer3D = 'Liver';

$('#startButton').on('click', function(){
    timerOn = true;
    endGameClicked = false;
    var timeLeft = 300;
    var timeInteval = setInterval(function(){
        document.getElementById('timeLeft').value = 300 - --timeLeft;

        if (timeLeft <= 0){
            clearInterval(timeInteval);
        }
    });

    
    while(endGameClicked = false){
    timeLeft -=1;
    }

    $('#showTimeLeft').append(timeLeft);

    $('#Question1').append(question1);
    $('#Answer1A').append(answer1A);
    $('#Answer1B').append(answer1B);
    $('#Answer1C').append(answer1C);
    $('#Answer1D').append(answer1D);
    $('#Answer1E').append(answer1E);

    $('#Question2').append(question2);
    $('#Answer2A').append(answer2A);
    $('#Answer2B').append(answer2B);
    $('#Answer2C').append(answer2C);
    $('#Answer2D').append(answer2D);

    $('#Question3').append(question3);
    $('#Answer3A').append(answer3A);
    $('#Answer3B').append(answer3B);
    $('#Answer3C').append(answer3C);
    $('#Answer3D').append(answer3D);

    if (timeLeft == 0){
        return;
    }



    

});