$(document).ready(function() {

    // Generate a random integer (Goal number) between 29 and __ for each game
    var goal = Math.floor(Math.random()*100 + 21);
    console.log(goal);
    $('#goal').text(goal);

    // Generate random value between 1 and 12 for each gem
    let gemA = Math.floor(Math.random()*10 + 1);
    let gemB = Math.floor(Math.random()*10 + 1);
    let gemC = Math.floor(Math.random()*10 + 1);
    let gemD = Math.floor(Math.random()*10 + 1);
    console.log('Gem A: ' + gemA + ' | Gem B: ' + gemB + ' | Gem C: ' + gemC + ' | Gem D: ' + gemD);

    // Variable declarations for score values
    let wins = 0;
    let losses = 0;
    let currentScore = 0

    // $('#winCount').text(wins);
    // $('#lossCount').text(losses);
    // $('#currentScore').text(currentScore);

    // Game logic
    // When user clicks button, add value to current score
    function addClickHandlers(){
        $('#gemA').on('click', function() {
            currentScore = currentScore + gemA;
            $('#currentScore').text(currentScore);
            console.log('Current Score: ' + currentScore);
            scoreChecker();
        });

        $('#gemB').on('click', function() {
            currentScore = currentScore + gemB;
            $('#currentScore').text(currentScore);
            console.log('Current Score: ' + currentScore);
            scoreChecker();
        });

        $('#gemC').on('click', function() {
            currentScore = currentScore + gemC;
            $('#currentScore').text(currentScore);
            console.log('Current Score: ' + currentScore);
            scoreChecker();
        });

        $('#gemD').on('click', function() {
            currentScore = currentScore + gemD;
            $('#currentScore').text(currentScore);
            console.log('Current Score: ' + currentScore);
            scoreChecker();
        });
    }
    addClickHandlers();

    // Check if current score is equal to goal number
    function scoreChecker() {
        if (currentScore < goal) {
            console.log('Keep guessing!');
        } else if (currentScore > goal) {
            lose();
            console.log('You lose!');
        } else if (currentScore === goal) {
            $('.gems').off('click');
            win();
            console.log('You win!');
        }
    }
        
    // Invoke a win
    function win() {

        // Increment wins by 1
        wins ++;
        console.log('You have won ' + wins + ' many times');

        // Update number of wins in DOM
        $('#winCount').text(wins);
        reset();
    }

    // Invoke a loss
    function lose() {

        // Increment losses by 1
        losses ++;
        console.log('You have lost ' + losses + ' times');

        // Update number of losses in DOM
        $('#lossCount').text(losses);
        reset();
    }

    // Resets the game
    function reset() {
        goal = Math.floor(Math.random()*101+29);
        console.log(goal);
        $('#goal').text(goal);
        
        gemA = Math.floor(Math.random()*11+1);
        gemB = Math.floor(Math.random()*11+1);
        gemC = Math.floor(Math.random()*11+1);
        gemD = Math.floor(Math.random()*11+1);
        console.log('Gem A: ' + gemA + ' | Gem B: ' + gemB + ' | Gem C: ' + gemC + ' | Gem D: ' + gemD);
        
        // Enable button clicks for gems
        addClickHandlers()
        // $('.gems').on('click');

        currentScore = 0;
        $('#currentScore').text(currentScore);
    }

});