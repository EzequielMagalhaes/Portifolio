import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    title: '<Portfolio/>',
    navbar: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
  },
  pt: {
    title: '<Portfólio/>',
    navbar: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
    },
  },
};

const i18n = createI18n({
  locale: 'en', // idioma padrão
  messages,
});

export default i18n;