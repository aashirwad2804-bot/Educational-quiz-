const questions = [
    {
        question: "What is the basic unit of life?",
        options: [
            "Tissue",
            "Cell",
            "Organ",
            "Organ system"
        ],
        answer: 1
    },

    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: [
            "Oxygen",
            "Carbon dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        answer: 2
    },

    {
        question: "What is the SI unit of force?",
        options: [
            "Joule",
            "Newton",
            "Watt",
            "Pascal"
        ],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function startQuiz() {

    document.getElementById("start-screen")
        .classList.add("hidden");

    document.getElementById("quiz-screen")
        .classList.remove("hidden");

    showQuestion();
}

function showQuestion() {

    const q = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        `Question ${currentQuestion + 1}/${questions.length}`;

    document.getElementById("question").textContent =
        q.question;

    const optionsDiv = document.getElementById("options");

    optionsDiv.innerHTML = "";

    selectedAnswer = null;

    q.options.forEach((option, index) => {

        const div = document.createElement("div");

        div.className = "option";

        div.textContent = option;

        div.onclick = function () {

            document.querySelectorAll(".option")
                .forEach(x => x.classList.remove("selected"));

            div.classList.add("selected");

            selectedAnswer = index;
        };

        optionsDiv.appendChild(div);
    });

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progress")
        .style.width = progress + "%";
}

function nextQuestion() {

    if (selectedAnswer === null) {
        alert("Please select an answer.");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        finishQuiz();
    }
}

function finishQuiz() {

    document.getElementById("quiz-screen")
        .classList.add("hidden");

    document.getElementById("result-screen")
        .classList.remove("hidden");

    document.getElementById("score").textContent =
        `Your Score: ${score}/${questions.length}`;
}

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    document.getElementById("result-screen")
        .classList.add("hidden");

    document.getElementById("quiz-screen")
        .classList.remove("hidden");

    showQuestion();
}
