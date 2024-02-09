const questions = [
  {
    question: "Qual é uma estratégia eficaz para melhorar a qualidade dos estudos?",
    response: [
      "Estudar em um ambiente com muitas distrações",
      "Fazer intervalos curtos e frequentes durante o estudo",
      "Procrastinar e deixar tudo para última hora"
    ],
    right: 1
  },
  {
    question: "Qual é uma maneira de aumentar a compreensão do material estudado?",
    response: [
      "Ler rapidamente sem se preocupar em entender",
      "Fazer anotações e resumos durante o estudo",
      "Ignorar as partes complicadas do material"
    ],
    right: 1
  },
  {
    question: "O que é importante para manter o foco durante os estudos?",
    response: [
      "Multitarefa, realizando várias atividades ao mesmo tempo",
      "Dividir o tempo de estudo em blocos e se concentrar em uma tarefa por vez",
      "Deixar o celular por perto para responder mensagens rapidamente"
    ],
    right: 1
  },
  {
    question: "Qual é a importância de revisar regularmente o material estudado?",
    response: [
      "Revisar apenas uma vez no final do estudo é suficiente",
      "Não é necessário revisar, pois tudo será lembrado facilmente",
      "Revisar regularmente ajuda a fixar o conteúdo na memória a longo prazo"
    ],
    right: 2
  },
  {
    question: "O que pode prejudicar a qualidade dos estudos?",
    response: [
      "Estabelecer metas claras e alcançáveis",
      "Dormir o suficiente e manter uma alimentação saudável",
      "Estudar por longos períodos sem pausas adequadas"
    ],
    right: 2
  },
  {
    question: "Qual é um benefício de praticar exercícios físicos durante os estudos?",
    response: [
      "Aumentar o tempo dedicado aos estudos",
      "Melhorar a capacidade de concentração e reduzir o estresse",
      "Diminuir a necessidade de descanso durante o estudo"
    ],
    right: 1
  },
  {
    question: "Como evitar a procrastinação nos estudos?",
    response: [
      "Deixar para estudar apenas quando sentir vontade",
      "Dividir as tarefas em partes menores e estabelecer prazos",
      "Não estabelecer metas ou objetivos claros"
    ],
    right: 1
  },
  {
    question: "O que pode ajudar a melhorar a retenção de informações?",
    response: [
      "Estudar apenas uma vez e não revisar o material",
      "Fazer revisões espaçadas ao longo do tempo",
      "Ignorar a prática de exercícios relacionados ao assunto"
    ],
    right: 1
  },
  {
    question: "Qual é a importância de criar um cronograma de estudos?",
    response: [
      "Não é necessário criar um cronograma, basta estudar quando der vontade",
      "Manter o estudo desorganizado e sem horários específicos",
      "Organizar o tempo e garantir uma distribuição adequada das matérias"
    ],
    right: 2
  },
  {
    question: "O que é recomendado para manter a motivação durante os estudos?",
    response: [
      "Comparar seu progresso com o de outras pessoas",
      "Estabelecer metas realistas e celebrar conquistas",
      "Desistir facilmente diante dos desafios"
    ],
    right: 1
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const rights = new Set()
const totalOfQuestions = questions.length
const showTotal = document.querySelector('#success span')
showTotal.textContent = `${rights.size} de ${totalOfQuestions}`

for(const item of questions) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.question

  for(response of item.response) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = response
    dt.querySelector('input').setAttribute('name', `question-${questions.indexOf(item)}`)
    dt.querySelector('input').value = item.response.indexOf(response)
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