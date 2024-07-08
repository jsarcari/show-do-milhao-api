import { Injectable } from '@nestjs/common';
import { QuestionEntity } from './question.entity';

@Injectable()
export class QuestionRepository {
  private questions: QuestionEntity[] = [
      {
        "id": 0,
        "question": "Qual é a capital dos Estados Unidos?",
        "correct_answer": "Washington",
        "difficulty": "easy",
        "category": "Geografia",
        "incorrect_answers": [
          "Nova York",
          "Miami",
          "Chicago"
        ]
      },
      {
        "id": 1,
        "question": "Qual réptil que muda de cor conforme o ambiente e o meio onde vive?",
        "correct_answer": "Camaleão",
        "difficulty": "medium",
        "category": "Ciências",
        "incorrect_answers": [
          "Sapo",
          "Lagarto",
          "Jacaré"
        ]
      },
      {
        "id": 2,
        "question": "Em um ano bissexto que mês tem um dia a mais?",
        "correct_answer": "Fevereiro",
        "difficulty": "easy",
        "category": "Conhecimentos gerais",
        "incorrect_answers": [
          "Março",
          "Abril",
          "Outubro"
        ]
      },
      {
        "id": 3,
        "question": "Qual alimento não é derivado do leite?",
        "correct_answer": "Mostarda",
        "difficulty": "easy",
        "category": "Conhecimentos gerais",
        "incorrect_answers": [
          "Queijo",
          "Iogurte",
          "Coalhada"
        ]
      },
      {
        "id": 4,
        "question": "Como é conhecida a campanha que alerta a sociedade sobre a prevenção do câncer de mama?",
        "correct_answer": "Outubro rosa",
        "difficulty": "easy",
        "category": "Conhecimentos gerais",
        "incorrect_answers": [
          "Janeiro branco",
          "Setembro amarelo",
          "Novembro azul"
        ]
      },
      {
        "id": 5,
        "question": "Qual desses órgãos faz parte do aparelho digestivo?",
        "correct_answer": "Intestino",
        "difficulty": "easy",
        "category": "Ciências",
        "incorrect_answers": [
          "Baço",
          "Pulmão",
          "Rim"
        ]
      },
      {
        "id": 6,
        "question": "Quem é o homem de aço das histórias em quadrinhos?",
        "correct_answer": "Superman",
        "difficulty": "easy",
        "category": "Filmes, desenhos e televisão",
        "incorrect_answers": [
          "Batman",
          "Hulk",
          "He-man"
        ]
      },
      {
        "id": 7,
        "question": "Qual dessas palavras não é um palíndromo?",
        "correct_answer": "Uva",
        "difficulty": "easy",
        "category": "Português e literatura",
        "incorrect_answers": [
          "Arara",
          "Reviver",
          "Osso"
        ]
      },
      {
        "id": 8,
        "question": "Qual é a moeda oficial dos Estados Unidos?",
        "correct_answer": "Dólar",
        "difficulty": "easy",
        "category": "Conhecimentos gerais",
        "incorrect_answers": [
          "Escudo",
          "Coroa",
          "Libra"
        ]
      },
      {
        "id": 9,
        "question": "O saquê é uma bebida originária de qual país?",
        "correct_answer": "Japão",
        "difficulty": "medium",
        "category": "Conhecimentos gerais",
        "incorrect_answers": [
          "Estados Unidos",
          "Coréia do Sul",
          "China"
        ]
      },
      {
        "id": 10,
        "question": "Quem libertou os escravos em 1888?",
        "correct_answer": "Princesa Isabel",
        "difficulty": "easy",
        "category": "História e política",
        "incorrect_answers": [
          "Joana d'Arc",
          "Anita Garibaldi",
          "Imperatriz Leopoldina"
        ]
      },
      {
        "id": 11,
        "question": "Que criatura mitológica é metade mulher e metade peixe?",
        "correct_answer": "Sereia",
        "difficulty": "easy",
        "category": "Conhecimentos gerais",
        "incorrect_answers": [
          "Medusa",
          "Cleópatra",
          "Iemanjá"
        ]
      },
      {
        "id": 12,
        "question": "Qual atriz protagonizou ao lado de Leonardo Da Vinci o filme Titanic?",
        "correct_answer": "Kate Winslet",
        "difficulty": "medium",
        "category": "Filmes, desenhos e televisão",
        "incorrect_answers": [
          "Cameron Diaz",
          "Bridget Fonda",
          "C. Zetta Jones"
        ]
      },
      {
        "id": 13,
        "question": "Onde é mais usado o sismógrafo?",
        "correct_answer": "Terremotos",
        "difficulty": "medium",
        "category": "Geografia",
        "incorrect_answers": [
          "Furacões",
          "Maremotos",
          "Tempestades"
        ]
      },
      {
        "id": 14,
        "question": "Qual orixá é conhecida como a Rainha do Mar?",
        "correct_answer": "Iemanjá",
        "difficulty": "medium",
        "category": "Conhecimentos gerais",
        "incorrect_answers": [
          "Mamãe Oxum",
          "Pomba-gira",
          "Iansã"
        ]
      },
      {
        "id": 15,
        "question": "Qual o recipiente utilizado para conservar quente os liquidos que contém?",
        "correct_answer": "Garrafa térmica",
        "difficulty": "easy",
        "category": "Ciências",
        "incorrect_answers": [
          "Jarra",
          "Bacia",
          "Taça"
        ]
      },
      {
        "id": 16,
        "question": "A compensação por perda é chamada de:",
        "correct_answer": "Indenização",
        "difficulty": "hard",
        "category": "Matemática",
        "incorrect_answers": [
          "Déficit",
          "Indexação",
          "Indébito"
        ]
      },
      {
        "id": 17,
        "question": "Qual é o nome dado aos segmentos ósseos dos dedos das mãos e dos pés?",
        "correct_answer": "Falange",
        "difficulty": "hard",
        "category": "Ciências",
        "incorrect_answers": [
          "Clavícula",
          "Temporal",
          "Esterno"
        ]
      },
      {
        "id": 18,
        "question": "Qual destes itens tem numerador e denominador?",
        "correct_answer": "Fração",
        "difficulty": "medium",
        "category": "Matemática",
        "incorrect_answers": [
          "Soma",
          "Multiplicação",
          "Potência"
        ]
      },
      {
        "id": 19,
        "question": "Qual autor escreveu \"Primeiras Estórias\"?",
        "correct_answer": "Guimarães Rosa",
        "difficulty": "hard",
        "category": "Português e literatura",
        "incorrect_answers": [
          "Olavo Bilac",
          "Euclides da Cunha",
          "José de Alencar"
        ]
      },
      {
        "id": 20,
        "question": "Quem foi eleito presidente da África do Sul em 1994?",
        "correct_answer": "Nelson Mandela",
        "difficulty": "easy",
        "category": "História e política",
        "incorrect_answers": [
          "Nelson Piquet",
          "Nelson Eddy",
          "John Nelson"
        ]
      },
      {
        "id": 21,
        "question": "Qual história Francis Ford Coppola dirigiu em três partes",
        "correct_answer": "O Poderoso Chefão",
        "difficulty": "medium",
        "category": "Filmes, desenhos e televisão",
        "incorrect_answers": [
          "Titanic",
          "Sexta-feira treze",
          "Guerra nas estrelas"
        ]
      },
      {
        "id": 22,
        "question": "Com quantos graus centígrados a água ferve?",
        "correct_answer": "100",
        "difficulty": "medium",
        "category": "Ciências",
        "incorrect_answers": [
          "200",
          "170",
          "220"
        ]
      },
      {
        "id": 23,
        "question": "Quantos signos astrológicos formam o zoodíaco?",
        "correct_answer": "12",
        "difficulty": "medium",
        "category": "Geografia",
        "incorrect_answers": [
          "9",
          "10",
          "11"
        ]
      },
      {
        "id": 24,
        "question": "Como se chama o alimento extraído pelas plantas do solo?",
        "correct_answer": "Seiva",
        "difficulty": "hard",
        "category": "Ciências",
        "incorrect_answers": [
          "Celulose",
          "Mitose",
          "Clorofila"
        ]
      },
      {
        "id": 25,
        "question": "Qual jogador brasileiro de futebol recebeu o apelido de Imperador duarante sua passagem pela Itália?",
        "correct_answer": "Adriano",
        "difficulty": "medium",
        "category": "Esportes",
        "incorrect_answers": [
          "Robinho",
          "Marcelinho Carioca",
          "Dunga"
        ]
      },
    {
      "id": 26,
      "question": "Qual órgão do nosso corpo produz a urina",
      "correct_answer": "Rim",
      "difficulty": "medium",
      "category": "Ciências",
      "incorrect_answers": [
        "Fígado",
        "Coração",
        "Boca"
      ]
    },
    {
      "id": 27,
      "question": "Qual é o metal encontrado no interior de um termômetro?",
      "correct_answer": "Mercúrio",
      "difficulty": "medium",
      "category": "Ciências",
      "incorrect_answers": [
        "Aço",
        "Alumínio",
        "Ferro"
      ]
    },
    {
      "id": 28,
      "question": "Qual composto químico representa a fórmula Pb(NO3)2?",
      "correct_answer": "Nitrato de Chumbo",
      "difficulty": "hard",
      "category": "Ciências",
      "incorrect_answers": [
        "Ácido Fluorídrico",
        "Cloreto de Cromilo",
        "Nitrato de Amônio"
      ]
    },
    {
      "id": 29,
      "question": "Linha que estabelece a mais curta distância entre dois pontos é a:",
      "correct_answer": "Reta",
      "difficulty": "medium",
      "category": "Matemática",
      "incorrect_answers": [
        "Curva",
        "Ângulo",
        "Zig-zague"
      ]
    },
    {
      "id": 30,
      "question": "Quem é o primeiro substituto do presidente?",
      "correct_answer": "Vice-presidente",
      "difficulty": "easy",
      "category": "História e política",
      "incorrect_answers": [
        "Vereador",
        "Senador",
        "Deputado"
      ]
    },
    {
      "id": 31,
      "question": "Quem dirigiu o filme \"Central do Brasil\" indicado para o Oscar como o melhor filme estrangeiro em 1999?",
      "correct_answer": "Walter Salles Jr.",
      "difficulty": "hard",
      "category": "Filmes, desenhos e televisão",
      "incorrect_answers": [
        "Bruno Barreto",
        "Hector Babenco",
        "Arnaldo Jabor"
      ]
    },
    {
      "id": 32,
      "question": "Qual a fórmula química da água?",
      "correct_answer": "H20",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "HO",
        "H",
        "H02"
      ]
    },
    {
      "id": 33,
      "question": "De quantos em quantos dias a lua muda de fase?",
      "correct_answer": "7",
      "difficulty": "medium",
      "category": "Geografia",
      "incorrect_answers": [
        "5",
        "8",
        "15"
      ]
    },
    {
      "id": 34,
      "question": "Como é o nome do riacho em cujas margens foi proclamada a independência do Brasil?",
      "correct_answer": "Ipiranga",
      "difficulty": "easy",
      "category": "História e política",
      "incorrect_answers": [
        "Cambuci",
        "Sacomâ",
        "Independente"
      ]
    },
    {
      "id": 35,
      "question": "Quantos centavos tem 1 real?",
      "correct_answer": "Cem",
      "difficulty": "easy",
      "category": "Matemática",
      "incorrect_answers": [
        "Dez",
        "Mil",
        "Cinquenta"
      ]
    },
    {
      "id": 36,
      "question": "Quantas dentições tem o ser humano durante a vida?",
      "correct_answer": "Duas",
      "difficulty": "hard",
      "category": "Ciências",
      "incorrect_answers": [
        "Uma",
        "Três",
        "Quatro"
      ]
    },
    {
      "id": 37,
      "question": "Qual é a pedra preciosa mais dura encontrada na natureza?",
      "correct_answer": "Diamante",
      "difficulty": "hard",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Esmeralda",
        "Rubi",
        "Pérola"
      ]
    },
    {
      "id": 38,
      "question": "Qual a cantora que tinha o apelido de Ternurinha na época da jovem guarda?",
      "correct_answer": "Wanderléia",
      "difficulty": "hard",
      "category": "História e política",
      "incorrect_answers": [
        "Silvinha",
        "Gretchen",
        "Martinha"
      ]
    },
    {
      "id": 39,
      "question": "Qual era o código da identidade secreta do James Bond?",
      "correct_answer": "007",
      "difficulty": "easy",
      "category": "Filmes, desenhos e televisão",
      "incorrect_answers": [
        "707",
        "907",
        "008"
      ]
    },
    {
      "id": 40,
      "question": "A que continente pertence o Rio Amazonas?",
      "correct_answer": "Americano",
      "difficulty": "easy",
      "category": "Geografia",
      "incorrect_answers": [
        "Africano",
        "Europeu",
        "Asiático"
      ]
    },
    {
      "id": 41,
      "question": "Qual estação é conhecida como a que caem as folhas das árvores?",
      "correct_answer": "Outono",
      "difficulty": "medium",
      "category": "Geografia",
      "incorrect_answers": [
        "Verão",
        "Inverno",
        "Primavera"
      ]
    },
    {
      "id": 42,
      "question": "Qual a profissão dos sete anões?",
      "correct_answer": "Mineradores",
      "difficulty": "medium",
      "category": "Filmes, desenhos e televisão",
      "incorrect_answers": [
        "Lenhadores",
        "Agricultores",
        "Pastores"
      ]
    },
    {
      "id": 43,
      "question": "Qual é considerado o mês das noivas?",
      "correct_answer": "Maio",
      "difficulty": "easy",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Setembro",
        "Junho",
        "Novembro"
      ]
    },
    {
      "id": 44,
      "question": "Qual é a teoria unificada desenvolvida para explicar a relação entre a eletricidade e o magnetismo?",
      "correct_answer": "Eletromagnetismo",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "Gravitação",
        "Movimento Browniano",
        "Mecanismo"
      ]
    },
    {
      "id": 45,
      "question": "O salto em distância é uma modalidade de qual desses esportes?",
      "correct_answer": "Atletismo",
      "difficulty": "easy",
      "category": "Esportes",
      "incorrect_answers": [
        "Voleibol",
        "Automobilismo",
        "Natação"
      ]
    },
    {
      "id": 46,
      "question": "O que é uma partitura?",
      "correct_answer": "Representação escrita da música",
      "difficulty": "medium",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Modelo de repartição de bens",
        "Método de corte de carne",
        "Equipamento utilizado no futebol americano"
      ]
    },
    {
      "id": 47,
      "question": "Titubear é o mesmo que:",
      "correct_answer": "Hesitar",
      "difficulty": "hard",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Aprovar",
        "Concordar",
        "Aceitar"
      ]
    },
    {
      "id": 48,
      "question": "Em qual cidade italiana está localizado o Coliseu?",
      "correct_answer": "Roma",
      "difficulty": "medium",
      "category": "História e política",
      "incorrect_answers": [
        "Milão",
        "Veneza",
        "Florença"
      ]
    },
    {
      "id": 49,
      "question": "Qual é o coletivo de borboletas?",
      "correct_answer": "Panapaná",
      "difficulty": "hard",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Cardume",
        "Enxame",
        "Cáfila"
      ]
    },
    {
      "id": 50,
      "question": "Em um prédio, quem é o responsável pela administração do condomínio?",
      "correct_answer": "Síndico",
      "difficulty": "easy",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Inquilino",
        "Locador",
        "Porteiro"
      ]
    },
    {
      "id": 51,
      "question": "A qual família pertence o tigre?",
      "correct_answer": "Felídeos",
      "difficulty": "hard",
      "category": "Ciências",
      "incorrect_answers": [
        "Canídeos",
        "Suídeos",
        "Bovídeos"
      ]
    },
    {
      "id": 52,
      "question": "Qual desses sentimentos é simbolizado por uma pomba branca?",
      "correct_answer": "Paz",
      "difficulty": "easy",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Saudade",
        "Coragem",
        "Esperança"
      ]
    },
    {
      "id": 53,
      "question": "No futebol, após quantos cartões amarelos o jogador recebe um cartão vermelho?",
      "correct_answer": "Dois",
      "difficulty": "easy",
      "category": "Esportes",
      "incorrect_answers": [
        "Três",
        "Cinco",
        "Quatro"
      ]
    },
    {
      "id": 54,
      "question": "Qual era o verdadeiro nome do cantor Tim Maia?",
      "correct_answer": "Sebastião",
      "difficulty": "medium",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Francisco",
        "João",
        "Joaquim"
      ]
    },
    {
      "id": 55,
      "question": "Como é chamado cada capítulo do alcorão?",
      "correct_answer": "Surata",
      "difficulty": "hard",
      "category": "História e política",
      "incorrect_answers": [
        "Suna",
        "Sefardim",
        "Torá"
      ]
    },
    {
      "id": 56,
      "question": "Quem proclamou a república do Brasil em 1889?",
      "correct_answer": "Marechal Deodoro",
      "difficulty": "medium",
      "category": "História e política",
      "incorrect_answers": [
        "Duque de Caxias",
        "Dom Pedro II",
        "Marechal Rondon"
      ]
    },
    {
      "id": 57,
      "question": "Por quanto se deve multiplicar o número romano coberto com traço horizontal?",
      "correct_answer": "1000",
      "difficulty": "hard",
      "category": "Matemática",
      "incorrect_answers": [
        "100",
        "200",
        "500"
      ]
    },
    {
      "id": 58,
      "question": "Mike Tyson se destacou mundialmente em qual esporte?",
      "correct_answer": "Boxe",
      "difficulty": "easy",
      "category": "Esportes",
      "incorrect_answers": [
        "Futebol americano",
        "Basquete",
        "Tênis"
      ]
    },
    {
      "id": 59,
      "question": "Qual é o estabelecimento que vende especificamente materiais de costura?",
      "correct_answer": "Armarinho",
      "difficulty": "easy",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Papelaria",
        "Sebo",
        "Quitanda"
      ]
    },
    {
      "id": 60,
      "question": "Qual é a sigla do Movimento dos Trabalhadores Rurais Sem-Terra?",
      "correct_answer": "MST",
      "difficulty": "easy",
      "category": "História e política",
      "incorrect_answers": [
        "MTS",
        "MTRS",
        "MTRST"
      ]
    },
    {
      "id": 61,
      "question": "Qual é o local de trabalho de um presbítero?",
      "correct_answer": "Igreja",
      "difficulty": "easy",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Escola",
        "Delegacia",
        "Museu"
      ]
    },
    {
      "id": 62,
      "question": "O que é fagote?",
      "correct_answer": "Instrumento de sopro",
      "difficulty": "medium",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Incêndio",
        "Foguete pequeno",
        "Frango pequeno"
      ]
    },
    {
      "id": 63,
      "question": "Uma hora e quarenta minutos corresponde a:",
      "correct_answer": "100 minutos",
      "difficulty": "easy",
      "category": "Matemática",
      "incorrect_answers": [
        "90 minutos",
        "80 minutos",
        "110 minutos"
      ]
    },
    {
      "id": 64,
      "question": "As variações da luz refletida pela lua são chamadas de:",
      "correct_answer": "Fases",
      "difficulty": "medium",
      "category": "Geografia",
      "incorrect_answers": [
        "Formas",
        "Cores",
        "Marés"
      ]
    },
    {
      "id": 65,
      "question": "Uma equipe de vôlei começa uma partida com quantos titulares em quadra?",
      "correct_answer": "Seis",
      "difficulty": "medium",
      "category": "Esportes",
      "incorrect_answers": [
        "Cinco",
        "Sete",
        "Oito"
      ]
    },
    {
      "id": 66,
      "question": "Qual é a capital do Iraque?",
      "correct_answer": "Bagdá",
      "difficulty": "medium",
      "category": "Geografia",
      "incorrect_answers": [
        "Belém",
        "Beirute",
        "Budapeste"
      ]
    },
    {
      "id": 67,
      "question": "Que presidente dos Estados Unidos foi ator de cinema?",
      "correct_answer": "Ronald Reagan",
      "difficulty": "hard",
      "category": "Filmes, desenhos e televisão",
      "incorrect_answers": [
        "George Bush",
        "Richard Nixon",
        "Bill Clinton"
      ]
    },
    {
      "id": 68,
      "question": "Como é chamado o lugar sagrado dos judeus?",
      "correct_answer": "Sinagoga",
      "difficulty": "medium",
      "category": "História e política",
      "incorrect_answers": [
        "Igreja",
        "Capela",
        "Altar"
      ]
    },
    {
      "id": 69,
      "question": "Qual é o país que participou de todas as copas do mundo de futebol?",
      "correct_answer": "Brasil",
      "difficulty": "easy",
      "category": "Esportes",
      "incorrect_answers": [
        "Itália",
        "Uruguai",
        "Argentina"
      ]
    },
    {
      "id": 70,
      "question": "Qual a parte da física estuda os fenômenos visuais?",
      "correct_answer": "Óptica",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "Cinemática",
        "Eletromagnetismo",
        "Termodinâmica"
      ]
    },
    {
      "id": 71,
      "question": "Em qual desses estados está localizado o Pantanal brasileiro?",
      "correct_answer": "Mato Grosso",
      "difficulty": "easy",
      "category": "Geografia",
      "incorrect_answers": [
        "Paraná",
        "Amazonas",
        "Goiás"
      ]
    },
    {
      "id": 72,
      "question": "Quais são os naipes vermelhos do baralho?",
      "correct_answer": "Ouros e copas",
      "difficulty": "hard",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Copas e paus",
        "Paus e ouros",
        "Espadas e paus"
      ]
    },
    {
      "id": 73,
      "question": "A patente de brigadeiro é concedida a um membro:",
      "correct_answer": "Da aeronáutica",
      "difficulty": "medium",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Da marinha",
        "Do exército",
        "Do FBI"
      ]
    },
    {
      "id": 74,
      "question": "Qual é o menor número divisível por 6?",
      "correct_answer": "6",
      "difficulty": "easy",
      "category": "Matemática",
      "incorrect_answers": [
        "12",
        "36",
        "24"
      ]
    },
    {
      "id": 75,
      "question": "Em que dia é iniciado o verão no Brasil?",
      "correct_answer": "21 de dezembro",
      "difficulty": "medium",
      "category": "Geografia",
      "incorrect_answers": [
        "19 de dezembro",
        "23 de dezembro",
        "25 de dezembro"
      ]
    },
    {
      "id": 76,
      "question": "Qual a área médica que estuda o sistema endócrino?",
      "correct_answer": "Endocrinologia",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "Encrinobiologia",
        "Endocrinolobia",
        "Biocrinologia"
      ]
    },
    {
      "id": 77,
      "question": "Quem eram os primeiros habitantes do Brasil?",
      "correct_answer": "Índios",
      "difficulty": "easy",
      "category": "História e política",
      "incorrect_answers": [
        "Espanhois",
        "Não havia ninguém",
        "Portugueses"
      ]
    },
    {
      "id": 78,
      "question": "Harry Potter é selecionado para qual casa em A Pedra Filosofal?",
      "correct_answer": "Grifinória",
      "difficulty": "medium",
      "category": "Filmes, desenhos e televisão",
      "incorrect_answers": [
        "Sonserina",
        "Lufa-lufa",
        "Cornival"
      ]
    },
    {
      "id": 79,
      "question": "A sigla 'Cl' representa qual elemento da tabela periódica?",
      "correct_answer": "Cloro",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "Cobalto",
        "Césio",
        "Cobre"
      ]
    },
    {
      "id": 80,
      "question": "Qual dessas substâncias é um sedativo?",
      "correct_answer": "Morfina",
      "difficulty": "easy",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Adrenalina",
        "Anfetamina",
        "Acetona"
      ]
    },
    {
      "id": 81,
      "question": "Qual é a praça em São Paulo que leva o nome da pessoa que trouxe o futebol para o Brasil?",
      "correct_answer": "Praça Charles Miller",
      "difficulty": "hard",
      "category": "Esportes",
      "incorrect_answers": [
        "Praça Rudolfo Spoon",
        "Praça Stewart Kildon",
        "Praça Joseph Smith"
      ]
    },
    {
      "id": 82,
      "question": "Raí Souza Vieira de Oliveira é o nome de batismo de qual famoso ex-jogador de futebol?",
      "correct_answer": "Raí",
      "difficulty": "easy",
      "category": "Esportes",
      "incorrect_answers": [
        "Neto",
        "Capitão",
        "Sócrates"
      ]
    },
    {
      "id": 83,
      "question": "Quem foi o herói lendário que tirava sua força dos cabelos?",
      "correct_answer": "Sansão",
      "difficulty": "medium",
      "category": "História e política",
      "incorrect_answers": [
        "Hércules",
        "João Batista",
        "Golias"
      ]
    },
    {
      "id": 84,
      "question": "Como eram chamados os navios que traziam os escravos para o Brasil?",
      "correct_answer": "Negreiros",
      "difficulty": "easy",
      "category": "História e política",
      "incorrect_answers": [
        "Branqueiros",
        "Pesqueiros",
        "Petroleiros"
      ]
    },
    {
      "id": 85,
      "question": "Quando começou e terminou a primeira guerra mundial?",
      "correct_answer": "1914-1918",
      "difficulty": "medium",
      "category": "História e política",
      "incorrect_answers": [
        "1902-1908",
        "1920-1930",
        "1912-1915"
      ]
    },
    {
      "id": 86,
      "question": "Qual planta era usada pelos egípcios para escrever desde a antiguidade?",
      "correct_answer": "Papiro",
      "difficulty": "medium",
      "category": "História e política",
      "incorrect_answers": [
        "Eucalipto",
        "Oliveira",
        "Milho"
      ]
    },
    {
      "id": 87,
      "question": "Qual metal avermelhado que cria uma camada esverdeada quando em contato com a umidade?",
      "correct_answer": "Cobre",
      "difficulty": "hard",
      "category": "Ciências",
      "incorrect_answers": [
        "Ferro",
        "Mercúrio",
        "Aço"
      ]
    },
    {
      "id": 88,
      "question": "Qual letra do alfabeto simboliza o número dez em algarismos romanos?",
      "correct_answer": "X",
      "difficulty": "easy",
      "category": "Matemática",
      "incorrect_answers": [
        "V",
        "D",
        "L"
      ]
    },
    {
      "id": 89,
      "question": "Quem é o autor do manifesto comunista?",
      "correct_answer": "Karl Marx",
      "difficulty": "medium",
      "category": "História e política",
      "incorrect_answers": [
        "Lenin",
        "Gorbatchov",
        "Allan Kardec"
      ]
    },
    {
      "id": 90,
      "question": "Em que estado americano fica a cidade de Miami?",
      "correct_answer": "Flórida",
      "difficulty": "medium",
      "category": "Geografia",
      "incorrect_answers": [
        "Alasca",
        "Nova York",
        "Califórnia"
      ]
    },
    {
      "id": 91,
      "question": "Labareda é uma língua de:",
      "correct_answer": "Fogo",
      "difficulty": "easy",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Palha",
        "Fumaça",
        "Gelo"
      ]
    },
    {
      "id": 92,
      "question": "Qual o nome do mago da corte do Rei Arthur?",
      "correct_answer": "Merlin",
      "difficulty": "hard",
      "category": "História e política",
      "incorrect_answers": [
        "Próspero",
        "Mandrake",
        "Excalibur"
      ]
    },
    {
      "id": 93,
      "question": "Qual dessas plantas não tem espinho?",
      "correct_answer": "Samambaia",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "Cacto",
        "Babosa",
        "Roseira"
      ]
    },
    {
      "id": 94,
      "question": "Quem é Courtney Love?",
      "correct_answer": "Cantora",
      "difficulty": "medium",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Escritora",
        "Jornalista",
        "Cartunista"
      ]
    },
    {
      "id": 95,
      "question": "Quantos minutos tem 8 horas?",
      "correct_answer": "480",
      "difficulty": "medium",
      "category": "Matemática",
      "incorrect_answers": [
        "450",
        "430",
        "410"
      ]
    },
    {
      "id": 96,
      "question": "O que estuda a zoologia?",
      "correct_answer": "Animais",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "Vegetais",
        "Minerais",
        "Natureza"
      ]
    },
    {
      "id": 97,
      "question": "Quem foi o último rei da Macedônia?",
      "correct_answer": "Perseu",
      "difficulty": "hard",
      "category": "História e política",
      "incorrect_answers": [
        "Prometeu",
        "Hércules",
        "Dioniso"
      ]
    },
    {
      "id": 98,
      "question": "Qual é o número que multiplicado por ele mesmo resulta 49?",
      "correct_answer": "Sete",
      "difficulty": "easy",
      "category": "Matemática",
      "incorrect_answers": [
        "Nove",
        "Oito",
        "Seis"
      ]
    },
    {
      "id": 99,
      "question": "Como é chamada a criação de coelhos?",
      "correct_answer": "Cunicultura",
      "difficulty": "medium",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Avicultura",
        "Ranicultura",
        "Sericicultura"
      ]
    },
    {
      "id": 100,
      "question": "O que não falha é:",
      "correct_answer": "Infalível",
      "difficulty": "easy",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Enfalível",
        "Enfalhível",
        "Infalhível"
      ]
    },
    {
      "id": 101,
      "question": "O que é Tem-tem?",
      "correct_answer": "Ave",
      "difficulty": "medium",
      "category": "Ciências",
      "incorrect_answers": [
        "Comida",
        "Mamífero",
        "Ilha"
      ]
    },
    {
      "id": 102,
      "question": "Segundo a mitologia, qual é o nome da serpente morta por Hércules?",
      "correct_answer": "Hidra",
      "difficulty": "hard",
      "category": "História e política",
      "incorrect_answers": [
        "Centauro",
        "Anaconda",
        "Naja"
      ]
    },
    {
      "id": 103,
      "question": "Um número natural é divisível por 10 quando termina em:",
      "correct_answer": "0",
      "difficulty": "easy",
      "category": "Matemática",
      "incorrect_answers": [
        "3",
        "5",
        "13"
      ]
    },
    {
      "id": 104,
      "question": "Qual desses esportes se pratica descalço?",
      "correct_answer": "Karatê",
      "difficulty": "easy",
      "category": "Esportes",
      "incorrect_answers": [
        "Tênis",
        "Futebol de salão",
        "Boxe"
      ]
    },
    {
      "id": 105,
      "question": "Tomé de Sousa fundou qual cidade, capital do Brasil até 1763?",
      "correct_answer": "Salvador",
      "difficulty": "medium",
      "category": "Geografia",
      "incorrect_answers": [
        "Curitiba",
        "Rio de Janeiro",
        "São Paulo"
      ]
    },
    {
      "id": 106,
      "question": "O que é sarampo?",
      "correct_answer": "Uma doença",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "Um sapo",
        "Uma dança",
        "Um peixe"
      ]
    },
    {
      "id": 107,
      "question": "O que é ejetar?",
      "correct_answer": "Expelir",
      "difficulty": "medium",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Habilitar",
        "Rejeitar",
        "Aplicar injeção"
      ]
    },
    {
      "id": 108,
      "question": "O estudo da origem e distribuição das plantas na terra se chama:",
      "correct_answer": "Fitogeografia",
      "difficulty": "medium",
      "category": "Geografia",
      "incorrect_answers": [
        "Geografia humana",
        "Geografia política",
        "Antropologia"
      ]
    },
    {
      "id": 109,
      "question": "O que é gastronomia?",
      "correct_answer": "Arte de cozinhar",
      "difficulty": "easy",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Dilatação do estômago",
        "Infecção estomacal",
        "Mania de gastar dinheiro"
      ]
    },
    {
      "id": 110,
      "question": "Que termo podemos dar ao Pré-modernismo?",
      "correct_answer": "Vasta produção literária",
      "difficulty": "hard",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Fora dos padrões",
        "Produção literária reduzida",
        "Algo moderno"
      ]
    },
    {
      "id": 111,
      "question": "Qual é a capital de Honduras?",
      "correct_answer": "Tegucigalpa",
      "difficulty": "hard",
      "category": "Geografia",
      "incorrect_answers": [
        "Panamá",
        "Bogotá",
        "Lima"
      ]
    },
    {
      "id": 112,
      "question": "As aranhas pertencem a qual classe?",
      "correct_answer": "Artrópodes",
      "difficulty": "hard",
      "category": "Ciências",
      "incorrect_answers": [
        "Gastrópodes",
        "Crustáceos",
        "Moluscos"
      ]
    },
    {
      "id": 113,
      "question": "O míssil V-2 era uma arma de qual país?",
      "correct_answer": "Alemanha",
      "difficulty": "hard",
      "category": "História e política",
      "incorrect_answers": [
        "Estados Unidos",
        "Inglaterra",
        "Itália"
      ]
    },
    {
      "id": 114,
      "question": "Qual é o movimento estético baseado na quebra dos padrões racionais?",
      "correct_answer": "Surrealismo",
      "difficulty": "hard",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Barroco",
        "Futurismo",
        "Arcadismo"
      ]
    },
    {
      "id": 115,
      "question": "O que é corta-jaca?",
      "correct_answer": "Espécie de dança",
      "difficulty": "hard",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Faca",
        "Tipo de facão",
        "Cutelo"
      ]
    },
    {
      "id": 116,
      "question": "Onde fica Marrocos?",
      "correct_answer": "Na África",
      "difficulty": "easy",
      "category": "Geografia",
      "incorrect_answers": [
        "Na Turquia",
        "Na Austrália",
        "Na Índia"
      ]
    },
    {
      "id": 117,
      "question": "De qual flor é extraído óleo para uso culinário?",
      "correct_answer": "Girassol",
      "difficulty": "medium",
      "category": "Ciências",
      "incorrect_answers": [
        "Rosa",
        "Cravo",
        "Margarida"
      ]
    },
    {
      "id": 118,
      "question": "Quantas décadas tem um século?",
      "correct_answer": "Dez",
      "difficulty": "easy",
      "category": "Matemática",
      "incorrect_answers": [
        "Cem",
        "Mil",
        "Cento e dez"
      ]
    },
    {
      "id": 119,
      "question": "Qual é o significado da expressão desembolsar?",
      "correct_answer": "Gastar",
      "difficulty": "easy",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Ganhar",
        "Receber",
        "Lucrar"
      ]
    },
    {
      "id": 120,
      "question": "Como é chamado o olfato dos animais?",
      "correct_answer": "Faro",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "Visão",
        "Gosto",
        "Tato"
      ]
    },
    {
      "id": 121,
      "question": "Como é chamada a discussão criada sobre um determinado assunto?",
      "correct_answer": "Polêmica",
      "difficulty": "easy",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Engate",
        "Anúncio",
        "Fábula"
      ]
    },
    {
      "id": 122,
      "question": "Onde está a incapacidade do daltônico?",
      "correct_answer": "Nos olhos",
      "difficulty": "easy",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Na face",
        "No nariz",
        "No ouvido"
      ]
    },
    {
      "id": 123,
      "question": "Qual é o resultado da oxidação do ferro?",
      "correct_answer": "Ferrugem",
      "difficulty": "medium",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Ferrão",
        "Ferroada",
        "Ferreiro"
      ]
    },
    {
      "id": 124,
      "question": "Qual é o estreito que une o golfo de São Lourenço ao Atlântico?",
      "correct_answer": "Cabot",
      "difficulty": "hard",
      "category": "Geografia",
      "incorrect_answers": [
        "De Bass",
        "De Canso",
        "De Dampier"
      ]
    },
    {
      "id": 125,
      "question": "Qual é o estreito conhecido como Passo de Calais?",
      "correct_answer": "De Dover",
      "difficulty": "hard",
      "category": "Geografia",
      "incorrect_answers": [
        "De Hudson",
        "De Lombok",
        "De Malaca"
      ]
    },
    {
      "id": 126,
      "question": "Qual é a divisa natural entre Piauí e Maranhão?",
      "correct_answer": "Rio Parnaíba",
      "difficulty": "medium",
      "category": "Geografia",
      "incorrect_answers": [
        "Rio Jaguaribe",
        "Rio Itapecuru",
        "Rio São Francisco"
      ]
    },
    {
      "id": 127,
      "question": "El Salvador fica as margens de qual oceano?",
      "correct_answer": "Pacífico",
      "difficulty": "medium",
      "category": "Geografia",
      "incorrect_answers": [
        "Índico",
        "Atlântico",
        "Glacial Ártico"
      ]
    },
    {
      "id": 128,
      "question": "Em que país está situada a região de Antofagasta?",
      "correct_answer": "Chile",
      "difficulty": "hard",
      "category": "Geografia",
      "incorrect_answers": [
        "Rússia",
        "Nigéria",
        "Afeganistão"
      ]
    },
    {
      "id": 129,
      "question": "Qual é a capital das Filipinas?",
      "correct_answer": "Manila",
      "difficulty": "medium",
      "category": "Geografia",
      "incorrect_answers": [
        "Kingston",
        "Jacarta",
        "Budapeste"
      ]
    },
    {
      "id": 130,
      "question": "Águas pluviais são provenientes...",
      "correct_answer": "Chuva",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "Mar",
        "Córrego",
        "Lago"
      ]
    },
    {
      "id": 131,
      "question": "Em 1953, o guerrilheiro Che Guevara formou-se em:",
      "correct_answer": "Medicina",
      "difficulty": "hard",
      "category": "História e política",
      "incorrect_answers": [
        "Engenharia",
        "Direito",
        "Jornalismo"
      ]
    },
    {
      "id": 132,
      "question": "Qual desses elementos químicos não é um metal?",
      "correct_answer": "Iodo",
      "difficulty": "medium",
      "category": "Ciências",
      "incorrect_answers": [
        "Prata",
        "Ouro",
        "Mercúrio"
      ]
    },
    {
      "id": 133,
      "question": "No início de qual década foi construído o Muro de Berlim?",
      "correct_answer": "Década de 60",
      "difficulty": "hard",
      "category": "História e política",
      "incorrect_answers": [
        "Década de 70",
        "Década de 50",
        "Década de 80"
      ]
    },
    {
      "id": 134,
      "question": "Qual é o horário em que os ponteiros do relógio fazem um ângulo de 180° graus?",
      "correct_answer": "09:15",
      "difficulty": "medium",
      "category": "Matemática",
      "incorrect_answers": [
        "17:00",
        "12:20",
        "12:00"
      ]
    },
    {
      "id": 135,
      "question": "Qual dessas aves perdeu a capacidade de voar ao longo da sua evolução?",
      "correct_answer": "Avestruz",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "Condor",
        "Pombo",
        "Águia"
      ]
    },
    {
      "id": 136,
      "question": "Qual nome se dá ao grupo de alimentos que inclui o leite, o queijo e manteiga?",
      "correct_answer": "Laticínios",
      "difficulty": "easy",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Lactobacilos",
        "Farináceos",
        "Cereais"
      ]
    },
    {
      "id": 137,
      "question": "Qual desses países faz fronteira com a Colômbia?",
      "correct_answer": "Panamá",
      "difficulty": "hard",
      "category": "Geografia",
      "incorrect_answers": [
        "Honduras",
        "Costa Rica",
        "Bolívia"
      ]
    },
    {
      "id": 138,
      "question": "Qual era uma das principais características dos maias?",
      "correct_answer": "Astronomia",
      "difficulty": "medium",
      "category": "História e política",
      "incorrect_answers": [
        "Cães",
        "Homem",
        "Flores"
      ]
    },
    {
      "id": 139,
      "question": "Quem protagoniza o filme Momentos Decisivos?",
      "correct_answer": "Gene Hackman",
      "difficulty": "hard",
      "category": "Filmes, desenhos e televisão",
      "incorrect_answers": [
        "Mel Gibson",
        "Dustin Hoffman",
        "Robert Duvall"
      ]
    },
    {
      "id": 140,
      "question": "Qual destas frutas é associada ao Natal?",
      "correct_answer": "Noz",
      "difficulty": "easy",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Banana",
        "Tangerina",
        "Jabuticaba"
      ]
    },
    {
      "id": 141,
      "question": "Em qual ano aconteceu a maior rebelião de presos no Brasil?",
      "correct_answer": "2001",
      "difficulty": "hard",
      "category": "História e política",
      "incorrect_answers": [
        "2000",
        "2002",
        "2003"
      ]
    },
    {
      "id": 142,
      "question": "Qual desses cantores não foi integrante do grupo Os Novos Baianos?",
      "correct_answer": "Elba Ramalho",
      "difficulty": "hard",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Pepeu Gomes",
        "Baby Consuelo",
        "Moraes Moreira"
      ]
    },
    {
      "id": 143,
      "question": "Qual é o antônimo de superfluo?",
      "correct_answer": "Necessário",
      "difficulty": "medium",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Apressado",
        "Superior",
        "Aquecido"
      ]
    },
    {
      "id": 144,
      "question": "Qual raça de cães foi treinada para resgate nos alpes suíços?",
      "correct_answer": "São Bernardo",
      "difficulty": "hard",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Chiuaua",
        "Rottweiler",
        "Pastor alemão"
      ]
    },
    {
      "id": 145,
      "question": "Qual cantor era chamado Rei do Baião?",
      "correct_answer": "Luiz Gonzaga",
      "difficulty": "medium",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Teixeirinha",
        "Sivuca",
        "Gonzaguinha"
      ]
    },
    {
      "id": 146,
      "question": "O que é um brioche?",
      "correct_answer": "Pão",
      "difficulty": "easy",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Anel",
        "Escultura",
        "Broche"
      ]
    },
    {
      "id": 147,
      "question": "Qual nome é dado a ausência congênita dos dentes?",
      "correct_answer": "Anodontia",
      "difficulty": "hard",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Dentina",
        "Dentologia",
        "Anododontia"
      ]
    },
    {
      "id": 148,
      "question": "Qual é o triângulo que tem todos os lados diferentes?",
      "correct_answer": "Escaleno",
      "difficulty": "medium",
      "category": "Matemática",
      "incorrect_answers": [
        "Equilatero",
        "Isósceles",
        "Trapézio"
      ]
    },
    {
      "id": 149,
      "question": "Qual é o nome da sede do poder executivo e residência oficial do Presidente da República dos EUA?",
      "correct_answer": "Casa Branca",
      "difficulty": "easy",
      "category": "História e política",
      "incorrect_answers": [
        "Casa Rosada",
        "Pentágono",
        "Nasa"
      ]
    },
    {
      "id": 150,
      "question": "Qual dessas unidades podemos usar para o espaço?",
      "correct_answer": "Metro",
      "difficulty": "medium",
      "category": "Ciências",
      "incorrect_answers": [
        "Segundos",
        "Centímetros",
        "Milímetros"
      ]
    },
    {
      "id": 151,
      "question": "Nehru foi primeiro ministro de qual país?",
      "correct_answer": "Índia",
      "difficulty": "hard",
      "category": "História e política",
      "incorrect_answers": [
        "Egito",
        "Líbia",
        "Marrocos"
      ]
    },
    {
      "id": 152,
      "question": "O tratato de Tordesilhas foi assinado em qual ano?",
      "correct_answer": "1494",
      "difficulty": "hard",
      "category": "História e política",
      "incorrect_answers": [
        "1490",
        "1500",
        "1493"
      ]
    },
    {
      "id": 153,
      "question": "Em qual ano foi fundada a OMS?",
      "correct_answer": "1948",
      "difficulty": "hard",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "1900",
        "1952",
        "1980"
      ]
    },
    {
      "id": 154,
      "question": "Como se chama a substância utilizada para acabar com pragas em plantações?",
      "correct_answer": "Agrotóxicos",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "Cloro",
        "Eliminatórias",
        "Cândida"
      ]
    },
    {
      "id": 155,
      "question": "Qual é o nome de sais do ácido hipocloroso?",
      "correct_answer": "Hipoclorito",
      "difficulty": "medium",
      "category": "Ciências",
      "incorrect_answers": [
        "Clorato",
        "Nitrato",
        "Metaborato"
      ]
    },
    {
      "id": 156,
      "question": "A carta descrevendo a chegada de Pedro Alvarez Cabral ao Brasil foi enviada ao rei de Portugal, D. Manuel, por:",
      "correct_answer": "Pero Vaz de Caminha",
      "difficulty": "medium",
      "category": "História e política",
      "incorrect_answers": [
        "José Saramago",
        "Francisco Adolfo",
        "Bento Teixeira"
      ]
    },
    {
      "id": 157,
      "question": "Tecido epitelial é o mesmo que:",
      "correct_answer": "Pele",
      "difficulty": "hard",
      "category": "Ciências",
      "incorrect_answers": [
        "Ossos",
        "Músculos",
        "Cabelo"
      ]
    },
    {
      "id": 158,
      "question": "Qual seleção venceu a copa do mundo de 1998?",
      "correct_answer": "França",
      "difficulty": "medium",
      "category": "Esportes",
      "incorrect_answers": [
        "Brasil",
        "Itália",
        "Uruguai"
      ]
    },
    {
      "id": 159,
      "question": "Qual é o nome da água não-poluída e livre de agentes contaminantes ideal para ser consumida?",
      "correct_answer": "Água potável",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "Água-régia",
        "Água doce",
        "Água oxigenada"
      ]
    },
    {
      "id": 160,
      "question": "Qual é a unidade de medida da corrente elétrica?",
      "correct_answer": "Ampere",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "Metro",
        "Quilograma",
        "Segundo"
      ]
    },
    {
      "id": 161,
      "question": "Qual é a identidade secreta do Batman?",
      "correct_answer": "Bruce Wayne",
      "difficulty": "medium",
      "category": "Filmes, desenhos e televisão",
      "incorrect_answers": [
        "Bruce Baner",
        "Clark Kent",
        "Lex Lutor"
      ]
    },
    {
      "id": 162,
      "question": "Quem foi Cora Coralina?",
      "correct_answer": "Escritora e poetisa",
      "difficulty": "hard",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Pintora",
        "Cantora",
        "Médica"
      ]
    },
    {
      "id": 163,
      "question": "A botânica consite em:",
      "correct_answer": "Estudar as plantas",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "Estudar as bactérias",
        "Estudar os fungos",
        "Estudar os animais"
      ]
    },
    {
      "id": 164,
      "question": "O princípio da inércia foi desenvolvido por quem?",
      "correct_answer": "Newton",
      "difficulty": "medium",
      "category": "Ciências",
      "incorrect_answers": [
        "Medved",
        "Pitágoras",
        "Mendel"
      ]
    },
    {
      "id": 165,
      "question": "Qual é o nome da maior premiação do cinema mundial?",
      "correct_answer": "Oscar",
      "difficulty": "easy",
      "category": "Filmes, desenhos e televisão",
      "incorrect_answers": [
        "Nobel",
        "Globo de Ouro",
        "Festival de Cannes"
      ]
    },
    {
      "id": 166,
      "question": "A aquarela é feita com:",
      "correct_answer": "Pigmento e água",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "Glitter",
        "Água raz",
        "Carvão"
      ]
    },
    {
      "id": 167,
      "question": "Qual desses jogadores estrangeiros teve passagem por clube brasileiro em 2005?",
      "correct_answer": "Tevez",
      "difficulty": "easy",
      "category": "Esportes",
      "incorrect_answers": [
        "Zidane",
        "Maradona",
        "Cristiano Ronaldo"
      ]
    },
    {
      "id": 168,
      "question": "Como é chamado o encontro de católicos para discussão de assuntos religiosos?",
      "correct_answer": "Concílio",
      "difficulty": "hard",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Missa",
        "Multirão",
        "Quermesse"
      ]
    },
    {
      "id": 169,
      "question": "Segundo a bíblia, Abel foi um:",
      "correct_answer": "Pastor de ovelhas",
      "difficulty": "hard",
      "category": "História e política",
      "incorrect_answers": [
        "Pastor de igreja",
        "Lavrador de terra",
        "Rei"
      ]
    },
    {
      "id": 170,
      "question": "Como é chamado o favorecimento de parentes praticado pelos que detém o poder?",
      "correct_answer": "Nepotismo",
      "difficulty": "medium",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Absolutismo",
        "Socialismo",
        "Despotismo"
      ]
    },
    {
      "id": 171,
      "question": "Qual é o nome da primeira cosmonauta a realizar um vôo espacial?",
      "correct_answer": "Valentina",
      "difficulty": "hard",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Clementina",
        "Josefina",
        "Terezinha"
      ]
    },
    {
      "id": 172,
      "question": "Oryza Sativa é o nome científico de qual desses cereais?",
      "correct_answer": "Arroz",
      "difficulty": "hard",
      "category": "Ciências",
      "incorrect_answers": [
        "Trigo",
        "Milho",
        "Aveia"
      ]
    },
    {
      "id": 173,
      "question": "No Brasil, a Semana de Arte Moderna deu origem a qual movimento?",
      "correct_answer": "Modernismo",
      "difficulty": "medium",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Romantismo",
        "Barroco",
        "Arcadismo"
      ]
    },
    {
      "id": 174,
      "question": "Descritiva, narrativa e dissertativa são tipos de:",
      "correct_answer": "Redação",
      "difficulty": "medium",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Conjugações",
        "Antônimos",
        "Suplementares"
      ]
    },
    {
      "id": 175,
      "question": "Qual é o principal ingrediente da mariola?",
      "correct_answer": "Banana",
      "difficulty": "medium",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Canela",
        "Mandioca",
        "Gengibre"
      ]
    },
    {
      "id": 176,
      "question": "A palavra destinto significa:",
      "correct_answer": "Descorado",
      "difficulty": "hard",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Diferente",
        "Formidável",
        "Inconfundível"
      ]
    },
    {
      "id": 177,
      "question": "A respiração tegumentar é semelhante a qual respiração?",
      "correct_answer": "Cutânea",
      "difficulty": "hard",
      "category": "Ciências",
      "incorrect_answers": [
        "Traquial",
        "Pulmonar",
        "Branquial"
      ]
    },
    {
      "id": 178,
      "question": "Entrada franca em um espetáculo significa...",
      "correct_answer": "Entrada gratuíta",
      "difficulty": "easy",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Entrada proibida",
        "Entrada para menores",
        "Entrada para maiores"
      ]
    },
    {
      "id": 179,
      "question": "Qual é a bebida originada da pigmentação do suco de uva?",
      "correct_answer": "Vinho",
      "difficulty": "easy",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Cerveja",
        "Uísque",
        "Saquê"
      ]
    },
    {
      "id": 180,
      "question": "O que foi contruído por Noé?",
      "correct_answer": "Uma arca",
      "difficulty": "easy",
      "category": "História e política",
      "incorrect_answers": [
        "Uma torre",
        "Uma esfinge",
        "Uma pirâmide"
      ]
    },
    {
      "id": 181,
      "question": "Qual desses elementos atrai o ferro e outros metais?",
      "correct_answer": "Imã",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "Lapela",
        "Pátina",
        "Broche"
      ]
    },
    {
      "id": 182,
      "question": "Qual dessas palavras não se refere a aluno?",
      "correct_answer": "Catedrático",
      "difficulty": "hard",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Estudante",
        "Discente",
        "Discípulo"
      ]
    },
    {
      "id": 183,
      "question": "Em qual destes esportes não é necessário um goleiro?",
      "correct_answer": "Basquete",
      "difficulty": "easy",
      "category": "Esportes",
      "incorrect_answers": [
        "Futebol",
        "Pólo aquático",
        "Handebol"
      ]
    },
    {
      "id": 184,
      "question": "A palavra sol é:",
      "correct_answer": "Monossílaba",
      "difficulty": "easy",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Trissílaba",
        "Polissílaba",
        "Dissílaba"
      ]
    },
    {
      "id": 185,
      "question": "Qual o oceano que banha o litoral brasileiro?",
      "correct_answer": "Atlântico",
      "difficulty": "easy",
      "category": "Geografia",
      "incorrect_answers": [
        "Ártico",
        "Pacífico",
        "Índico"
      ]
    },
    {
      "id": 186,
      "question": "O que é Via Láctea?",
      "correct_answer": "Galáxia",
      "difficulty": "easy",
      "category": "Geografia",
      "incorrect_answers": [
        "Marca de leite",
        "Civilização antiga",
        "Marca de carro"
      ]
    },
    {
      "id": 187,
      "question": "Qual dessas cartas não pertence a um baralho comum?",
      "correct_answer": "Barão",
      "difficulty": "easy",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Dama",
        "Valete",
        "Rei"
      ]
    },
    {
      "id": 188,
      "question": "Como é chamado o andamento natural dos cavalos?",
      "correct_answer": "Trote",
      "difficulty": "easy",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Corrida",
        "Partida",
        "Capote"
      ]
    },
    {
      "id": 189,
      "question": "Qual cineasta dirigiu o filme Lawrence da Arábia?",
      "correct_answer": "David Lean",
      "difficulty": "medium",
      "category": "Filmes, desenhos e televisão",
      "incorrect_answers": [
        "Brian de Palma",
        "Michael Anderson",
        "Orson Welles"
      ]
    },
    {
      "id": 190,
      "question": "Como é chamada a bebida dos deuses da mitologia?",
      "correct_answer": "Néctar",
      "difficulty": "medium",
      "category": "História e política",
      "incorrect_answers": [
        "Manjar",
        "Soro",
        "Xarope"
      ]
    },
    {
      "id": 191,
      "question": "Qual palavra é usada para fazer referência a algo que ocorreu de imprevisto?",
      "correct_answer": "Contratempo",
      "difficulty": "easy",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Contrativo",
        "Contratrilho",
        "Contraste"
      ]
    },
    {
      "id": 192,
      "question": "Qual o plural da palavra fácil?",
      "correct_answer": "Fáceis",
      "difficulty": "easy",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Fácis",
        "Fácils",
        "Fácius"
      ]
    },
    {
      "id": 193,
      "question": "Qual dessas palavras está relacionada ao futebol?",
      "correct_answer": "Embaixada",
      "difficulty": "medium",
      "category": "Esportes",
      "incorrect_answers": [
        "Consulado",
        "Prefeitura",
        "Convento"
      ]
    },
    {
      "id": 194,
      "question": "O poema \"O Navio Negreiro\" foi escrito por qual poeta brasileiro?",
      "correct_answer": "Castro Alves",
      "difficulty": "hard",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Álvares de Azevedo",
        "Manuel Bandeira",
        "Augusto dos Anjos"
      ]
    },
    {
      "id": 195,
      "question": "Carlos Magno foi monarca de qual dinastia?",
      "correct_answer": "Carolíngia",
      "difficulty": "hard",
      "category": "História e política",
      "incorrect_answers": [
        "Borgonha",
        "Windsor",
        "Cassita"
      ]
    },
    {
      "id": 196,
      "question": "Além da ema, qual dessas outras aves não voa?",
      "correct_answer": "Pinguim",
      "difficulty": "easy",
      "category": "Ciências",
      "incorrect_answers": [
        "Canário",
        "Beija-flor",
        "Papagaio"
      ]
    },
    {
      "id": 197,
      "question": "Qual é o nome do primeiro cachorro a ir para o espaço?",
      "correct_answer": "Laika",
      "difficulty": "hard",
      "category": "Geografia",
      "incorrect_answers": [
        "Bob",
        "Shake",
        "Dolly"
      ]
    },
    {
      "id": 198,
      "question": "Qual é o satélite natural da Terra?",
      "correct_answer": "Lua",
      "difficulty": "easy",
      "category": "Geografia",
      "incorrect_answers": [
        "Sol",
        "Marte",
        "Júpiter"
      ]
    },
    {
      "id": 199,
      "question": "Qual desses esportes envolve touros?",
      "correct_answer": "Rodeio",
      "difficulty": "easy",
      "category": "Esportes",
      "incorrect_answers": [
        "Futebol",
        "Tênis",
        "Boliche"
      ]
    },
    {
      "id": 200,
      "question": "O que queria o leão de O Mágico de Oz?",
      "correct_answer": "Coragem",
      "difficulty": "easy",
      "category": "Filmes, desenhos e televisão",
      "incorrect_answers": [
        "Força",
        "Coração",
        "Cérebro"
      ]
    },
    {
      "id": 201,
      "question": "Açores é um arquipélago que pertence a qual país?",
      "correct_answer": "Portugal",
      "difficulty": "easy",
      "category": "Geografia",
      "incorrect_answers": [
        "Espanha",
        "França",
        "Inglaterra"
      ]
    },
    {
      "id": 202,
      "question": "Que esporte pratica a equipe do Chicago Bulls?",
      "correct_answer": "Basquete",
      "difficulty": "easy",
      "category": "Esportes",
      "incorrect_answers": [
        "Vôlei",
        "Natação",
        "Futebol"
      ]
    },
    {
      "id": 203,
      "question": "Como é chamado o distintivo de uma pessoa ou família nobre?",
      "correct_answer": "Brasão",
      "difficulty": "medium",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Coroa",
        "Medalhão",
        "Broche"
      ]
    },
    {
      "id": 204,
      "question": "Quais são os naipes pretos das cartas de baralho?",
      "correct_answer": "Espada e paus",
      "difficulty": "hard",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Copas e ouro",
        "Ouro e paus",
        "Copas e espada"
      ]
    },
    {
      "id": 205,
      "question": "A energia do núcleo do átomo é:",
      "correct_answer": "Uma energia nuclear",
      "difficulty": "hard",
      "category": "Ciências",
      "incorrect_answers": [
        "Uma energia química",
        "Uma energia térmica",
        "Uma energia cinética"
      ]
    },
    {
      "id": 206,
      "question": "Um ponto elevado de onde se aprecia vistas panorâmicas é chamado de:",
      "correct_answer": "Mirante",
      "difficulty": "medium",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Porto",
        "Encosta",
        "Orla"
      ]
    },
    {
      "id": 207,
      "question": "O que é uma epístola?",
      "correct_answer": "Carta",
      "difficulty": "medium",
      "category": "Português e literatura",
      "incorrect_answers": [
        "Música",
        "Filme",
        "Desenho"
      ]
    },
    {
      "id": 208,
      "question": "Onde podemos encontrar estalactites?",
      "correct_answer": "Em cavernas",
      "difficulty": "medium",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Em igrejas",
        "Em escolas",
        "Em hospitais"
      ]
    },
    {
      "id": 209,
      "question": "O que faz um lapidário?",
      "correct_answer": "Lapida pedras preciosas",
      "difficulty": "easy",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Limpa panelas",
        "Aponta lápis",
        "Faz lâmpadas"
      ]
    },
    {
      "id": 210,
      "question": "Hermeto Pascoal é um:",
      "correct_answer": "Músico",
      "difficulty": "medium",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Seminarista",
        "Técnico de futebol",
        "Culinarista"
      ]
    },
    {
      "id": 211,
      "question": "Qual é o planeta mais próximo da Terra?",
      "correct_answer": "Vênus",
      "difficulty": "medium",
      "category": "Geografia",
      "incorrect_answers": [
        "Plutão",
        "Marte",
        "Urano"
      ]
    },
    {
      "id": 212,
      "question": "Qual é o profissional relacionado à extração do látex?",
      "correct_answer": "Seringueiro",
      "difficulty": "easy",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Marceneiro",
        "Carpinteiro",
        "Serralheiro"
      ]
    },
    {
      "id": 213,
      "question": "Qual desses esportes não utiliza taco?",
      "correct_answer": "Futebol",
      "difficulty": "easy",
      "category": "Esportes",
      "incorrect_answers": [
        "Beisebol",
        "Hóquei",
        "GOlfe"
      ]
    },
    {
      "id": 214,
      "question": "Qual pigmento presente no sangue é responsável pela fixação do oxigênio?",
      "correct_answer": "Hemoglobina",
      "difficulty": "hard",
      "category": "Ciências",
      "incorrect_answers": [
        "Globulina",
        "Glóbulos brancos",
        "Glóbulos vermelhos"
      ]
    },
    {
      "id": 215,
      "question": "Silvicultura é o estudo de:",
      "correct_answer": "Florestas",
      "difficulty": "hard",
      "category": "Ciências",
      "incorrect_answers": [
        "Serpentes",
        "Raposas",
        "Sereias"
      ]
    },
    {
      "id": 216,
      "question": "A pleura é uma membrana responsável por facilitar os movimentos de qual órgão?",
      "correct_answer": "Pulmão",
      "difficulty": "medium",
      "category": "Ciências",
      "incorrect_answers": [
        "Rim",
        "Estômago",
        "Coração"
      ]
    },
    {
      "id": 217,
      "question": "Qual foi o primeiro país das Américas a tornar-se socialista em 1959?",
      "correct_answer": "Cuba",
      "difficulty": "medium",
      "category": "História e política",
      "incorrect_answers": [
        "Equador",
        "Estados Unidos",
        "Canadá"
      ]
    },
    {
      "id": 218,
      "question": "Qual é o molusco que lança uma tinta escura quando ameaçado?",
      "correct_answer": "Polvo",
      "difficulty": "medium",
      "category": "Ciências",
      "incorrect_answers": [
        "Golfinho",
        "Orca",
        "Salmão"
      ]
    },
    {
      "id": 219,
      "question": "A cidade de Jacarta é a capital de qual desses países?",
      "correct_answer": "Indonésia",
      "difficulty": "hard",
      "category": "Geografia",
      "incorrect_answers": [
        "Tailândia",
        "Moçambique",
        "Malásia"
      ]
    },
    {
      "id": 220,
      "question": "Qual é o exame laboratorial que se destina à detecção de anticorpos anti-HIV?",
      "correct_answer": "Elisa",
      "difficulty": "medium",
      "category": "Ciências",
      "incorrect_answers": [
        "DNA",
        "Papanicolau",
        "Ultra-som"
      ]
    },
    {
      "id": 221,
      "question": "Qual é a moeda do Peru?",
      "correct_answer": "Sol novo",
      "difficulty": "hard",
      "category": "Conhecimentos gerais",
      "incorrect_answers": [
        "Peso",
        "Guarani",
        "Sucre"
      ]
    },
    {
      "id": 222,
      "question": "A dendrologia é o estudo científico de:",
      "correct_answer": "Árvores",
      "difficulty": "hard",
      "category": "Ciências",
      "incorrect_answers": [
        "Moluscos",
        "Satélites",
        "Caracóis"
      ]
    }
  ];

  async save(question: QuestionEntity) {
    this.questions.push(question);
  }

  async list() {
    return this.questions;
  }

  async existsWithId(id: Number) {
    const possibleQuestion = this.questions.find(
      question => question.id === id
    );

    return possibleQuestion !== undefined;
  }

  async update(id: Number, updateData: Partial<QuestionEntity>) {
    
    const question = this.getQuestion(id);

    Object.entries(updateData).forEach(([key, value]) => {

      question[key] = value;

      return question;
    })
  }

  private getQuestion(id: Number) {
    const possibleQuestion = this.questions.find(
        questionSalved => questionSalved.id === id
    );

    if(!possibleQuestion) {
      throw new Error('Question not found.');
    }

    return possibleQuestion;
  }

  async remove(id: Number) {
    const question = this.getQuestion(id);
    this.questions = this.questions.filter(
        questionSalved => questionSalved.id !== id
    );

    return question;
  }
}
