<template>
    <img :src="iconSource" @click="redirectToMain" />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

defineProps({
    iconSource: String
});

const router = useRouter();

const redirectToMain = () => {
    router.push("/main");
};
</script>