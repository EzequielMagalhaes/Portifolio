import { createI18n } from 'vue-i18n';

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
      card1: {
        title: "Hi I'm Ezequiel",
        description: "A tech enthusiast passionate about solving problems and learning continuously. Welcome to my portfolio, where I share my skills, experiences, and growth journey!"
      },
      card2: {
        title: "Professional Experience",
        description: "I’ve gained valuable experience working on projects in technical support, system maintenance, and software development, preparing me to tackle diverse challenges in the tech industry."
      },
      card3: {
        title: "Tech Stack",
        description: "Over the course of my journey, I've gained hands-on experience with various technologies through personal and academic projects. This portfolio, for instance, was built using tools such as Vue.js, JavaScript, Spring Boot, Tailwind CSS, and Docker. Additionally, I have applied my knowledge of CI/CD pipelines and authentication mechanisms with Spring in recent projects."
      },
      card4: {
        title: "Education",
        description: "I am currently studying Computer Science, building a solid foundation in programming and systems design. In addition, I completed several certified courses, which are focused on the software development area."
      },
      card5: {
        title: "Hobbies",
        description: "Beyond coding, I enjoy exploring new technologies, gaming, reading, and staying active through fitness routines, keeping a balance between study, work and social life."
      }
    },

    // PROJECTS //
    projects: {
      title: 'My Projects',
      project1: {
        title: 'Rock Paper Scissors',
        description: 'A rock paper scissors game built with vanilla JavaScript.',
        subdescription: 'This project was built to practice vanilla JavaScript. It is a simple rock paper scissors game that allows users to play against the computer. The app is fully interactive and can be accessed alongside. Below are the technologies used in this project:'
      },
      project2: {
        title: 'Kanban Board',
        description: 'A simple kanban board app built with React.js and Chakra UI.',
        subdescription: 'This project was built to practice React.js using Chakra UI for styling. It is a simple kanban board app that allows users to add, edit, and delete tasks. The app is fully interactive and can be accessed alongside. Below are the technologies used in this project:'
      },
      project3: {
        title: 'To Do List',
        description: 'A simple to-do list app built with Vue.js and Tailwind CSS.',
        subdescription: 'This project was built to practice Vue.js and Tailwind CSS. It is a simple to-do list app that allows users to add, edit, and delete tasks. The app is fully interactive and can be accessed alongside. Below are the technologies used in this project:'
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
    }
  },
    // CONTACT //

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
      card1: {
        title: "Olá, eu sou o Ezequiel",
        description: "Um entusiasta de tecnologia apaixonado por resolver problemas e aprender continuamente. Bem-vindo ao meu portfólio, onde compartilho minhas habilidades, experiências e jornada de crescimento!"
      },
      card2: {
        title: "Experiência Profissional",
        description: "Adquiri experiência valiosa trabalhando em projetos de suporte técnico, manutenção de sistemas e desenvolvimento de software, preparando-me para enfrentar diversos desafios na indústria de tecnologia."
      },
      card3: {
        title: "Tecnologias",
        description: "Ao longo da minha jornada, adquiri experiência prática com várias tecnologias através de projetos pessoais e acadêmicos. Este portfólio, por exemplo, foi construído usando ferramentas como Vue.js, JavaScript, Spring Boot, Tailwind CSS e Docker. Além disso, apliquei meu conhecimento de pipelines CI/CD e mecanismos de autenticação com Spring em projetos recentes."
      },
      card4: {
        title: "Educação",
        description: "Atualmente estou estudando Ciência da Computação, construindo uma base sólida em programação e design de sistemas. Além disso, concluí vários cursos certificados, focados na área de desenvolvimento de software."
      },
      card5: {
        title: "Hobbies",
        description: "Além de programar, gosto de explorar novas tecnologias, jogar, ler e manter-me ativo através de rotinas de exercícios, mantendo um equilíbrio entre estudo, trabalho e vida social."
      }
    },

    // PROJECTS //
    projects: {
      title: 'Meus Projetos',
      project1: {
      title: 'Pedra, Papel ou Tesoura',
      description: 'Um jogo de pedra, papel e tesoura construído com JavaScript puro.',
      subdescription: 'Este projeto foi construído para praticar JavaScript puro. É um simples jogo de pedra, papel e tesoura que permite aos usuários jogar contra o computador. O aplicativo é totalmente interativo e pode ser acessado ao lado. Abaixo estão as tecnologias utilizadas neste projeto:'
      },
      project2: {
      title: 'Quadro Kanban',
      description: 'Um aplicativo simples de quadro kanban construído com React.js e Chakra UI.',
      subdescription: 'Este projeto foi construído para praticar React.js utilizando na estilização a biblioteca Chakra UI. É um aplicativo simples de quadro kanban que permite aos usuários adicionar, editar e excluir tarefas. O aplicativo é totalmente interativo e pode ser acessado ao lado. Abaixo estão as tecnologias utilizadas neste projeto:'
      },
      project3: {
      title: 'Lista de Tarefas',
      description: 'Um aplicativo simples de lista de tarefas construído com Vue.js e Tailwind CSS.',
      subdescription: 'Este projeto foi construído para praticar Vue.js e Tailwind CSS. É um aplicativo simples de lista de tarefas que permite aos usuários adicionar, editar e excluir tarefas. O aplicativo é totalmente interativo e pode ser acessado ao lado. Abaixo estão as tecnologias utilizadas neste projeto:'
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
    }

    // CONTACT //
  },
};

const i18n = createI18n({
  locale: 'pt', // idioma padrão
  messages,
});

export default i18n;