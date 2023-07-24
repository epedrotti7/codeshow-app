<template>
    <img :src="iconSource" class="icon-style" />
</template>

<script setup lang="ts">
defineProps({
    iconSource: String
});
</script>

<style scoped>
.icon-style {
    width: 100px;
    height: 50px;
    vertical-align: middle;
}
</style>
