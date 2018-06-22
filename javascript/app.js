$('#game').hide();

    var triviaInfo = {
        correctAnswer: 0,
        wrongAnswer: 0,
        unanswered: 0,
        timer: 300,
        isTimerOn: false,
        intervalId: '',

    //(I finally caved in and started using arrays and objects to somewhat simplify this process.)
    
    //My terrible questions 
     MyRandomQuestions: {
        FirstQuestion: 'Which of these is not a pizza topping that Papa Johns serves?',
        SecondQuestion: 'Rick Astley is never gonna: ',
        ThirdQuestion: 'If you pick an answer to this question, what are the chances that you will answer it correctly? ',
        FourthQuestion: 'What is the largest organ in the human body?'

    },
    //The terrible options that users can pick from the terrible questions I Googled. 
    MyRandomAnswers: {
        FirstOptions: ['Chocolate', 'Mashed Potatoes', 'Tuna', 'Lobster'],
        SecondOptions: ['Give you up', 'gonna let you down', 'make you cry', 'hurt you', 'All of the above'],
        ThirdOptions: ['25%', '100%', '0%', '50%'],
        FourthOptions: ['The skin', 'liver', 'lungs', 'kidneys'],
    },
    //The terrible answers that result from terrible questions. 
    Answers: {
        FirstAnswer: 'Lobster',
        SecondAnswer: 'All of the above',
        ThirdAnswer: '100%',
        FourthAnswer: 'The skin'
    },
    //This is what happens when a user tries to play a new game. The game stats need to be reset. 
    start: function (){
        trivia.correctAnswer = 0,
        trivia.wrongAnswer = 0,
        trivia.unanswered = 0,
        trivia.timer = 300000,
        clearInterval(trivia.isTimerOn)

        $('#game').show();
        //On the ID timer in the HTML, the amount of time reminaing will show. 
        $('#timer').html(trivia.timer/60,000);

        $('#startButton').hide();

        $('#timeLeft').show();

        trivia.nextQuestion();
        },
    nextQuestion: function(){
        if(!trivia.isTimerOn){
            timer.intervalId = setInterval();

        }
        }    
    },
    

