<template>
    <div class="h-screen flex items-center justify-center">
        <div class="flex flex-col gap-2 items-center">
            <h1 class="font-bold uppercase">Welcome</h1>
            <h2 class="p-2 px-4 border border-black/50 border-dashed rounded-full">{{ route.params.email }}</h2>
            <h3 class="p-2 px-4 border border-black/50 border-dashed rounded-full text-sm">{{ route.params.sub }}</h3>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();

useNuxtApp().$track("authenticated", {
    email: route.params.email,
    sub: route.params.sub,
});
</script>
