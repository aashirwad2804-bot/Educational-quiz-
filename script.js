const examData = {

    neet: {
        name: "🩺 NEET",
        subjects: {
            biology: {
                name: "🧬 Biology",
                chapters: [
                    "The Living World",
                    "Cell: The Unit of Life",
                    "Human Physiology",
                    "Genetics and Evolution"
                ]
            },

            physics: {
                name: "⚛️ Physics",
                chapters: [
                    "Units and Measurements",
                    "Laws of Motion",
                    "Work, Energy and Power",
                    "Current Electricity"
                ]
            },

            chemistry: {
                name: "🧪 Chemistry",
                chapters: [
                    "Structure of Atom",
                    "Chemical Bonding",
                    "Thermodynamics",
                    "Equilibrium"
                ]
            }
        }
    },

    jee: {
        name: "📐 JEE",
        subjects: {
            physics: {
                name: "⚛️ Physics",
                chapters: [
                    "Kinematics",
                    "Laws of Motion",
                    "Work, Energy and Power"
                ]
            },

            chemistry: {
                name: "🧪 Chemistry",
                chapters: [
                    "Atomic Structure",
                    "Chemical Bonding",
                    "Thermodynamics"
                ]
            },

            mathematics: {
                name: "📐 Mathematics",
                chapters: [
                    "Quadratic Equations",
                    "Complex Numbers",
                    "Differentiation",
                    "Integration"
                ]
            }
        }
    },

    boards: {
        name: "🏫 Boards",
        subjects: {
            physics: {
                name: "⚛️ Physics",
                chapters: ["Electrostatics", "Current Electricity"]
            },

            chemistry: {
                name: "🧪 Chemistry",
                chapters: ["Solutions", "Electrochemistry"]
            },

            biology: {
                name: "🧬 Biology",
                chapters: ["Reproduction", "Genetics"]
            },

            mathematics: {
                name: "📐 Mathematics",
                chapters: ["Matrices", "Calculus"]
            }
        }
    },

    cuet: {
        name: "🎓 CUET",
        subjects: {
            english: {
                name: "📖 English",
                chapters: [
                    "Reading Comprehension",
                    "Vocabulary",
                    "Grammar"
                ]
            },

            general: {
                name: "🧠 General Test",
                chapters: [
                    "General Knowledge",
                    "Logical Reasoning",
                    "Numerical Ability"
                ]
            }
        }
    },

    nda: {
        name: "🪖 NDA",
        subjects: {
            mathematics: {
                name: "📐 Mathematics",
                chapters: [
                    "Algebra",
                    "Trigonometry",
                    "Calculus"
                ]
            },

            general: {
                name: "🌍 General Ability",
                chapters: [
                    "History",
                    "Geography",
                    "Science"
                ]
            }
        }
    },

    ssc: {
        name: "🏛️ SSC",
        subjects: {
            reasoning: {
                name: "🧠 Reasoning",
                chapters: [
                    "Analogy",
                    "Series",
                    "Coding-Decoding"
                ]
            },

            mathematics: {
                name: "📐 Mathematics",
                chapters: [
                    "Percentage",
                    "Profit and Loss",
                    "Ratio"
                ]
            },

            english: {
                name: "📖 English",
                chapters: [
                    "Grammar",
                    "Vocabulary"
                ]
            }
        }
    },

    banking: {
        name: "🏦 Banking",
        subjects: {
            reasoning: {
                name: "🧠 Reasoning",
                chapters: [
                    "Puzzles",
                    "Syllogism"
                ]
            },

            quantitative: {
                name: "📊 Quantitative Aptitude",
                chapters: [
                    "Percentage",
                    "Ratio",
                    "Data Interpretation"
                ]
            },

            english: {
                name: "📖 English",
                chapters: [
                    "Grammar",
                    "Comprehension"
                ]
            }
        }
    },

    railway: {
        name: "🚆 Railways",
        subjects: {
            mathematics: {
                name: "📐 Mathematics",
                chapters: [
                    "Number System",
                    "Percentage",
                    "Time and Distance"
                ]
            },

            reasoning: {
                name: "🧠 Reasoning",
                chapters: [
                    "Analogy",
                    "Series",
                    "Puzzles"
                ]
            },

            general: {
                name: "🌍 General Awareness",
                chapters: [
                    "History",
                    "Geography",
                    "Science"
                ]
            }
        }
    },

    upsc: {
        name: "🇮🇳 UPSC",
        subjects: {
            history: {
                name: "📜 History",
                chapters: [
                    "Ancient India",
                    "Medieval India",
                    "Modern India"
                ]
            },

            geography: {
                name: "🌍 Geography",
                chapters: [
                    "Physical Geography",
                    "Indian Geography"
                ]
            },

            polity: {
                name: "⚖️ Indian Polity",
                chapters: [
                    "Constitution",
                    "Fundamental Rights",
                    "Parliament"
                ]
            }
        }
    },

    other: {
        name: "🧠 Other Exams",
        subjects: {
            general: {
                name: "General Practice",
                chapters: [
                    "General Knowledge",
                    "Reasoning",
                    "Mathematics",
                    "Science",
                    "English"
                ]
            }
        }
    }
};


