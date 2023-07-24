<template>
    <button class="custom-button">
        <div class="button-content">
            <Icon :iconSource="icon" />
            <span class="button-text">{{ texto }}</span>
        </div>
    </button>
</template>

<script setup lang="ts">
import Icon from './Icon.vue';

defineProps({
    texto: String,
    icon: String
});
</script>

<style scoped>
.custom-button {
    background-color: #16CE92;
    color: #161927;
    border-radius: 45px;
    font-family: 'Cherry Cream Soda', cursive;
    cursor: pointer;
    text-align: center;
    transition: opacity 0.3s ease;
}

.custom-button:active {
    opacity: 0.6;
}

.button-text {
    vertical-align: middle;
    font-size: 25px;
    padding-right: 40px;
    margin: 0px 0px;
}
</style>
