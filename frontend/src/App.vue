<template>
  <div class="p-5 px-20 flex flex-col gap-5">
    <Navbar/>
    <hr class="border-t-2 border-gray-300"/>
    <section id="home">
      <Header/>
    </section>
    <section id="about">
      <About/>
    </section>
    <section id="projects">
      <Project/>
    </section>
    <!--<section id="clients">
      <Clients/>
    </section>-->
    <section id="experience">
      <Experience :experiences="workExperiences"/>
    </section>
    <section id="contact">
      <Contact/>
    </section>
    <Footer/>
    <transition name="fade">
      <button v-show="showScrollButton" @click="scrollToTop" @mouseenter="showWhiteArrow('scroll')" @mouseleave="hideWhiteArrow('scroll')" class="fixed bottom-5 right-5 bg-neutral-300 p-3 rounded-full hover:bg-black">
        <img id="scroll1" :src="scrollButtonImage" class="h-6 -rotate-45" alt="scroll-to-top">
        <img id="scroll2" src="/src/assets/white-site-arrow.png" class="h-6 -rotate-45 hidden" alt="scroll-to-top">
      </button>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'
import Clients from './components/Clients.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import experienceLogo1 from './assets/TI-suport.png';
import experienceLogo2 from './assets/ferragens-pontual.png';
import experienceLogo3 from './assets/pgdf.png';

const experienceLogo = [experienceLogo1, experienceLogo2, experienceLogo3];

export default {
  components: { Navbar, Header, About, Project, Clients, Experience, Contact, Footer },
  data() {
    return {
      showScrollButton: false,
      scrollButtonImage: '/src/assets/black-site-arrow.png',
      workExperiences: [
        {
          jobEnterprise: 'PLT Empreendimentos e Participações Empresariais LTDA',
          jobName: 'Technical support operator',
          jobStartDate: 'Jul 2023',
          jobEndDate: 'Nov 2024',
          description: 'Provided N2 technical support, Help Desk and remote customer support. Responsible for maintenance and assembly of computers, networks, and servers. Supported ERP systems (Movere), installed and maintained network and CCTV infrastructure, performed printer maintenance, and configured PABX telephony systems.',
          logo: experienceLogo[0],
          tasks: '• N2 technical support; • Help Desk / Remote customer support; • Maintenance and assembly of computers; • Maintenance of networks and servers; • Support with ERP systems (Movere); • Installation and maintenance of network and CCTV infrastructure; • Printer maintenance; • Configuration of PABX systems - Telephony.'
        },
        {
          jobEnterprise: 'Ferragens Pontual',
          jobName: 'Retail salesperson',
          jobStartDate: 'Jun 2021',
          jobEndDate: 'Dez 2022',
          description: 'Retail sale of hardware and construction materials, contact and customer service, teamwork. Managed inventory, assisted in product displays, and provided technical advice to customers regarding product selection and usage. Developed strong customer relationships and contributed to sales growth through excellent service and product knowledge.',
          logo: experienceLogo[1],
          tasks: '• Retail sale of hardware and construction materials; • Contact and customer service; • Teamwork;'
        },
        {
          jobEnterprise: 'Procuradoria-Geral do Distrito Federal',
          jobName: 'Trainee',
          jobStartDate: 'Sep 2019',
          jobEndDate: 'Dez 2020',
          description: 'Conducted legal research, provided administrative support, assisted with case preparation, and maintained databases of legal cases. I have developed strong analytical and problem-solving skills through extensive legal research and document review.',
          logo: experienceLogo[2],
          tasks: '• Assistance in the transport of legal and administrative processes; • Processing of internal legal proceedings;'
        }
      ]
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll() {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        this.showScrollButton = rect.top <= window.innerHeight;
      }
    },
    showWhiteArrow(id) {
      document.getElementById(`${id}1`).style.display = 'none';
      document.getElementById(`${id}2`).style.display = 'block';
    },
    hideWhiteArrow(id) {
      document.getElementById(`${id}1`).style.display = 'block';
      document.getElementById(`${id}2`).style.display = 'none';
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
button:hover {
  background-color: black;
}
button:hover img {
  content: url('/src/assets/white-site-arrow.png');
}
</style>