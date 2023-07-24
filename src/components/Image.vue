<template>
    <div>
        <img :src="imagem" :alt="descricao" :style="{ width: width, height: height }" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    imagem: String,
    descricao: String,
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: 'auto'
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cherry+Cream+Soda&display=swap');
</style>
