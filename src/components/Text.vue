<template>
    <div class="custom-text">
        <slot></slot>
    </div>
</template>
  
<script setup lang="ts">
defineProps({
    text: String
});
</script>
  
<style scoped>
.custom-text {
    font-family: 'Cherry Cream Soda', cursive;
    color: #16CE92;
}
</style>
