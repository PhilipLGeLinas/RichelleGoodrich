let modal = document.getElementsByClassName("modal")[0];
let trivia = document.getElementsByClassName("trivia")[0];
let score = document.getElementsByClassName("score")[0];
let newsletter = document.getElementsByClassName("newsletter")[0];
let welcome = document.getElementsByClassName("welcome")[0];
let file = document.getElementsByClassName("file")[0];
let profilepic = document.getElementsByClassName("profilepic")[0];
let buttons = document.getElementsByClassName("buttons");
let bookSrcs = document.getElementsByClassName("bookImg");
let questions = document.getElementsByClassName("questions");
let questions2 = document.getElementsByClassName("questions2");
let questions3 = document.getElementsByClassName("questions3");
let questions4 = document.getElementsByClassName("questions4");
let questions5 = document.getElementsByClassName("questions5");
let questions11 = document.getElementsByClassName("questions11");
let questions12 = document.getElementsByClassName("questions12");
let signin = document.getElementById("signin");
let account = document.getElementsByClassName("account")[0];
let questionNumbers;
let currentQuestion;
let currentScore;
let questionCount;
let randomInteger;
let currentIndex;

function displayButtons(index) {
    buttons[index].style.display = "block";
}

function exitButtons(index) {
    buttons[index].style.display = "none";
}

function openTrivia(index) {
    currentIndex = index;
    questionNumbers = [];
    for (let i = 0; i < 6; i++) {
        randomInteger = Math.floor(Math.random() * 6);
        if (!questionNumbers.includes(randomInteger)) {
            questionNumbers[i] = randomInteger;
        } else {
            i--;
        }
    }
    questionCount = 0;
    switch (currentIndex) {
        case 0:
            questions[questionNumbers[questionCount]].style.display = "block";
            currentQuestion = questions[questionNumbers[questionCount]];
            break;
        case 1:
            questions2[questionNumbers[questionCount]].style.display = "block";
            currentQuestion = questions2[questionNumbers[questionCount]];
            break;
        case 2:
            questions3[questionNumbers[questionCount]].style.display = "block";
            currentQuestion = questions3[questionNumbers[questionCount]];
            break;
        case 3:
            questions4[questionNumbers[questionCount]].style.display = "block";
            currentQuestion = questions4[questionNumbers[questionCount]];
            break;
        case 4:
            questions5[questionNumbers[questionCount]].style.display = "block";
            currentQuestion = questions5[questionNumbers[questionCount]];
            break;
        case 10:
            questions11[questionNumbers[questionCount]].style.display = "block";
            currentQuestion = questions11[questionNumbers[questionCount]];
            break;
        case 11:
            questions12[questionNumbers[questionCount]].style.display = "block";
            currentQuestion = questions12[questionNumbers[questionCount]];
            break;
    }
    currentQuestion.children[0].innerHTML = `Question ${questionCount + 1}`;
    currentScore = 0;
    trivia.src = bookSrcs[index].src;
    modal.style.display = "block";
}

function answer(correct) {
    questionCount++;
    if (correct) {
        currentScore++;
    }
    if (questionCount === 6) {
        score.style.top = "2em";
        score.style.right = "8em";
        score.fontSize = "30vw";
    }
    score.innerHTML = currentScore + " / 6";
    currentQuestion.style.display = "none";
    switch (currentIndex) {
        case 0:
            questions[questionNumbers[questionCount]].style.display = "block";
            currentQuestion = questions[questionNumbers[questionCount]];
            break;
        case 1:
            questions2[questionNumbers[questionCount]].style.display = "block";
            currentQuestion = questions2[questionNumbers[questionCount]];
            break;
        case 2:
            questions3[questionNumbers[questionCount]].style.display = "block";
            currentQuestion = questions3[questionNumbers[questionCount]];
            break;
        case 3:
            questions4[questionNumbers[questionCount]].style.display = "block";
            currentQuestion = questions4[questionNumbers[questionCount]];
            break;
        case 4:
            questions5[questionNumbers[questionCount]].style.display = "block";
            currentQuestion = questions5[questionNumbers[questionCount]];
            break;
        case 10:
            questions11[questionNumbers[questionCount]].style.display = "block";
            currentQuestion = questions11[questionNumbers[questionCount]];
            break;
        case 11:
            questions12[questionNumbers[questionCount]].style.display = "block";
            currentQuestion = questions12[questionNumbers[questionCount]];
            break;
    }
    currentQuestion.children[0].innerHTML = `Question ${questionCount + 1}`;
}

function restart(currentIndex) {
    closeTrivia();
    openTrivia(currentIndex);
}

function closeTrivia() {
    modal.style.display = "none";
    currentQuestion.style.display = "none";
    score.innerHTML = "0 / 6";
    score.style.top = "0.2em";
    score.style.right = "3em";
    score.fontSize = "5vw";
}

function openNews() {
    newsletter.style.display = "block";
}

function closeNews() {
    newsletter.style.display = "none";
}

function saveUser() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("fname", fname);
        localStorage.setItem("lname", lname);
        localStorage.setItem("name", fname + " " + lname);
    }
}

function closeWelcome() {
    welcome.style.display = "none";
}

function setProfilePic() {
    profilepic.src = file.innerHTML;
}