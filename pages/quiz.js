var urlParams = new URLSearchParams(window.location.search);
var banda = urlParams.get('band');
var encodedQuestions = urlParams.get('questions');

var questions = JSON.parse(decodeURIComponent(encodedQuestions));

var spanElement = document.getElementById('nameBand');
spanElement.textContent = banda;

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const rights = new Set()
const totalOfQuestions = questions.length
const showTotal = document.querySelector('#success span')
showTotal.textContent = `${rights.size} de ${totalOfQuestions}`

for (const item of questions) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.question

  for (response of item.response) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = response
    dt.querySelector('input').setAttribute('name', `question-${questions.indexOf(item)}`)
    dt.querySelector('input').value = item.response.indexOf(response);
    dt.querySelector('input').onchange = (event) => {
      const rightAnswer = event.target.value == item.right 

      rights.delete(item)
      if(rightAnswer) {
        rights.add(item)
      }

      showTotal.textContent = `${rights.size} de ${totalOfQuestions}`
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)
}
