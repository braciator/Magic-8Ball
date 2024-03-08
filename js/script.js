const ball = document.querySelector("img")
const question = document.querySelector("input")
const answer = document.querySelector(".answer")
const error = document.querySelector(".error")

const answers = [
	"Tak!",
	"Nie!",
	"Nawet o tym nie myśl.",
	"Wszystko zależy od Ciebie.",
	"Prawdopodobnie tak.",
	"Bardzo ciekawe pytanie, czy masz inne?",
	"Ciężko powiedzieć.",
	"Raczej nie.",
	"Bardzo możliwe",
]

const drawAnswer = () => {
    for (const el of answers) {
        let randomAnswer = Math.floor(Math.random() * answers.length)
        answer.textContent = answers[randomAnswer]
    }
}

const emptyCheck = () => {

    ball.classList.remove("shake-animation")

	if (question.value === "") {
		error.textContent = "Musisz zadać pytanie!"
	} else if (question.value.charAt(question.value.length - 1) !== "?") {
		error.textContent = 'Pytanie musi być zakończone znakiem "?".'
	} else {
		drawAnswer()
        error.textContent = ''
	}
}

const showAnswer = () => {
	ball.classList.add("shake-animation")
	setTimeout(emptyCheck, 1000);
    answer.textContent = ''
}

ball.addEventListener("click", showAnswer)
