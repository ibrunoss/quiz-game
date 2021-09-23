import QuestionModel from "../model/question";
import AlternativeModel from "../model/alternative";

const questions: QuestionModel[] = [
  new QuestionModel(306, "Qual bicho transmite a Doença de Chagas?", [
    AlternativeModel.wrong("Abelha"),
    AlternativeModel.wrong("Barata"),
    AlternativeModel.wrong("Pulga"),
    AlternativeModel.correct("Barbeiro"),
  ]),
  new QuestionModel(
    202,
    'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    [
      AlternativeModel.wrong("Caju"),
      AlternativeModel.wrong("Coco"),
      AlternativeModel.wrong("Chuchu"),
      AlternativeModel.correct("Abóbora"),
    ]
  ),
  new QuestionModel(203, "Qual é o coletivo de cães?", [
    AlternativeModel.wrong("Manada"),
    AlternativeModel.wrong("Alcateia"),
    AlternativeModel.wrong("Rebanho"),
    AlternativeModel.correct("Matilha"),
  ]),
  new QuestionModel(
    204,
    "Qual é o triângulo que tem todos os lados diferentes?",
    [
      AlternativeModel.wrong("Equilátero"),
      AlternativeModel.wrong("Isósceles"),
      AlternativeModel.wrong("Trapézio"),
      AlternativeModel.correct("Escaleno"),
    ]
  ),
  new QuestionModel(205, "Quem compôs o Hino da Independência?", [
    AlternativeModel.wrong("Castro Alves"),
    AlternativeModel.wrong("Manuel Bandeira"),
    AlternativeModel.wrong("Carlos Gomes"),
    AlternativeModel.correct("Dom Pedro I"),
  ]),
  new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
    AlternativeModel.wrong("Perder"),
    AlternativeModel.wrong("Fracassar"),
    AlternativeModel.wrong("Desprezar"),
    AlternativeModel.correct("Conseguir"),
  ]),
  new QuestionModel(207, "Em que país nasceu Carmen Miranda?", [
    AlternativeModel.wrong("Argentina"),
    AlternativeModel.wrong("Espanha"),
    AlternativeModel.wrong("Brasil"),
    AlternativeModel.correct("Portugal"),
  ]),
  new QuestionModel(
    208,
    "Qual foi o último Presidente do período da ditadura militar no Brasil?",
    [
      AlternativeModel.wrong("Costa e Silva"),
      AlternativeModel.wrong("Emílio Médici"),
      AlternativeModel.wrong("Ernesto Geisel"),
      AlternativeModel.correct("João Figueiredo"),
    ]
  ),
  new QuestionModel(
    209,
    "Seguindo a sequência do baralho, qual carta vem depois do dez?",
    [
      AlternativeModel.wrong("Ás"),
      AlternativeModel.wrong("Nove"),
      AlternativeModel.wrong("Rei"),
      AlternativeModel.correct("Valete"),
    ]
  ),
  new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
    AlternativeModel.wrong("Vela"),
    AlternativeModel.wrong("Vento"),
    AlternativeModel.wrong("Vênia"),
    AlternativeModel.correct("Veia"),
  ]),
  new QuestionModel(211, "Que nome se dá à purificação por meio da água?", [
    AlternativeModel.wrong("Abrupção"),
    AlternativeModel.wrong("Abolição"),
    AlternativeModel.wrong("Abnegação"),
    AlternativeModel.correct("Ablução"),
  ]),
  new QuestionModel(
    212,
    "Qual montanha se localiza entre a fronteira do Tibet com o Nepal?",
    [
      AlternativeModel.wrong("Monte Branco"),
      AlternativeModel.wrong("Monte Fuji"),
      AlternativeModel.wrong("Monte Carlo"),
      AlternativeModel.correct("Monte Everest"),
    ]
  ),
  new QuestionModel(213, "Em que parte do corpo se encontra a epiglote?", [
    AlternativeModel.wrong("Estômago"),
    AlternativeModel.wrong("Pâncreas"),
    AlternativeModel.wrong("Rim"),
    AlternativeModel.correct("Pescoço"),
  ]),
  new QuestionModel(214, "A compensação por perda é chamada de...", [
    AlternativeModel.wrong("Déficit"),
    AlternativeModel.wrong("Indexação"),
    AlternativeModel.wrong("Indébito"),
    AlternativeModel.correct("Indenização"),
  ]),
  new QuestionModel(
    215,
    "Que personagem do folclore brasileiro tem uma perna só?",
    [
      AlternativeModel.wrong("Cuca"),
      AlternativeModel.wrong("Curupira"),
      AlternativeModel.wrong("Boitatá"),
      AlternativeModel.correct("Saci-pererê"),
    ]
  ),
  new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
    AlternativeModel.wrong("Marechal Deodoro"),
    AlternativeModel.wrong("Barão de Mauá"),
    AlternativeModel.wrong("Marquês de Pombal"),
    AlternativeModel.correct("Duque de Caxias"),
  ]),
];

export default questions;