let currentExam = "";
let currentSubject = "";
let currentChapter = "";


function hideAll() {

    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("subject-screen").classList.add("hidden");
    document.getElementById("chapter-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.add("hidden");

}


function openExam(exam) {

    currentExam = exam;

    hideAll();

    document.getElementById("subject-screen")
        .classList.remove("hidden");

    document.getElementById("exam-title")
        .textContent = examData[exam].name;

    const list =
        document.getElementById("subject-list");

    list.innerHTML = "";

    const subjects =
        examData[exam].subjects;

    Object.keys(subjects).forEach(function(subject) {

        const button =
            document.createElement("button");

        button.className = "subject-btn";

        button.textContent =
            subjects[subject].name;

        button.onclick = function() {
            openSubject(subject);
        };

        list.appendChild(button);

    });
}


function openSubject(subject) {

    currentSubject = subject;

    hideAll();

    document.getElementById("chapter-screen")
        .classList.remove("hidden");

    const data =
        examData[currentExam].subjects[subject];

    document.getElementById("subject-title")
        .textContent = data.name;

    const list =
        document.getElementById("chapter-list");

    list.innerHTML = "";

    data.chapters.forEach(function(chapter) {

        const button =
            document.createElement("button");

        button.className = "chapter-btn";

        button.textContent = "📚 " + chapter;

        button.onclick = function() {
            startQuiz(chapter);
        };

        list.appendChild(button);

    });
}


function startQuiz(chapter) {

    currentChapter = chapter;

    questions =
        questionBank[currentExam]
        [currentSubject]
        [chapter];

    if (!questions || questions.length === 0) {
        alert("No questions available for this chapter yet.");
        return;
    }

    currentQuestion = 0;
    score = 0;

    hideAll();

    document.getElementById("quiz-screen")
        .classList.remove("hidden");

    document.getElementById("quiz-subject")
        .textContent = chapter;

    showQuestion();
}


function showQuestion() {

    const q = questions[currentQuestion];

    document.getElementById("question-number")
        .textContent =
        `Question ${currentQuestion + 1}/${questions.length}`;

    document.getElementById("question")
        .textContent = q.question;

    const options =
        document.getElementById("options");

    options.innerHTML = "";

    q.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className = "option";
        button.textContent = option;

        button.onclick = function () {

            document.querySelectorAll(".option")
                .forEach(x =>
                    x.classList.remove("selected")
                );

            button.classList.add("selected");

            selectedAnswer = index;
        };

        options.appendChild(button);
    });

    selectedAnswer = null;

    document.getElementById("progress")
        .style.width =
        ((currentQuestion + 1) /
        questions.length * 100) + "%";
}


function showSubjects() {
    openExam(currentExam);
}


function goHome() {

    hideAll();

    document.getElementById("home-screen")
        .classList.remove("hidden");

}
