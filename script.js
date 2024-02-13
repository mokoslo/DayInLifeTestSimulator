function startTest() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('scenario-screen').classList.remove('hidden');
}

function checkAnswer() {
    const answer = document.getElementById('answer-input').value.toLowerCase();
    let feedback = "";
    if (answer === "good morning") {
        feedback = "Correct! You're off to a great start.";
    } else {
        feedback = "Not quite. The correct answer is 'Good morning'.";
    }
    document.getElementById('feedback-text').innerText = feedback;
    document.getElementById('scenario-screen').classList.add('hidden');
    document.getElementById('feedback-screen').classList.remove('hidden');
}

function restartTest() {
    document.getElementById('feedback-screen').classList.add('hidden');
    document.getElementById('welcome-screen').classList.remove('hidden');
}

// Initially show the welcome screen
document.getElementById('welcome-screen').classList.remove('hidden');