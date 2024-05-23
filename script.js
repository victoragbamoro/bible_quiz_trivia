let currentQuestion = 0;
let wrongAnswers = 0;
let questions = [
    {
        question: "Moses was shepherding the flock of his father-in-law when God spoke to him through a what?",
        answers: {
            A: "Turtle",
            B: "Sleepwalking woman",
            C: "Waterfall",
            D: "Burning bush"
        },
        correct: "D",
        verse: "Exo. 3:2"
    },
    {
        question: "Cain was sentenced to become a homeless and restless wanderer for doing what?",
        answers: {
            A: "Making fun of his brother",
            B: "Murdering his brother",
            C: "Slapping his brother",
            D: "Stealing from his brother"
        },
        correct: "B",
        verse: "Gen 4:8"
    },
    {
        question: "How long did it rain on earth during the great flood?",
        answers: {
            A: "40 days",
            B: "60 days",
            C: "80 days",
            D: "50 days"
        },
        correct: "A",
        verse: "Gen 7"
    },
    {
        question: "What are the first five books of the Bible traditionally called?",
        answers: {
            A: "Books of Moses",
            B: "Books of Adam",
            C: "Books of Laws",
            D: "Books of Hebrews"
        },
        correct: "A"
    },
    {
        question: "Sin hatches eggs of this reptile.",
        answers: {
            A: "Scorpion",
            B: "Viper",
            C: "Spider",
            D: "Leech"
        },
        correct: "B",
        verse: "Isaiah 59:5"
    },
    {
        question: "The Lord instructed a king not to have many of which animal?",
        answers: {
            A: "Ox",
            B: "Horse",
            C: "Goat",
            D: "Addax"
        },
        correct: "B",
        verse: "Deut. 17:16"
    },
    {
        question: "Who was the first Christian martyr?",
        answers: {
            A: "Paul",
            B: "John",
            C: "Stephen",
            D: "James"
        },
        correct: "C",
        verse: "Acts 7:59-60"
    },
    {
        question: "Samson used what kind of jawbone to kill 1,000 Philistines?",
        answers: {
            A: "Camel",
            B: "Bear",
            C: "Donkey",
            D: "Tiger"
        },
        correct: "C",
        verse: "Judges 15:15"
    },
    {
        question: "Who was Hagar?",
        answers: {
            A: "Sarah’s slave",
            B: "Mother of Ishmael",
            C: "Abraham’s concubine",
            D: "All of the above"
        },
        correct: "D",
        verse: "Genesis 16"
    },
    {
        question: "Which book is this from: Thou shall have no other gods before me.",
        answers: {
            A: "Genesis",
            B: "Exodus",
            C: "Leviticus",
            D: "Judges"
        },
        correct: "B",
        verse: "Exodus 20:3"
    },
    {
        question: "What was the first plague to strike the Egyptians?",
        answers: {
            A: "Blood in the Nile",
            B: "Fire in the sky",
            C: "Crop failure",
            D: "Flooding"
        },
        correct: "A",
        verse: "Ex. 7:21"
    },
    {
        question: "Jesus refers to Herod Antipas as which animal in Luke?",
        answers: {
            A: "Snake",
            B: "Scorpion",
            C: "Fox",
            D: "Wolf"
        },
        correct: "C",
        verse: "Luke 13:32"
    },
    {
        question: "The second coming of Jesus is like…",
        answers: {
            A: "A thief in the night",
            B: "A fig tree",
            C: "The days of Noah",
            D: "All of these"
        },
        correct: "D",
        verse: "Matthew 24:3-33"
    },
    {
        question: "What country was Barnabas from?",
        answers: {
            A: "Turkey",
            B: "Rome",
            C: "Greece",
            D: "Cyprus"
        },
        correct: "D",
        verse: "Acts 4:36"
    },
    {
        question: "In the eight plagues, this animal covered the ground.",
        answers: {
            A: "Scorpions",
            B: "Worms",
            C: "Locusts",
            D: "Snails"
        },
        correct: "C",
        verse: "Exodus 10:4"
    },
    {
        question: "How many tribes formed the northern kingdom of Israel?",
        answers: {
            A: "2",
            B: "7",
            C: "10",
            D: "12"
        },
        correct: "C",
        verse: "1Kings 12"
    },
    {
        question: "What is the fifth commandment?",
        answers: {
            A: "You shall not murder",
            B: "Honour your father and your mother",
            C: "You shall not steal",
            D: "None of the above."
        },
        correct: "B",
        verse: "Exodus 20:12"
    },
    {
        question: "Who did King Saul chase around the wilderness to try to kill?",
        answers: {
            A: "Jonathan",
            B: "David",
            C: "Jesse",
            D: "King of Judah"
        },
        correct: "B",
        verse: "1 Samuel 24:10"
    },
    {
        question: "What did Jacob gain when he tricked his father, Isaac?",
        answers: {
            A: "A bowl of stew",
            B: "A blessing",
            C: "A wife",
            D: "All of these"
        },
        correct: "B",
        verse: "Gen 27:22-30"
    },
    {
        question: "What was Jesus’ profession?",
        answers: {
            A: "Tent maker",
            B: "Soldier",
            C: "Tax collector",
            D: "Carpenter"
        },
        correct: "D",
        verse: "Mark 6:3, Matthew 13:55"
    }
];

