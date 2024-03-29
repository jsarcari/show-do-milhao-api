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
        "category": "Ciência",
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
        "category": "Ciência",
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
        "category": "Ciência",
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
        "category": "Ciência",
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
        "difficulty": "hard",
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
        "difficulty": "hard",
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
        "category": "Ciência",
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
        "category": "Ciência",
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
      "category": "Ciência",
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
      "category": "Ciência",
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
      "category": "Ciência",
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
      "category": "Ciência",
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
      "category": "Ciência",
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
      "category": "Ciência",
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
      "category": "Ciência",
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
      "question": "Qual a unidade de peso utilizada para medir a delicadeza da seda e das fibras feitas pelo homem?",
      "correct_answer": "Denier",
      "difficulty": "hard",
      "category": "Ciência",
      "incorrect_answers": [
        "TOJ",
        "ELL",
        "RLI"
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
      "category": "Ciência",
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
      "category": "Ciência",
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
      "category": "Ciência",
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
      "category": "Ciência",
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
