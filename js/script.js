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
        const randomAnswer = Math.floor(Math.random() * answers.length)
        answer.innerHTML = `<span>Odpowiedź:</span> ${answers[randomAnswer]}`
}

const emptyCheck = () => {

    ball.classList.remove("shake-animation")

	if (question.value === "") {
		error.textContent = "Musisz zadać pytanie!"
	} else if (question.value.slice(-1) !== "?") {
		error.textContent = 'Pytanie musi być zakończone znakiem "?".'
	} else {
		drawAnswer()
	}
}

const showAnswer = () => {
	ball.classList.add("shake-animation")
	setTimeout(emptyCheck, 1000);
    answer.textContent = ''
	error.textContent = ''
}

ball.addEventListener("click", showAnswer)
