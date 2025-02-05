<template>
    <iframe
        v-if="currentProject"
        :key="currentProject.site"
        :src="currentProject.site" 
        class="col-span-4 h-[667px] w-[505px] scale-[0.9] md:h-[600px] md:w-[839px] md:scale-[1] sm:h-[154%] sm:w-[154%] sm:scale-[0.65] rounded-lg bg-center bg-cover bg-no-repeat object-scale-down relative bg-white iframe"
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