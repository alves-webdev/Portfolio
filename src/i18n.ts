import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "header": "Hello! 👋 I'm",
      "mytitle": "Fullstack Developer",
      "aboutTitle": "AboutMe",
      "aboutmessage": "I am a Fullstack Developer with a passion for creating impactful digital solutions. I have a solid experience in front-end development, mastering technologies such as React, Typescript, Javascript, Vue, and Tailwind. Additionally, I bring skills in backend development, working with Node, Python, and Ruby on Rails, and gained experience with various databases, including MongoDB, PostgresSQL, and MySQL. My academic background in Computer Technology and my certifications in Azure (AZ-900 and DP-900) complement my skill set. I am always seeking new challenges, and my thirst for learning drives me to create functional and aesthetically pleasing digital experiences. My curiosity and results-oriented approach set me apart in the relentless pursuit of creative and innovative solutions. I am ready to take on any project and contribute to the team's success.",
      "card1": "Fullstack Developer",
      "card1.1": "Resume",
      "card2": "Freelancer",
      "card2.1": "Hire Me!",
      "about": "About",
      "projects": "Projects",
      "contact": "Contact",
      "EditorTitle": "Text Editor",
      "EditorDescription": "A Notion-inspired text editor for educational content management. [Private Code]",
      "BlueAcademy": "BlueAcademy",
      "BlueAcademyDescription": "An in-house education platform. [Legacy Project, Private Code]",
      "PokeApp": "PokeApp",
      "PokeAppDescription": "A simple 'Who's That Pokémon?' game where users must guess the Pokémon using its silhouette",
      "Galler-IA": "Galler-IA",
      "Galler-IAdesc": "An online gallery where users can generate images using the OpenAI API and share them",
      "listaSaperx": "SaperX",
      "listaSaperXdesc": "A phonebook CRUD application, currently offline but with functional code",
      "Farmstech": "Farmstech",
      "farmstechdesc": "An interface for remote control of IoT devices. [Private Code]",
    }
  },
  pt: {
    translation: {
      "header": "Olá!  👋 me chamo",
      "mytitle": "Desenvolvedor fullstack",
      "aboutTitle": "SobreMim",
      "aboutmessage": "Desenvolvedor Fullstack com paixão por criar soluções digitais impactantes. Tenho uma sólida experiência no desenvolvimento front-end, dominando tecnologias como React, Typescript, Javascript, Vue e Tailwind. Além disso, trago habilidades no desenvolvimento backend, trabalhando com Node, Python e Ruby on Rails, e adquiri experiência com diversos bancos de dados, incluindo MongoDB, PostgresSQL e MySQL. Minha formação acadêmica em Tecnologia da Computação e minhas certificações em Azure (AZ-900 e DP-900) complementam meu conjunto de habilidades. Estou sempre em busca de novos desafios, e minha sede por aprendizado me impulsiona a criar experiências digitais funcionais e esteticamente agradáveis. Minha curiosidade e abordagem orientada a resultados me destacam na busca incessante por soluções criativas e inovadoras. Estou pronto para enfrentar qualquer projeto e contribuir para o sucesso da equipe.",
      "card1": "Desenvolvedor Fullstack",
      "card1.1": "Currículo",
      "card2": "Freelancer",
      "card2.1": "Me contrate!",
      "about": "Sobre",
      "projects": "Projetos",
      "contact": "Contato",
      "EditorTitle": "Editor de texto",
      "EditorDescription": "Um editor de texto inspirado por notion para gerenciamento de conteúdo edicacional. [Código Privado]",
      "BlueAcademy": "BlueAcademy",
      "BlueAcademyDescription": "Uma plataforma online para ensino in-house [Projeto Legado, Código Privado]",
      "PokeApp": "PokeApp",
      "PokeAppDescription": "Um jogo simples de 'quem é esse pokémon?' onde o usuário deve adivinhar o pokémon utilizando a silhueta",
      "Galler-IA": "Galler-IA",
      "Galler-IAdesc": "Uma galeria online onde usuários podem gerar imagens com a API da OpenAI e compartilha-las",
      "listaSaperx": "SaperX",
      "listaSaperXdesc": "Um CRUD de lista telefonica, atualmente offline porém com código funcional",
      "Farmstech": "Farmstech",
      "farmstechdesc": "Uma interface para controle de dispositivos IOT a distância [código privado]",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "pt",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;