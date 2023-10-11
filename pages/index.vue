<template>
    <div class="h-screen flex items-center justify-center">
        <button @click="signIn" class="p-1 px-4 bg-black rounded-lg text-white flex items-center gap-3">
            <div class="text-2xl"></div>
            <div>Sign in with Apple</div>
        </button>
    </div>
</template>

<script setup>
const config = useRuntimeConfig();

const { $track } = useNuxtApp();
$track("index", { date: new Date().toDateString() });

if (process.client) {
    AppleID.auth.init({
        clientId: config.public.clientID,
        scope: "name email",
        redirectURI: config.public.redirectURI,
        usePopup: false,
    });
};

const signIn = async () => {
    $track("sign-in", { date: new Date().toDateString() });
    await AppleID.auth.signIn();
};
</script>
