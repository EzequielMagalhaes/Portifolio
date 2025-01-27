import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    title: '<Portfolio/>',
    navbar: {
      //home: 'Home',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    header:{
      title: 'Hi I\'m Ezequiel',
    }
  },
  pt: {
    title: '<Portfólio/>',
    navbar: {
      //home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      experience: 'Experiência',
      contact: 'Contato',
    },
    header:{
      title: 'Olá eu sou Ezequiel',
    }
  },
};

const i18n = createI18n({
  locale: 'en', // idioma padrão
  messages,
});

export default i18n;