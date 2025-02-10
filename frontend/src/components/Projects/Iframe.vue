<template>
    <iframe
        v-if="currentProject"
        :key="currentProject.site"
        :src="currentProject.site" 
        class="col-span-4 h-[667px] w-[505px] md:h-[923px] md:w-[850px] sm:h-[154%] sm:w-[154%] sm:scale-[0.65] rounded-lg bg-center bg-cover bg-no-repeat object-scale-down relative bg-white iframe"
        style="transform-origin: 0 0;">
    </iframe>
</template>

<script>
export default {
    name: "Iframe",
    props: {
        currentProject: {
            type: Object,
            required: true,
        }
    },
}
</script>