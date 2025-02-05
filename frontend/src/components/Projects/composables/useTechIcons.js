import htmlIcon from '../../../assets/stack-icons/html-icon.svg'
import cssIcon from '../../../assets/stack-icons/css-icon.svg'
import viteIcon from '../../../assets/stack-icons/vitejs-icon.svg';
import nodeJsIcon from '../../../assets/stack-icons/nodejs-icon.svg';
import vueIcon from '../../../assets/stack-icons/vuejs-icon.svg';
import reactIcon from '../../../assets/stack-icons/react-icon.svg';
import vuetifyIcon from '../../../assets/stack-icons/vuetify-icon.svg';
import javascriptIcon from '../../../assets/stack-icons/javascript-icon.svg';
import typeScriptIcon from '../../../assets/stack-icons/typescript-icon.svg';
import tailwindIcon from '../../../assets/stack-icons/tailwindcss-icon.svg';
import javaIcon from '../../../assets/stack-icons/java-icon.svg';
import springIcon from '../../../assets/stack-icons/spring-icon.svg';
import postgreIcon from '../../../assets/stack-icons/postgresql-icon.svg';
import dockerIcon from '../../../assets/stack-icons/docker-icon.svg';
import chakraIcon from '../../../assets/stack-icons/chakra-icon.svg';
import jestIcon from '../../../assets/stack-icons/jest-icon.svg';
import gitIcon from '../../../assets/stack-icons/git-icon.svg';

export const useTechIcons = () => {
  const getStackIcon = (tech) => {
    switch(tech) {
      case 'HTML': return htmlIcon
      case 'CSS': return cssIcon
      case 'Vite': return viteIcon
      case 'Node.js': return nodeJsIcon
      case 'Vue.js': return vueIcon
      case 'React.js': return reactIcon
      case 'Vuetify': return vuetifyIcon
      case 'JavaScript': return javascriptIcon
      case 'TypeScript': return typeScriptIcon
      case 'Tailwind CSS': return tailwindIcon
      case 'Java': return javaIcon
      case 'SpringBoot': return springIcon
      case 'PostgreSQL': return postgreIcon
      case 'Docker': return dockerIcon
      case 'Chakra-ui': return chakraIcon
      case 'Jest': return jestIcon
      case 'Git': return gitIcon
      default: return ''
    }
  }

  const getStackClass = (tech) => {
    const special = ['Docker', 'Chakra-ui', 'Java']
    return special.includes(tech) ? 'scale-125' : ''
  }

  return {
    getStackIcon,
    getStackClass
  }
}