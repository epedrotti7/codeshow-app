<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="custom-bg">
        <ion-grid>
          <ion-row class="main-row">
            <ion-col size="12" class="ion-text-center image-style">
              <Image imagem="../public/codeshow.png" width="50px" height="50px"/>
            </ion-col>

            <ion-col size="12" class="ion-text-center text-style-1" v-if="!isLoading">
              <Text>Oi, Eliton.</Text>
            </ion-col>

            <ion-col size="12" class="ion-text-center text-style-2" v-if="!isLoading">
              <Text>Vamos iniciar?</Text>
            </ion-col>

            <ion-col size="12" class="ion-text-center text-style-3" v-if="!isLoading">
              <Text>Selecione a tecnologia, o nível de dificuldade, e pressione o botão de play!</Text>
            </ion-col>

            <ion-col size="12" class="ion-text-center select-style-1" v-if="!isLoading">
              <ion-select placeholder="Selecione a Tecnologia" v-model="selectedTech">
                <ion-select-option v-for="tech in techOptions" :value="tech" :key="tech">{{ tech }}</ion-select-option>
              </ion-select>
            </ion-col>

            <ion-col size="12" class="ion-text-center select-style-2" v-if="!isLoading">
              <ion-select placeholder="Selecione a Dificuldade" v-model="selectedDifficulty">
                <ion-select-option v-for="difficulty in difficultyOptions" :value="difficulty" :key="difficulty">{{ difficulty }}</ion-select-option>
              </ion-select>
            </ion-col>
  
            <ion-col size="12" class="ion-text-center button-style" v-if="!isLoading">
              <CustomButton @click="startLoading" :icon="playSharp" texto="Play"/>
            </ion-col>

            <ion-col v-if="isLoading" size="12" class="ion-text-center text-style-4">
              <Text>Sua pergunta está sendo gerada por uma IA...</Text>
            </ion-col>

            <ion-col v-if="isLoading" size="12" class="ion-text-center image-style-3">
              <Image imagem="../public/codeshow.png"/>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonItem, IonIcon } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { playSharp } from 'ionicons/icons';

import Image from '@/components/Image.vue';
import Text from '@/components/Text.vue';
import CustomButton from '@/components/Button.vue';
import { StatusBar } from '@capacitor/status-bar';

const techOptions = ['JavaScript', 'Java', 'Python', 'Golang'];
const difficultyOptions = ['Fácil', 'Médio', 'Difícil'];

let selectedTech = ref('');
let selectedDifficulty = ref('');
let isLoading = ref(false);
// let isLoading = ref(true);

onMounted(() => {
  StatusBar.setOverlaysWebView({ overlay: true });
});

defineExpose({
  selectedTech,
  selectedDifficulty,
});

function startLoading() {
  isLoading.value = true;
  
  // Aqui, coloque o código da chamada à API
  // Quando a chamada da API terminar, certifique-se de definir isLoading.value = false;
  
  // Para fins de demonstração, usando setTimeout para simular uma chamada de API
  setTimeout(() => isLoading.value = false, 2000);
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cherry+Cream+Soda&display=swap');

.custom-bg {
  height: 100%;
  background-color: #161927;
  overflow-y: auto; 
  overflow-x: hidden;
  box-sizing: border-box;
}

.text-style-1 {
  font-size: 20px;
  padding-right: 200px;
  margin-bottom: 50px;
}

.text-style-2 {
  font-size: 20px;
  padding-right: 150px;
  margin-bottom: 40px;
}

.text-style-3 {
  font-size: 20px;
}

.text-style-4 {
  font-size: 20px;
  margin-top: 130px;
}

.image-style{
  margin-top: 20px;
  margin-left: 120px;
}

.image-style-3{
  margin-top:50px;
  animation: spin 3s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.main-row {
  min-height: 100%; 
}

.input-style {
  margin-top: 30px;
}

.input-item {
  --padding-start: 0;
  --padding-end: 0;
  --background: transparent;
  --color: #16CE92;
  width: 70%;
  margin: 0 auto;
  border-bottom: 1px solid #16CE92;
}

.input-icon {
  color: #16CE92;
}

.input-field {
  font-family: 'Cherry Cream Soda', cursive;
  color: #16CE92;
  width: 100%;
  border: none;
  background: transparent;
}

.input-field::placeholder {
  font-family: 'Cherry Cream Soda', cursive;
  color: #16CE92;
}

.input-field:focus {
  outline: none;
}

.button-style {
  margin-top: 80px;
}

.error-text {
  color: red;
  font-size: 0.8rem;
}

.select-style-1 ion-select {
  color: #fff;
  font-size: 20px;
  margin-top: 50px;
  margin-left: 80px;
  text-align: center;
}

.select-style-2 ion-select {
  color: #fff;
  font-size: 20px;
  margin-left: 80px;
  text-align: center;
}
</style>
