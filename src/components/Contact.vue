<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-3xl font-bold text-gray-300">Contact me</h1>
    <div class="flex justify-center items-center">
        <div class="relative flex justify-center items-center rounded-2xl bg-gray-900 h-[700px] w-[900px]">
            <!-- DOTS -->
            <div class="absolute top-4 left-6 flex gap-2 items-center">
                <div class="p-1 rounded-full bg-red-500 shadow-lg shadow-red-glow"></div>
                <div class="p-1 rounded-full bg-yellow-500 shadow-lg shadow-yellow-glow"></div>
                <div class="p-1 rounded-full bg-green-500 shadow-lg shadow-green-glow"></div>
            </div>
            <!-- DOTS -->
            <!-- TERMINAL -->
            <div class="flex justify-center items-start flex-col rounded-2xl bg-black h-[620px] w-[800px] p-16">
                <h1 class="text-3xl font-bold text-gray-300">Let's talk</h1>
                <p class="text-gray-500 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quia enim vero perferendis eos accusantium iure cupiditate blanditiis quisquam sapiente officia nisi alias, veritatis fugiat? Tempora asperiores autem sequi officia.</p>
                <!-- INPUTS -->
                <div class="flex flex-col gap-2 my-1 w-full">
                    <div class="text-gray-500">Full name</div>
                    <input type="text" placeholder="Your name" class=" w-full border-b border-gray-500 bg-gray-900 p-1 rounded-lg">
                </div>

                <div class="flex flex-col gap-2 my-1 w-full">
                    <div class="text-gray-500">Email Address</div>
                    <input type="text" placeholder="youremail@email.com" class=" w-full border-b border-gray-500 bg-gray-900 p-1 rounded-lg">
                </div>

                <div class="flex flex-col gap-2 my-1 w-full">
                    <div class="text-gray-500">Your message</div>
                    <textarea maxlength="500" type="text" placeholder="Enter text here..." class=" w-full border-b border-gray-500 bg-gray-900 p-1 rounded-lg h-[200px] resize-none"></textarea>
                </div>
                <p class="text-gray-500 text-sm">Max 500 characters</p>

                <button class="w-full p-2 rounded-full mt-2 bg-gray-800 hover:bg-gray-900 hover:text-gray-300">Send</button>
                <!-- END INPUTS -->
            </div>
            <!-- TERMINAL -->
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
