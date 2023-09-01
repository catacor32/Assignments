var container = document.getElementById("quiz")

window.onload = async () => {
    let respons = await fetch("./quiz.json").then(async response => {
        try{
            let data = await response.json();
            let quiz = data.quiz
            let arrQuiz = Object.keys(quiz)
            for(let i=0; i < arrQuiz.length; i++){
                let questionData = quiz[arrQuiz[i]];
                let optionsHTML = questionData.options.map((option, index) => {

                    return `
                        <label>
                            <input type="radio" name="q${i}" value="${option}">
                            ${option}
                        </label>
                        <br>
                    `;
                }).join('');


                container.innerHTML += `
                    <h3> Question ${i+1}: ${questionData.question}</h3>
                    ${optionsHTML}
                    <br>`;


            }



            var selectedAnswer = [];
            var radioInput = [];
            var input = [];
            for(let i=0; i < arrQuiz.length; i++){
                selectedAnswer.push(localStorage.getItem(`q${i}`));
            }
            for(var j in selectedAnswer){
                radioInput.push(document.querySelector(`input[name="q${j}"][value="${selectedAnswer[j]}"]`));
                input.push(radioInput[j].defaultValue)
            }
            for(let i=0; i < input.length; i++){
                if(selectedAnswer[i] == input[i]){
                    radioInput[i].checked = true;
                }
            }



            let score = 0;
            function calculateScore(){
                score = 0;
                for(i=0; i < arrQuiz.length; i++){
                    const selectedAnswer = localStorage.getItem(`q${i}`);
                    const correctAnswer = quiz[arrQuiz[i]].answer;

                if (selectedAnswer === correctAnswer) {
                    score++;
                }
            }

            const resultDisplay = document.getElementById("result");
            resultDisplay.textContent = `Your score: ${score} / ${arrQuiz.length}`;
        }
            const submitButton = document.getElementById("submit-button");
            submitButton.style.display = "block"
            submitButton.addEventListener("click", () => {
                calculateScore();
                if(score == arrQuiz.length){
                    alert("Congratulations, you answered all the questions correctly")
                }
            });


        }
        catch(error){
            console.log(error);
        }
    });

    container.addEventListener("change", (event) => {
        if (event.target.type === "radio") {
            let selectedLabel = event.target.value;
            let questionNumber = event.target.getAttribute("name").slice(1);
            let storedAnswer = localStorage.setItem(`q${questionNumber}`,selectedLabel);
        }
    });

}

// window.document.readyState(() => {
//     submitButton.show();
// });

