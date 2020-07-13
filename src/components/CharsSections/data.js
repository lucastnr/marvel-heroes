

const sections = 
[
    {
        name: "heroSection",
        title: "Heróis",
        lastSection: false,
        allData:
        [
            {
                name: "Homem Aranha",
                description: "Peter Parker",
                image: require("../../assets/chars/spider-man.png"),
                age: 24,
                weight: 78,
                height: "1.73",
                universe: "Terra 616",
                story: "Em Forest Hills, Queens, Nova York, o estudante de ensino médio, Peter Parker, é um cientista orfão que vive com seu tio Ben e tia May. Ele é mordido por uma aranha radioativa em uma exposição científica e adquire a agilidade e a força proporcional de um aracnídeo. Junto com a super força, Parker ganha a capacidade de andar nas paredes e tetos.\n\nAtravés de sua habilidade nativa para a ciência, ele desenvolve um aparelho que o permitir lançar teias artificiais. Inicialmente buscando capitalizar suas novas habilidades, Parker cria um traje e, como Homem Aranha, torna-se uma estrela de televisão.",
                movies:
                [
                    require("../../assets/movies/avengers-3.jpg"),
                    require("../../assets/movies/avengers-4.jpg"),
                    require("../../assets/movies/spider-man-1.jpg"),
                    require("../../assets/movies/spider-man-2.jpg"),
                    require("../../assets/movies/spider-man-3.jpg"),
                    require("../../assets/movies/spider-man-far-from-home.jpg"),
                    require("../../assets/movies/spider-man-homecoming.jpg"),
                    require("../../assets/movies/captain-america-3.jpg")
                ]
            },
            {
                name: "Pantera Negra",
                description: "T'Challa",
                image: require("../../assets/chars/black-panther.png"),
                age: 37,
                weight: 92,
                height: "1.83",
                universe: "Terra 616",
                story: "T'Challa ganhou o título e os atributos da Pantera Negra ao derrotar os vários campeões das tribos de Wakanda. Um de seus primeiros atos foi dissolver e exilar a Hatut Zeraze - a polícia secreta wakandana - e seu líder, seu irmão adotivo, Hunter.\n\nEle vendeu pequenas porções de vibranium para instituições científicas em todo o mundo, acumulando uma fortuna que ele costumava armar-se com tecnologia avançada. Mais tarde, para manter a paz, ele escolheu dora milajes de tribos rivais para servir como sua guarda pessoal e esposas cerimoniais em treinamento. Ele então estudou no exterior por um tempo antes de retornar ao seu reinado.",
                movies:
                [
                    require("../../assets/movies/black-panther.jpg"),
                    require("../../assets/movies/avengers-3.jpg"),
                    require("../../assets/movies/avengers-4.jpg"),
                    require("../../assets/movies/captain-america-3.jpg")
                ]
            },
            {
                name: "Homem de Ferro",
                description: "Tony Stark",
                image: require("../../assets/chars/iron-man.png"),
                age: 53,
                weight: 81,
                height: "1.74",
                universe: "Terra 616",
                story: "Durante a guerra do Vietnã, o inventor e empresário Tony Stark foi vítima de uma explosão de granada. Stark sobreviveu à explosão mas estilhaços do explosivo se alojaram próximo ao seu coração, ameaçando sua vida. Ele foi capturado e levado até o líder Wong Chu.\n\nRestavam apenas alguns dias de vida para o americano, e Wong Chu o forçou a criar uma poderosa arma. Tony não criou uma arma e sim algo que o mantivesse vivo e permitisse derrotar os captores. Preso com ele estava outro gênio, o professor Ho Yinsen. Stark revelou seu plano ao professor e Yinsen o ajudou.",
                movies:
                [
                    require("../../assets/movies/avengers-1.jpg"),
                    require("../../assets/movies/avengers-2.jpg"),
                    require("../../assets/movies/avengers-3.jpg"),
                    require("../../assets/movies/avengers-4.jpg"),
                    require("../../assets/movies/iron-man-1.jpg"),
                    require("../../assets/movies/iron-man-2.jpg"),
                    require("../../assets/movies/iron-man-3.jpg"),
                    require("../../assets/movies/spider-man-far-from-home.jpg"),
                    require("../../assets/movies/captain-america-3.jpg")
                ]
            }
        ]
    },
    {
        name: "villainSection",
        title: "Vilões",
        lastSection: false,
        allData:
        [
            {
                name: "Caveira Vermelha",
                description: "Jöhann Schmidt",
                image: require("../../assets/chars/red-skull.png"),
                age: 41,
                weight: 86,
                height: "1.88",
                universe: "Terra 616",
                story: "Jöhann Schmidt cresceu nas ruas e se tornou em um pequeno criminoso para sobreviver. Após sua mãe ter morrido durante o parto, seu pai o tentou afogar, mas acabou se suicidando, sendo o pequeno Johann salvo por um médico local.\n\nQuando já era adolescente, um comerciante judeu o acolheu e Johann se apaixonou pela filha deste, Esther. Porém, não conseguindo controlar seus impulsos, ele tentou estuprar a garota e, envolto em fúria, a espancou até à morte.\n\nFoi a partir desse momento que Johann percebeu que iria dedicar sua vida a matar e a causar dor no mundo.",
                movies:
                [
                    require("../../assets/movies/captain-america-1.jpg"),
                    require("../../assets/movies/avengers-3.jpg")
                ]
            },
            {
                name: "Doutor Destino",
                description: "Victor Von Doom",
                image: require("../../assets/chars/dr-doom.png"),
                age: 36,
                weight: 82,
                height: "1.88",
                universe: "Terra 616",
                story: "O foco da pesquisa de Doom era construir um dispositivo transdimensional de projeção com que poderia se comunicar com sua falecida mãe. Havia uma falha no projeto que Richards lhe indicou, mas o orgulho de Doom impediu-o de aceitar o conselho de Richards e consertar o dispositivo antes de o testar. A máquina trabalhou perfeitamente por dois minutos e 37 segundos, durante os quais Doom descobriu que sua mãe estava presa na região do inferno controlada por Mephisto.\n\nEm seguida o dispositivo explodiu, marcando sua face com uma longa cicatriz que sua vaidade encarava como uma desfiguração horrenda. Recusando-se a reconhecer sua própria culpa no ocorrido, Doom responsabilizou Richards pelo acidente, achando mais fácil de acreditar que Richards sabotara seu trabalho por inveja.",
                movies:
                [
                    require("../../assets/movies/fantastic-four-1.jpg")
                ]
            },
            { 
                name: "Duende Verde",
                description: "Norman Osborn",
                image: require("../../assets/chars/green-goblin.png"),
                age: 47,
                weight: 71,
                height: "1.75",
                universe: "Terra 616",
                story: "O Duende Verde é a manifestação da insanidade gerada pela indução de substâncias químicas (soro mutágênico) no cientista Norman Osborn, dono da Oscorp.\n\nNenhum vilão fez tanto quanto o alter-ego de Norman Osborn para arruinar o Escalador de Paredes. Ele descobriu a identidade do Homem-Aranha e apesar de não se lembrar sempre dela em função de suas periódicas voltas à sanidade, ao sucumbir à loucura ele sempre atacava Peter Parker.",
                movies:
                [
                    require("../../assets/movies/spider-man-1.jpg")
                ]
            }
        ]
    },
    {
        name: "antiHeroSection",
        title: "Anti-Heróis",
        lastSection: false,
        allData:
        [
            {
                name: "Deadpool",
                description: "Wade Wilson",
                image: require("../../assets/chars/deadpool.png"),
                age: 38,
                weight: 84,
                height: "1.88",
                universe: "Terra 616",
                story: "Deadpool (Wade Winston Wilson) atua geralmente como anti-herói e ocasionalmente como vilão. Deadpool, cujo nome verdadeiro é Wade Winston Wilson, é um mercenário canadense marcado por ser falastrão e violento. Tem também o fator de cura que o faz sobreviver aos piores ferimentos.",
                movies:
                [
                    require("../../assets/movies/deadpool-1.jpg"),
                    require("../../assets/movies/deadpool-2.jpg"),
                ]
            },
            {
                name: "Venom",
                description: "Eddie Brock",
                image: require("../../assets/chars/venom.png"),
                age: 34,
                weight: 74,
                height: "1.75",
                universe: "Terra 616",
                story: "Venom é o ser resultante da simbiose entre uma criatura alienígena e o jornalista Eddie Brock. Apesar de já ter tido minisséries próprias, a maioria de suas aparições é como inimigo do personagem Homem-Aranha.\n\nA característica marcante de Venom, além do uniforme negro, é a desproporcional e assustadora mandíbula, desenhada no traço de Todd MacFarlane. Antes de fundir-se ao simbionte e tornar-se o Venom, Eddie Brock era um repórter do jornal Clarim Diário.",
                movies:
                [
                    require("../../assets/movies/spider-man-3.jpg"),
                    require("../../assets/movies/venom.jpg")
                ]
            },
            { 
                name: "Justiceiro",
                description: "Frank Castle",
                image: require("../../assets/chars/punisher.png"),
                age: 43,
                weight: 84,
                height: "1.80",
                universe: "Terra 616",
                story: "Depois de voltar de um dos seus tours na guerra, Frank levou a família para passear no Central Park em Nova York. Neste mesmo dia a máfia estava conduzindo um assassinato lá e eliminou todas as testemunhas exceto uma… Castle sobreviveu, mas sua esposa e filhos não.\n\nDepois disso, ele resolveu punir os malfeitores também dentro dos Estados Unidos e usou suas habilidades como militar para conduzir sua doce vingança contra a máfia, eliminando outros criminosos em sua cidade. O resto vocês já devem imaginar. Muita, muita, mas muita morte.",
                movies:
                [
                    require("../../assets/movies/punisher.jpg"),
                ]
            }
        ]
    },
    {
        name: "alienSection",
        title: "Alienígenas",
        lastSection: false,
        allData:
        [
            {
                name: "Thanos",
                description: "Deviant",
                image: require("../../assets/chars/thanos.png"),
                age: 40,
                weight: 447,
                height: "2.70",
                universe: "Terra 616",
                story: "Thanos se voltou contra seu pai e contra o reino, forçando Mentor a procurar seu pai, Kronos. Kronos criou Drax, o Destruidor, para que ele eliminasse Thanos. Mas o Destruidor falhou e se rendeu a Thanos de modo que este conseguiu conquistar o trono de Titã.\n\nEm seguida, partiu pela Via Láctea, com o intuito de apoderar-se do Cubo Cósmico, um objeto que satisfaz quaisquer desejos de seu possuidor. Amando a Senhora Morte mais do que todas as coisas, o vilão planejava destruir o Universo (genocídio universal)",
                movies:
                [
                    require("../../assets/movies/guardians-of-the-galaxy-1.jpg"),
                    require("../../assets/movies/avengers-1.jpg"),
                    require("../../assets/movies/avengers-2.jpg"),
                    require("../../assets/movies/avengers-3.jpg"),
                    require("../../assets/movies/avengers-4.jpg")
                ]
            },
            {
                name: "Ronan",
                description: "Kree",
                image: require("../../assets/chars/ronan.png"),
                age: 41,
                weight: 94,
                height: "1.96",
                universe: "Terra 616",
                story: 'Ronan nasceu no planeta Hala, capital do Império alienígena Kree na Grande Nuvem de Magalhães; é membro do "Conselho dos Acusadores", que são o equivalente a governadores, militares e juristas.\n\nSua ascensão na hierarquia foi extraordinária, logo acabou se tornando o terceiro mais poderoso do Império Kree. A entidade conhecida como: "Inteligência Suprema" o nomeou a "Supremo Acusador do Império Kree", e neste cargo ele ficou conhecido simplesmente como Ronan, o Acusador.',
                movies:
                [
                    require("../../assets/movies/guardians-of-the-galaxy-1.jpg"),
                    require("../../assets/movies/captain-marvel.jpg")
                ]
            },
            { 
                name: "Talos",
                description: "Skrull",
                image: require("../../assets/chars/talos.png"),
                age: 51,
                weight: 78,
                height: "1.83",
                universe: "Terra 616",
                story: "Talos foi capturado e impedido de realizar o esperado ritual de suicídio que seu povo pratica quando é preso. Assim, uma vez solto e quando retornou ao Império Skrull, passou a servir de chacota e ser chamado de Talos, o Dominado. Depois disso, o personagem apareceu em histórias do Hulk, Aniquilação, Invasão Secreta e do Pato Howard.",
                movies:
                [
                    require("../../assets/movies/captain-marvel.jpg")
                ]
            },
        ]
    },
    {
        name: "humanSection",
        title: "Humanos",
        lastSection: true,
        allData:
        [
            {
                name: "Howard Stark",
                description: "Homem de Ferro",
                image: require("../../assets/chars/howard-stark.png"),
                age: 42,
                weight: 71,
                height: "1.77",
                universe: "Terra 616",
                story: "Howard Stark nasceu em Richford, Nova York. Um inventor ávido e genial desde pequeno, ele foi um cientista brilhante ao longo de sua vida. Ele e seu pai trabalharam em vários projetos e, mais tarde; fundaram a Indústrias Stark.",
                movies:
                [
                    require("../../assets/movies/captain-america-1.jpg"),
                    require("../../assets/movies/iron-man-1.jpg"),
                    require("../../assets/movies/iron-man-2.jpg"),
                    require("../../assets/movies/ant-man.jpg"),
                    require("../../assets/movies/avengers-4.jpg"),
                ]
            },
            {
                name: "Mary Jane",
                description: "Homem Aranha",
                image: require("../../assets/chars/mary-jane.png"),
                age: 24,
                weight: 54,
                height: "1.70",
                universe: "Terra 616",
                story: "Mary Jane é retratada como uma moça moderna, de personalidade forte, e de aparência absolutamente estonteante, que desperta ao mesmo tempo atração e repúdia em Peter Parker, o Homem-Aranha.\n\nEla é adepta a um comportamento “curtir a vida”, gosta de sair, se divertir e namorar, ainda que, declare várias vezes não desejar um relacionamento sério.",
                movies:
                [
                    require("../../assets/movies/spider-man-1.jpg"),
                    require("../../assets/movies/spider-man-2.jpg"),
                    require("../../assets/movies/spider-man-3.jpg")
                ]
            },
            { 
                name: "Happy Hogan",
                description: "Homem de Ferro",
                image: require("../../assets/chars/happy-hogan.png"),
                age: 46,
                weight: 98,
                height: "1.85",
                universe: "Terra 616",
                story: 'É aquele ex-campeão de boxe que salvou Tony Stark (o alter-ego do conhecido super-herói) durante acidente numa corrida de "stock car". Em retribuição, Stark o contratou como seu motorista e guarda-costas pessoal.',
                movies:
                [
                    require("../../assets/movies/avengers-4.jpg"),
                    require("../../assets/movies/iron-man-1.jpg"),
                    require("../../assets/movies/iron-man-2.jpg"),
                    require("../../assets/movies/iron-man-3.jpg"),
                    require("../../assets/movies/spider-man-far-from-home.jpg")
                ]
            }
        ]
    },
]

export default sections