<template>
    <div class="font-roboto">
        <h1 class="text-5xl font-bold text-grey-300 mb-5">{{ $t('about.title') }}</h1>
        <!-- GRID -->
        <div class="flex gap-5">
            <!-- Coluna Esquerda -->
            <div class="w-4/6 flex flex-col gap-5">
                <div class="grid grid-cols-2 gap-5">
                    <!-- CARD 1 e CARD 2 -->
                    <div v-for="(card, index) in cards.slice(0, 2)" :key="index" class="rounded-xl p-5 bg-neutral-900">
                        <div class="space-y-3">
                            <img :src="card.cardImg" class="h-72 mx-auto rounded-3xl" :alt="`Card image ${index + 1}`">
                            <h1 class="text-3xl font-bold text-grey-300 mb-5">{{ $t(card.title) }}</h1>
                        </div>
                        <p class="text-neutral-500 text-lg">
                            {{ $t(card.cardDescription) }}
                        </p>
                    </div>
                </div>
                <!-- CARD 3 -->
                <div class="rounded-xl p-5 bg-neutral-900">
                    <div class="space-y-3">
                        <img :src="cards[2].cardImg" class="h-72 mx-auto rounded-3xl scale-[1.25]" alt="Card image 3">
                        <h1 class="text-3xl font-bold text-grey-300 mb-5">{{ $t(cards[2].title) }}</h1>
                    </div>
                    <p class="text-neutral-500 text-lg">
                        {{ $t(cards[2].cardDescription) }}
                    </p>
                </div>
            </div>
            <!-- Coluna Direita -->
            <div class="w-2/6 flex flex-col gap-5">
                <!--CARD 4 e CARD 5 -->
                <div v-for="(card, index) in cards.slice(3)" :key="index + 3" class="rounded-xl p-5 bg-neutral-900">
                    <div class="space-y-3">
                        <img :src="card.cardImg" class="h-72 mx-auto rounded-3xl scale-[1.1]" :alt="`Card image ${index + 4}`">
                        <h1 class="text-3xl font-bold text-grey-300 mb-5">{{ $t(card.title) }}</h1>
                    </div>
                    <p class="text-neutral-500 text-lg">
                        {{ $t(card.cardDescription) }}
                    </p>
                </div>
            </div>
        </div>
        <!-- GRID -->

    </div>
</template>

<script>
import imgCard1 from '../assets/Foto de perfil.png'
import imgCard2 from '../assets/Typing.svg'
import imgCard3 from '../assets/Stack.svg'
import imgCard4 from '../assets/Studying.svg'
import imgCard5 from '../assets/Programming.svg'

const imgCard = [imgCard1, imgCard2, imgCard3, imgCard4, imgCard5];

export default {
    data(){
        return{
            cards:[{
                // CARD 1
                title: 'about.card1.title',
                cardDescription: 'about.card1.description',
                cardImg: imgCard[0],
            },
            {
                // CARD 2
                title: 'about.card2.title',
                cardDescription: 'about.card2.description',
                cardImg: imgCard[1],
            },
            {
                // CARD 3
                title: 'about.card3.title',
                cardDescription: 'about.card3.description',
                cardImg: imgCard[2],
            },
            {
                // CARD 4
                title: 'about.card4.title',
                cardDescription: 'about.card4.description',
                cardImg: imgCard[3],
            },
            {
                // CARD 5
                title: 'about.card5.title',
                cardDescription: 'about.card5.description',
                cardImg: imgCard[4],
            }],
            currentIndex: 0,
        }
    },
    computed: {
        currentCard() {
            return this.cards[this.currentIndex];
        }
    }
};
</script>