function loadQuestion() {
    wrongAnswers = 0;
    let questionElement = document.getElementById("question");
    let answers = document.getElementsByClassName("answer");

    questionElement.textContent = questions[currentQuestion].question;

    answers[0].querySelector(".text").textContent = questions[currentQuestion].answers.A;
    answers[1].querySelector(".text").textContent = questions[currentQuestion].answers.B;
    answers[2].querySelector(".text").textContent = questions[currentQuestion].answers.C;
    answers[3].querySelector(".text").textContent = questions[currentQuestion].answers.D;

    // Reset classes and hide verse
    for (let answer of answers) {
        answer.className = "answer";
        answer.onclick = function() {
            selectAnswer(this, this.querySelector(".label").textContent.charAt(0));
        };
    }
    document.getElementById("verse").textContent = "";
    document.getElementById("show-answer-button").disabled = false;
}

function selectAnswer(selectedElement, selectedAnswer) {
    let correctAnswer = questions[currentQuestion].correct;
    let answers = document.getElementsByClassName("answer");

    if (selectedAnswer === correctAnswer) {
        selectedElement.classList.add("correct");
        document.getElementById("show-answer-button").disabled = true;
        // Show the verse if available
        if (questions[currentQuestion].verse) {
            document.getElementById("verse").textContent = `Bible Reference: ${questions[currentQuestion].verse}`;
        }
        // Disable further clicks
        for (let answer of answers) {
            answer.onclick = null;
        }
    } else {
        selectedElement.classList.add("wrong");
        wrongAnswers++;
        if (wrongAnswers >= 3) {
            // Highlight correct answer
            for (let answer of answers) {
                if (answer.querySelector(".label").textContent.charAt(0) === correctAnswer) {
                    answer.classList.add("correct");
                    break;
                }
            }
            document.getElementById("show-answer-button").disabled = true;
            // Show the verse if available
            if (questions[currentQuestion].verse) {
                document.getElementById("verse").textContent = `Bible Reference: ${questions[currentQuestion].verse}`;
            }
            // Disable further clicks
            for (let answer of answers) {
                answer.onclick = null;
            }
        }
    }
}

function showAnswer() {
    let correctAnswer = questions[currentQuestion].correct;
    let answers = document.getElementsByClassName("answer");

    for (let answer of answers) {
        if (answer.querySelector(".label").textContent.charAt(0) === correctAnswer) {
            answer.classList.add("correct");
        } else {
            answer.classList.add("wrong");
        }
        answer.onclick = null;
    }

    // Show the verse if available
    if (questions[currentQuestion].verse) {
        document.getElementById("verse").textContent = `Bible Reference: ${questions[currentQuestion].verse}`;
    }

    document.getElementById("show-answer-button").disabled = true;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        // Clear the game container
        let gameContainer = document.getElementById("game-container");
        gameContainer.innerHTML = "<h2>END OF TRIVIA !!!</h2>";

        // Create an image element for the sunrise image
        let tcolcImage = document.createElement("img");
        tcolcImage.src = "tcolc.jpg"; // Change to the correct path of your image
        tcolcImage.alt = "I am a Child of Faith";

        // Create an image element for the sunrise image
        let emojiImage = document.createElement("img");
        emojiImage.src = "emoji.png"; // Change to the correct path of your image
        emojiImage.alt = "The End";

        //Apply styling to resize the image
        tcolcImage.style.width = "500px"; // Adjust the width as needed
        tcolcImage.style.height = "auto"; // Maintain aspect ratio
        emojiImage.style.width = "300px"; // Adjust the width as needed
        emojiImage.style.height = "auto"; // Maintain aspect ratio

        // Append the image to the game container
        gameContainer.appendChild(tcolcImage);
        gameContainer.appendChild(document.createElement("br"));
        gameContainer.appendChild(emojiImage);
    }
}

// Load the first question initially
window.onload = function() {
    loadQuestion();
};
