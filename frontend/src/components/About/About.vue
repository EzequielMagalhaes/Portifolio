<template>
  <div>
    <h1 
      class="text-5xl font-bold text-grey-300 mb-5 py-5"
      id="about-title"
    >
      {{ t('about.title') }}
    </h1>
    
    <!-- Main Grid Container -->
    <div 
      class="flex flex-col lg:flex-row gap-5"
      aria-labelledby="about-title"
    >
      <!-- Left Column -->
      <div class="lg:w-2/3 flex flex-col gap-5">
        <!-- Top Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AboutCard 
            v-for="card in firstTwoCards"
            :key="card.cardKey"
            :title-key="card.titleKey"
            :description-key="card.descriptionKey"
            :card-img="card.cardImg"
          />
        </div>
        
        <!-- Full Width Card -->
        <AboutCard 
          :title-key="thirdCard.titleKey"
          :description-key="thirdCard.descriptionKey"
          :card-img="thirdCard.cardImg"
          image-class="scale-[1.2] md:scale-[1.5] pt-5"
        >
          <TechStack :stack="['Java' , 'SpringBoot' , 'Vue.js' , 'JavaScript' , 'Tailwind CSS' , 'Vite' , 'PostgreSQL']"/>
        </AboutCard>
      </div>

      <!-- Right Column -->
      <div class="lg:w-1/3 flex flex-col gap-5">
        <AboutCard 
          v-for="card in lastTwoCards"
          :key="card.cardKey"
          :title-key="card.titleKey"
          :description-key="card.descriptionKey"
          :card-img="card.cardImg"
          image-class="scale-[1.1]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AboutCard from '../About/AboutCard.vue'
import TechStack from '../Projects/TechStack.vue'
import imgCard1 from '../../assets/about-icons/Foto-de-perfil.webp'
import imgCard2 from '../../assets/about-icons/Typing.svg'
import imgCard3 from '../../assets/about-icons/Stack.svg'
import imgCard4 from '../../assets/about-icons/Studying.svg'
import imgCard5 from '../../assets/about-icons/Programming.svg'

const { t } = useI18n()
const cards = [
  {
    cardKey: 'introduction',
    titleKey: 'cardTitles.introduction',
    descriptionKey: 'about.cards.introduction.description',
    cardImg: imgCard1,
  },
  {
    cardKey: 'experience',
    titleKey: 'cardTitles.experience',
    descriptionKey: 'about.cards.experience.description',
    cardImg: imgCard2,
  },
  {
    cardKey: 'techStack',
    titleKey: 'cardTitles.techStack',
    descriptionKey: 'about.cards.techStack.description',
    cardImg: imgCard3,
  },
  {
    cardKey: 'education',
    titleKey: 'cardTitles.education',
    descriptionKey: 'about.cards.education.description',
    cardImg: imgCard4,
  },
  {
    cardKey: 'knowledge',
    titleKey: 'cardTitles.knowledge',
    descriptionKey: 'about.cards.knowledge.description',
    cardImg: imgCard5,
  }
]

const firstTwoCards = computed(() => cards.slice(0, 2))
const thirdCard = computed(() => cards[2])
const lastTwoCards = computed(() => cards.slice(3))
</script>

