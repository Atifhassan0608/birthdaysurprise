const music = document.getElementById('background-music');
    music.play();

document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve selected answers
        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');
        const q3 = document.querySelector('input[name="q3"]:checked');
        const q4 = document.querySelector('input[name="q4"]:checked');
        const q5 = document.querySelector('input[name="q5"]:checked');
        const q6 = document.querySelector('input[name="q6"]:checked');

        // Check if all questions are answered
        if (q1 && q2 && q3 && q4 && q5 && q6) {
            // Check answers
            const correctAnswers = ['2020', 'green', 'railway', 'jahaan', 'biryani', 'yes'];
            const userAnswers = [q1.value, q2.value, q3.value, q4.value, q5.value, q6.value];
            let correctCount = 0;

            // Compare user answers with correct answers
            for (let i = 0; i < correctAnswers.length; i++) {
                if (userAnswers[i] === correctAnswers[i]) {
                    correctCount++;
                }
            }

            // Check if all answers are correct
            if (correctCount === correctAnswers.length) {
                window.location.href = 'shayari.html'; // Redirect to Shayari page
            } else {
                alert('Sorry, not all answers are correct. Please try again.'); // Inform user of incorrect answers
            }
        } else {
            alert('Please answer all questions.'); // Inform user to answer all questions
        }
    });
});
