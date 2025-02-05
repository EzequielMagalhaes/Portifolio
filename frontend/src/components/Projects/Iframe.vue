<template>
    <iframe
        v-if="currentProject"
        :key="currentProject.site"
        :src="currentProject.site" 
        class="col-span-4 h-[500px] w-full md:h-[600px] md:w-[839px] rounded-lg bg-center bg-cover bg-no-repeat object-scale-down relative bg-white"
        style=" transform-origin: 0 0;">
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

<style>

</style>
