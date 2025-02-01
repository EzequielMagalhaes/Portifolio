import { createI18n } from 'vue-i18n';

const cardTitles = {
  en: {
    introduction: "Hi I'm Ezequiel",
    experience: "Professional experience",
    techStack: "Tech stack",
    education: "Education",
    knowledge: "General knowledge"
  },
  
  pt: {
    introduction: "Olá, eu sou o Ezequiel",
    experience: "Experiência Profissional",
    techStack: "Tecnologias",
    education: "Educação",
    knowledge: "Conhecimento geral"
  }
};

const messages = {
  en: {
    title: '<Portfolio/>',
    // NAVBAR //
    navbar: {
      //home: 'Home',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },

    // HEADER //
    header: {
      title: 'Hi I\'m Ezequiel',
      typeArray: ['SOFTWARE DEVELOPER', 'WEB DEVELOPER']
    },

    // ABOUT //
    about: {
      title: 'About me',
      aria: {
        cardDescription: "Detailed information about {title}"
      },
      cards: {
        introduction: {
          description: "Welcome to my portfolio, where I share my skills, experiences, and growth journey! I'm a tech enthusiast passionate about solving problems and learning continuously."
        },
        experience: {
          description: "I\'ve gained valuable experience working on projects in technical support, system maintenance, and software development, preparing me to tackle diverse challenges in the tech industry."
        },
        techStack: {
          description: "working on it"
        },
        education: {
          description: "I am currently studying Computer Science, building a solid foundation in programming and systems design. In addition, I took several certified courses focused on the area of software development area. And I'm currently studying more about CI/CD pipelines and Docker containerization to implement these features in my future projects"
        },
        knowledge: {
          description: "Proficient in multiple programming paradigms with hands-on experience in Java, Python, and C#. Skilled in database systems including both relational (MySQL) and NoSQL (MongoDB) solutions, also skilled in Git workflows."
          // "Full-stack developer with hands-on experience across Java, Python, and C# through personal and academic projects. Specializing in modern web technologies: Frontend with React/Vue using TypeScript, backend with Node.js and Spring Boot. Proficient in both relational (PostgreSQL/MySQL) and NoSQL (MongoDB) databases and skilled in Git workflows."
        }
      }
    },
    
    // PROJECTS //
    projects: {
      title: 'My Projects',
      project1: {
        title: 'Rock Paper Scissors',
        description: 'A rock paper scissors game built with vanilla JavaScript.',
        subdescription: 'This project was built to practice pure JavaScript. It is a simple example that allows users to play against the computer. The application is fully interactive and can be accessed alongside.'
      },
      project2: {
        title: 'Kanban Board',
        description: 'A simple kanban board app built with React.js and Chakra UI.',
        subdescription: 'This project was built to practice React.js using the Chakra UI library for styling. It is an application that allows users to organize, add, edit and delete tasks. The application is fully interactive and can be accessed alongside.'
      },
      project3: {
        title: 'To Do List',
        description: 'A simple to-do list app built with Vue.js and Tailwind CSS.',
        subdescription: 'This project was built for a technical test where the technologies used were Vue.js and Tailwind CSS. It is a simple to-do list app that allows users to add, edit, and delete tasks. The application is fully interactive and can be accessed alongside.'
      },
    },

    // EXPERIENCE //
    experience: {
      title: 'My work experience',
      work1: {
        workEnterprise: 'PLT Empreendimentos e Participações Empresariais LTDA',
        workName: 'Technical support operator',
        workStartDate: 'Jul 2023',
        workEndDate: 'Nov 2024',
        description: 'Provided N2 technical support, Help Desk and remote customer support. Responsible for maintenance and assembly of computers, networks, and servers. Supported ERP systems (Movere), installed and maintained network and CCTV infrastructure, performed printer maintenance, and configured PABX telephony systems.',
        tasks: '• N2 technical support; • Help Desk / Remote customer support; • Maintenance and assembly of computers; • Maintenance of networks and servers; • Support with ERP systems (Movere); • Installation and maintenance of network and CCTV infrastructure; • Printer maintenance; • Configuration of PABX systems - Telephony.'
      },
      work2: {
        workEnterprise: 'Ferragens Pontual',
        workName: 'Retail salesperson',
        workStartDate: 'Jun 2021',
        workEndDate: 'Dez 2022',
        description: 'Retail sale of hardware and construction materials, contact and customer service, teamwork. Managed inventory, assisted in product displays, and provided technical advice to customers regarding product selection and usage. Developed strong customer relationships and contributed to sales growth through excellent service and product knowledge.',
        tasks: '• Retail sale of hardware and construction materials; • Contact and customer service; • Teamwork;'
      },
      work3: {
        workEnterprise: 'Procuradoria-Geral do Distrito Federal',
        workName: 'Trainee',
        workStartDate: 'Sep 2019',
        workEndDate: 'Dez 2020',
        description: 'Conducted legal research, provided administrative support, assisted with case preparation, and maintained databases of legal cases. I have developed strong analytical and problem-solving skills through extensive legal research and document review.',
        tasks: '• Assistance in the transport of legal and administrative processes; • Processing of internal legal proceedings;'
      },
    },
    
    // CONTACT //
    contact: {
      title: 'Contact me',
      description: 'Let\'s talk',
      subdescription: 'Feel free to reach out to me using the form below. Whether you have a question, a project proposal, or just want to say hello, I\'ll get back to you as soon as possible.',
      fullName: 'Full name',
      emailAdd: 'Email Address',
      yourMessage: 'Your message',
      sizeText: 'Max 500 characters',
      sendBtn: 'Send',
      placeholder: {
        name: 'Your Name',
        email: 'your-email@mail.com',
        message: 'Enter text here...'
      },
      response: {
        errors:{
          invalidDomain: 'The email domain must be gmail.com, hotmail.com or yahoo.com',
          errorMessage: 'An error occurred while sending your message. Please try again later...'
        },
        successMessage: 'Your message has been sent successfully. I will get back to you as soon as possible.',
      }
    },

    // FOOTER //
    footer:{
      terms:'Terms & Conditions',
      privacy:'Privacy Policies',
      copyright: 'Ezequiel All Rights Reserved',
    }
  },
  
  //  ||  PORTUGUÊS  ||  //
  pt: {
    title: '<Portfólio/>',
    // NAVBAR //
    navbar: {
      //home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      experience: 'Experiência',
      contact: 'Contato',
    },
    
    // HEADER //
    header: {
      title: 'Olá eu sou Ezequiel',
      typeArray: ['DESENVOLVEDOR DE SOFTWARE', 'DESENVOLVEDOR WEB']
    },
    
    // ABOUT //
    about: {
      title: 'Sobre mim',
      aria: {
        cardDescription: "Informações detalhadas sobre {title}"
      },
      cards: {
        introduction: {
          description: "Bem-vindo ao meu portfólio, onde compartilho minhas habilidades, experiências e jornada de crescimento! Eu sou um entusiasta de tecnologia apaixonado por resolver problemas e aprender continuamente."
        },
        experience: {
          description: "Adquiri experiência valiosa trabalhando em projetos de suporte técnico, manutenção de sistemas e desenvolvimento de software, preparando-me para enfrentar diversos desafios na indústria de tecnologia."
          
        },
        techStack: {
          description: "trabalhando nisso..."
          
        },
        education: {
          description: "Atualmente estou estudando Ciência da Computação, construindo uma base sólida em programação e design de sistemas. Além disso, realizei diversos cursos certificados voltados para a área de desenvolvimento de software. E atualmente estou estudando mais sobre pipelines CI/CD e conteinerização Docker para implementar esses recursos em meus projetos futuros."
        },
        knowledge: {
          description: "Proficiente em vários paradigmas de programação com experiência prática em Java, Python e C#. Hábil em sistemas de banco de dados, incluindo soluções relacionais (MySQL) e NoSQL (MongoDB), também hábil em fluxos de trabalho Git."
          // "Desenvolvedor full-stack com experiência prática em Java, Python e C# em projetos pessoais e acadêmicos. Especializado em tecnologias web modernas: Frontend com React/Vue usando TypeScript, backend com Node.js e Spring Boot. Proficiente em bancos de dados relacionais (PostgreSQL/MySQL) e NoSQL (MongoDB) e qualificado em fluxos de trabalho Git."
        }
      }
    },
    
    // PROJECTS //
    projects: {
      title: 'Meus Projetos',
      project1: {
        title: 'Pedra, Papel ou Tesoura',
        description: 'Um jogo de pedra, papel e tesoura construído com JavaScript puro.',
        subdescription: 'Este projeto foi construído para praticar JavaScript puro. É um exemplo simples que permite aos usuários jogar contra o computador. O aplicativo é totalmente interativo e pode ser acessado ao lado.'
      },
      project2: {
        title: 'Quadro Kanban',
        description: 'Um quadro kanban construído com React.js e Chakra UI.',
        subdescription: 'Este projeto foi construído para praticar React.js utilizando na estilização a biblioteca Chakra UI. É um aplicativo que permite aos usuários organizar, adicionar, editar e excluir tarefas. O aplicativo é totalmente interativo e pode ser acessado ao lado.'
      },
      project3: {
        title: 'Lista de Tarefas',
        description: 'Um aplicativo de lista de tarefas construído com Vue.js e Tailwind CSS.',
        subdescription: 'Este projeto foi construído para um teste técnico onde as tecnologias utilizadas eram Vue.js e Tailwind CSS. É um aplicativo simples de lista de tarefas que permite aos usuários adicionar, editar e excluir tarefas. O aplicativo é totalmente interativo e pode ser acessado ao lado.'
      }
    },
    
    // EXPERIENCE //
    experience: {
      title: 'Minha experiência de trabalho',
      work1: {
        workEnterprise: 'PLT Empreendimentos e Participações Empresariais LTDA',
        workName: 'Operador de suporte técnico',
        workStartDate: 'Jul 2023',
        workEndDate: 'Nov 2024',
        description: 'Forneci suporte técnico N2, Help Desk e suporte remoto ao cliente. Responsável pela manutenção e montagem de computadores, redes e servidores. Suportei sistemas ERP (Movere), instalei e mantive infraestrutura de rede e CCTV, realizei manutenção de impressoras e configurei sistemas de telefonia PABX.',
        tasks: '• Suporte técnico N2. • Help Desk / Suporte remoto de clientes. • Manutenção e montagem de computadores. • Manutenção de redes e servidores. • Suporte com sistemas ERP (Movere). • Instalação e manutenção de infraestrutura de rede e CFTV. • Manutenção de impressoras. • Configuração de sistemas PABX - Telefonia.'
      },
      work2: {
        workEnterprise: 'Ferragens Pontual',
        workName: 'Vendedor de varejo',
        workStartDate: 'Jun 2021',
        workEndDate: 'Dez 2022',
        description: 'Venda de varejo de ferragens e materiais de construção, contato e atendimento ao cliente, trabalho em equipe. Gerenciou inventário, auxiliou na exibição de produtos e forneceu aconselhamento técnico aos clientes sobre a seleção e uso de produtos. Desenvolveu fortes relacionamentos com os clientes e contribuiu para o crescimento das vendas através de um excelente serviço e conhecimento dos produtos.',
        tasks: '• Venda de varejo de ferragens e materiais de construção; • Contato e atendimento ao cliente; • Trabalho em equipe;'
      },
      work3: {
        workEnterprise: 'Procuradoria-Geral do Distrito Federal',
        workName: 'Estagiário',
        workStartDate: 'Set 2019',
        workEndDate: 'Dez 2020',
        description: 'Conduzi pesquisas jurídicas, forneci suporte administrativo, auxiliei na preparação de casos e mantive bancos de dados de casos jurídicos. Desenvolvi fortes habilidades analíticas e de resolução de problemas por meio de extensas pesquisas jurídicas e revisão de documentos.',
        tasks: '• Assistência no transporte de processos jurídicos e administrativos; • Processamento de processos jurídicos internos;'
      },
    },
    
    // CONTACT //
    contact: {
      title: 'Entre em contato comigo',
      description: 'Vamos conversar',
      subdescription: 'Sinta-se à vontade para entrar em contato comigo usando o formulário abaixo. Quer você tenha uma dúvida, uma proposta de projeto ou apenas queira dizer olá, entrarei em contato com você o mais breve possível.',
      fullName: 'Nome completo',
      emailAdd: 'Endereço de email',
      yourMessage: 'Sua mensagem',
      sizeText: 'Max 500 caracteres',
      sendBtn: 'Enviar',
      placeholder: {
        name: 'Seu Nome',
        email: 'seu-email@mail.com',
        message: 'Insira o texto aqui...'
      },
      response: {
        errors:{
          invalidDomain: 'O domínio do email deve ser gmail.com, hotmail.com ou yahoo.com',
          errorMessage: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde...'
        },
        successMessage: 'Sua mensagem foi enviada com sucesso. Vou te responder assim que possível.',
      }
    },

    // FOOTER //
    footer:{
      terms:'Termos e condições',
      privacy:'Políticas de privacidade',
      copyright	:'Todos os direitos reservados - Ezequiel',
    }
  },
};
messages.en.cardTitles = cardTitles.en;
messages.pt.cardTitles = cardTitles.pt;

const i18n = createI18n({
  legacy: false,
  locale: 'en', // idioma padrão
  messages,
});

export default i18n;