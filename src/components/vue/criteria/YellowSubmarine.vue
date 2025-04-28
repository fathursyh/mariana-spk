<template>
        <!-- Submarine Container -->
        <div class="relative bg-yellow-400 w-[30rem] h-52 rounded-full shadow-2xl">
            <article class="absolute w-full h-full z-10 p-4 px-8">
                <div class="border-2 border-dashed w-full h-full bg-white/50">
                    <slot />
                </div>
            </article>

            <!-- Periscope -->
            <div class="absolute -top-28 left-[42%] w-3 h-12 bg-gray-700 rounded-md"></div>
            <!-- Tower -->
            <div class="absolute -top-18 left-1/3 w-24 h-20 bg-yellow-400 rounded-t-full shadow-md"></div>

            <!-- Windows -->
            <div class="absolute top-16 left-12 w-12 h-12 bg-white rounded-full border-4 border-gray-300"></div>
            <div class="absolute top-16 left-36 w-12 h-12 bg-white rounded-full border-4 border-gray-300"></div>
            <div class="absolute top-16 right-12 w-12 h-12 bg-white rounded-full border-4 border-gray-300"></div>

            <!-- Propeller -->
            <div class="absolute -right-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
                <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
        </div>
</template>
