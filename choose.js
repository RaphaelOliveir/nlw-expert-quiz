document.querySelector('button').addEventListener('click', function() {
  const bandSelected = document.querySelector('.textBox').value
  let questions = []

  switch (bandSelected) {
    case ('AC/DC'):
      questions = [
        {
          question: "Qual foi o álbum de estreia do AC/DC lançado em 1975?",
          response: [
            "High Voltage",
            "Dirty Deeds Done Dirt Cheap",
            "Highway to Hell"
          ],
          right: 0
        },
        {
          question: "Quem foi o primeiro vocalista do AC/DC?",
          response: [
            "Brian Johnson",
            "Bon Scott",
            "Angus Young"
          ],
          right: 1
        },
        {
          question: "Qual música do AC/DC foi tema do filme 'Homem de Ferro'?",
          response: [
            "Highway to Hell",
            "Thunderstruck",
            "Back in Black"
          ],
          right: 2
        },
        {
          question: "Qual álbum do AC/DC é considerado um dos mais vendidos da história?",
          response: [
            "High Voltage",
            "For Those About to Rock We Salute You",
            "Back in Black"
          ],
          right: 2
        },
        {
          question: "Qual é o nome do guitarrista principal do AC/DC?",
          response: [
            "Angus Young",
            "Malcolm Young",
            "Cliff Williams"
          ],
          right: 0
        },
        {
          question: "Qual era o nome da banda originalmente antes de se chamar AC/DC?",
          response: [
            "The Rolling Stones",
            "The Easybeats",
            "The Youngs"
          ],
          right: 1
        },
        {
          question: "Qual é a nacionalidade dos irmãos fundadores do AC/DC, Angus e Malcolm Young?",
          response: [
            "Australiana",
            "Americana",
            "Inglesa"
          ],
          right: 0
        },
        {
          question: "Qual é o título do álbum que marcou o retorno da banda após a morte de Bon Scott?",
          response: [
            "Flick of the Switch",
            "Fly on the Wall",
            "Back in Black"
          ],
          right: 2
        },
        {
          question: "Qual álbum do AC/DC contém a música 'You Shook Me All Night Long'?",
          response: [
            "High Voltage",
            "Highway to Hell",
            "Back in Black"
          ],
          right: 2
        },
        {
          question: "Qual é a sigla AC/DC usada como nome da banda representa?",
          response: [
            "Alternating Current/Direct Current",
            "After/Before Christ",
            "All Cool/Dude's Cool"
          ],
          right: 0
        },
      ];
      break;
    case ('Nirvana'):
      questions = [
        {
          question: "Qual era o nome original da banda Nirvana?",
          response: [
            "Sub Pop",
            "Pen Cap Chew",
            "Fecal Matter"
          ],
          right: 2
        },
        {
          question: "Qual álbum do Nirvana foi lançado após a morte de Kurt Cobain?",
          response: [
            "Nevermind",
            "In Utero",
            "MTV Unplugged in New York"
          ],
          right: 1
        },
        {
          question: "Quem substituiu Jason Everman como segundo guitarrista do Nirvana?",
          response: [
            "Chad Channing",
            "Pat Smear",
            "Dave Grohl"
          ],
          right: 2
        },
        {
          question: "Qual é o álbum mais vendido do Nirvana?",
          response: [
            "Incesticide",
            "Nevermind",
            "Bleach"
          ],
          right: 1
        },
        {
          question: "O que significa o título do álbum 'In Utero'?",
          response: [
            "Dentro do útero",
            "Em desintegração",
            "Nascer de novo"
          ],
          right: 1
        },
        {
          question: "Qual música do Nirvana foi originalmente lançada como single pela banda Wipers?",
          response: [
            "Smells Like Teen Spirit",
            "Come as You Are",
            "Dive"
          ],
          right: 3
        },
        {
          question: "Qual é a origem do nome 'Nirvana'?",
          response: [
            "Uma palavra inventada",
            "Uma música dos Beatles",
            "Um termo budista para estado de iluminação"
          ],
          right: 3
        },
        {
          question: "Quem é o autor da icônica capa do álbum 'Nevermind'?",
          response: [
            "Kurt Cobain",
            "Dave Grohl",
            "Robert Fisher"
          ],
          right: 3
        },
        {
          question: "Qual é a música mais longa do Nirvana?",
          response: [
            "Radio Friendly Unit Shifter",
            "Endless, Nameless",
            "Verse Chorus Verse"
          ],
          right: 1
        },
        {
          question: "Qual é o último álbum de estúdio lançado pelo Nirvana?",
          response: [
            "In Utero",
            "Bleach",
            "MTV Unplugged in New York"
          ],
          right: 1
        },
      ];
      break;
    case ('Guns N`Roses'):
      questions = [
        {
          question: "Qual é o nome do álbum de estreia da banda Guns N'Roses?",
          response: [
            "Appetite for Destruction",
            "Use Your Illusion",
            "Chinese Democracy"
          ],
          right: 0
        },
        {
          question: "Qual é o apelido do vocalista principal do Guns N'Roses?",
          response: [
            "Slash",
            "Axl Rose",
            "Duff McKagan"
          ],
          right: 1
        },
        {
          question: "Qual é a música mais famosa do Guns N'Roses?",
          response: [
            "Sweet Child o' Mine",
            "November Rain",
            "Paradise City"
          ],
          right: 0
        },
        {
          question: "Qual é o nome do guitarrista principal do Guns N'Roses?",
          response: [
            "Duff McKagan",
            "Slash",
            "Izzy Stradlin"
          ],
          right: 1
        },
        {
          question: "Em que ano foi lançado o álbum 'Use Your Illusion'?",
          response: [
            "1991",
            "1987",
            "1993"
          ],
          right: 0
        },
        {
          question: "Qual é o nome do álbum de maior sucesso comercial do Guns N'Roses?",
          response: [
            "Appetite for Destruction",
            "Chinese Democracy",
            "Use Your Illusion II"
          ],
          right: 0
        },
        {
          question: "Qual é a origem da banda Guns N'Roses?",
          response: [
            "Reino Unido",
            "Austrália",
            "Estados Unidos"
          ],
          right: 2
        },
        {
          question: "Qual é o nome do baixista original do Guns N'Roses?",
          response: [
            "Duff McKagan",
            "Izzy Stradlin",
            "Steven Adler"
          ],
          right: 0
        },
        {
          question: "Qual é o nome do álbum lançado pelo Guns N'Roses em 2008, após uma longa pausa na carreira da banda?",
          response: [
            "Chinese Democracy",
            "Appetite for Destruction",
            "Use Your Illusion"
          ],
          right: 0
        },
        {
          question: "Qual é o apelido do guitarrista principal do Guns N'Roses?",
          response: [
            "Axl Rose",
            "Slash",
            "Duff McKagan"
          ],
          right: 1
        },
      ];
      break;
    case ('Red Hot Chilli Peppers'):
      questions = [
        {
          question: "Qual é o nome do álbum de estreia da banda Red Hot Chili Peppers?",
          response: [
            "Blood Sugar Sex Magik",
            "Californication",
            "The Red Hot Chili Peppers"
          ],
          right: 2
        },
        {
          question: "Qual é o apelido do vocalista principal da banda?",
          response: [
            "Flea",
            "John Frusciante",
            "Anthony Kiedis"
          ],
          right: 2
        },
        {
          question: "Qual desses integrantes é conhecido por tocar baixo na banda?",
          response: [
            "Chad Smith",
            "Flea",
            "Josh Klinghoffer"
          ],
          right: 1
        },
        {
          question: "Em qual cidade a banda Red Hot Chili Peppers foi formada?",
          response: [
            "Los Angeles, Califórnia",
            "Nova York, Nova York",
            "Londres, Inglaterra"
          ],
          right: 0
        },
        {
          question: "Qual é o título da canção mais famosa da banda, lançada em 1991?",
          response: [
            "Under the Bridge",
            "Scar Tissue",
            "By the Way"
          ],
          right: 0
        },
        {
          question: "Qual é o álbum mais vendido da banda até hoje?",
          response: [
            "Blood Sugar Sex Magik",
            "Californication",
            "Stadium Arcadium"
          ],
          right: 1
        },
        {
          question: "Qual destes álbuns ganhou o Grammy de Melhor Álbum de Rock?",
          response: [
            "Californication",
            "By the Way",
            "Stadium Arcadium"
          ],
          right: 2
        },
        {
          question: "Qual foi o nome da banda antes de serem conhecidos como Red Hot Chili Peppers?",
          response: [
            "Hot Stuff",
            "Red Hot Chili Sauce",
            "Tony Flow and the Miraculously Majestic Masters of Mayhem"
          ],
          right: 2
        },
        {
          question: "Qual foi o primeiro álbum da banda a alcançar o topo das paradas nos Estados Unidos?",
          response: [
            "Californication",
            "Blood Sugar Sex Magik",
            "By the Way"
          ],
          right: 1
        },
        {
          question: "Qual desses integrantes já deixou a banda temporariamente e depois retornou?",
          response: [
            "Flea",
            "Anthony Kiedis",
            "John Frusciante"
          ],
          right: 2
        },
      ];
      break;
    default:
      questions = [
        {
          question: "Qual é o nome completo do vocalista da banda Charlie Brown Jr?",
          response: [
            "Chorão Abrão",
            "Alexandre Magno Abrão",
            "Antônio Carlos Abrão"
          ],
          right: 1
        },
        {
          question: "Qual foi o álbum de estreia da banda Charlie Brown Jr?",
          response: [
            "Transpiração Contínua Prolongada",
            "Preço Curto... Prazo Longo",
            "Nadando com os Tubarões"
          ],
          right: 0
        },
        {
          question: "Em que ano a banda Charlie Brown Jr foi formada?",
          response: [
            "1991",
            "1995",
            "2000"
          ],
          right: 1
        },
        {
          question: "Qual é o nome do primeiro álbum ao vivo lançado pela banda?",
          response: [
            "Bocas Ordinárias",
            "Tamo Aí na Atividade",
            "Acústico MTV"
          ],
          right: 2
        },
        {
          question: "Quem foi o guitarrista fundador da banda?",
          response: [
            "Chorão",
            "Thiago Castanho",
            "Marcão"
          ],
          right: 1
        },
        {
          question: "Qual é o apelido de Chorão, líder da banda?",
          response: [
            "Tico",
            "Cebola",
            "Chorão"
          ],
          right: 2
        },
        {
          question: "Qual foi o último álbum lançado pela banda antes do falecimento de Chorão?",
          response: [
            "Imunidade Musical",
            "La Familia 013",
            "Camisa 10 Joga Bola Até na Chuva"
          ],
          right: 1
        },
        {
          question: "Quem substituiu Champignon como baixista da banda após sua saída em 2005?",
          response: [
            "Heitor Gomes",
            "Marcão",
            "Fernandinho Beat Box"
          ],
          right: 0
        },
        {
          question: "Em que cidade o vocalista Chorão foi encontrado morto?",
          response: [
            "São Paulo",
            "Santos",
            "Rio de Janeiro"
          ],
          right: 1
        },
        {
          question: "Qual foi o último álbum de estúdio lançado pela banda?",
          response: [
            "Camisa 10 Joga Bola Até na Chuva",
            "La Familia 013",
            "Ritmo, Ritual e Responsa"
          ],
          right: 2
        },
      ];
  }

  if (bandSelected) {
    const encodedQuestions = encodeURIComponent(JSON.stringify(questions));
    window.location.href = `index.html?band=${bandSelected}&questions=${encodedQuestions}`;
  } else {
    alert('Por favor, selecione uma banda antes de iniciar o quiz.');
  }
})

function show(bandName) {
  document.querySelector('.textBox').value = bandName
}

let dropdown = document.querySelector('.dropdown')
dropdown.onclick = function() {
  dropdown.classList.toggle('active');
}
