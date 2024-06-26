document.addEventListener('DOMContentLoaded', () => {
    // Event listener for the quiz submit button
    const submitButton = document.getElementById('submit-quiz');
    if(submitButton) {
      submitButton.addEventListener('click', checkQuiz);
    }
});

// Function to check the quiz answers and provide feedback
function checkQuiz() {
  // Find all the questions in the quiz section
  const questions = document.querySelectorAll('#quiz-section .question');

  questions.forEach((question, index) => {
    // Find the checked radio button in this question
    const userAnswer = question.querySelector('input[type="radio"]:checked');
    const feedbackElement = question.querySelector('.feedback');
    
    // If an answer is selected
    if (userAnswer) {
      if (userAnswer.value === 'correct') {
        // If the selected answer is correct
        feedbackElement.textContent = 'Your choice is correct!';
        feedbackElement.className = 'feedback correct';
      } else {
        // If the selected answer is incorrect
        const correctAnswerLabel = question.querySelector('label[for="' + question.querySelector('input[type="radio"][value="correct"]').id + '"]').textContent;
        feedbackElement.textContent = `Your choice is incorrect. The correct answer should be "${correctAnswerLabel}".`;
        feedbackElement.className = 'feedback incorrect';
      }
    } else {
      // If no answer is selected
      feedbackElement.textContent = 'Please select an answer.';
      feedbackElement.className = 'feedback incorrect';
    }
  });
}
