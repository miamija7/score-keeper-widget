"use strict";

(function () {

    const p1 = {
        score: 0,
        button: document.querySelector('#p1Button'),
        display: document.querySelector('#p1Display')
    }

    const p2 = {
        score: 0,
        button: document.querySelector('#p2Button'),
        display: document.querySelector('#p2Display')
    }

    const resetButton = document.querySelector('#reset');
    const winningScoreSelect = document.querySelector('#playTo');
    const winByTwoCheckbox = document.querySelector('#winBy2');
    let winningScore = parseInt(winningScoreSelect.value);
    let isRuleWinByTwo = winByTwoCheckbox.checked;
    let isGameOver = false;


    p1.button.addEventListener('click', function () {
        updateScores(p1, p2)
    })

    p2.button.addEventListener('click', function () {
        updateScores(p2, p1)
    })

    winningScoreSelect.addEventListener('change', function () {
        winningScore = parseInt(this.value);
        reset();
    })

    winByTwoCheckbox.addEventListener('change', function () {
        isRuleWinByTwo = winByTwoCheckbox.checked;
        reset();
    })

    resetButton.addEventListener('click', reset)

    function reset() {
        isGameOver = false;
        for (let p of [p1, p2]) {
            p.score = 0;
            p.display.textContent = 0;
            p.button.disabled = false;
            p.display.classList.remove('has-text-success', 'has-text-danger');
        }
    }

    function updateScores(player, opponent) {
        if (!isGameOver) {
            player.score += 1;
            if ((!isRuleWinByTwo && player.score >= winningScore) || (isRuleWinByTwo && player.score >= winningScore && player.score > (opponent.score + 1))) {
                isGameOver = true;
                player.display.classList.add('has-text-success');
                opponent.display.classList.add('has-text-danger');
                player.button.disabled = true;
                opponent.button.disabled = true;
            }
            player.display.textContent = player.score;
        }
    }
})();


