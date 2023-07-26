<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="custom-bg">
        <ion-grid>
          <ion-row class="main-row">
            <ion-col size="12" class="ion-text-center image-style">
              <Image imagem="../public/codeshow.png" width="50px" height="50px" />
            </ion-col>

            <ion-col size="12" class="ion-text-center text-style-1" v-if="!isLoading && !isQuestionGenerated && user">
              <Text>Oi, {{ user.name }}.</Text>
            </ion-col>

            <ion-col size="12" class="ion-text-center text-style-2" v-if="!isLoading && !isQuestionGenerated">
              <Text>Vamos iniciar?</Text>
            </ion-col>

            <ion-col size="12" class="ion-text-center text-style-3" v-if="!isLoading && !isQuestionGenerated">
              <Text>Selecione a tecnologia, o nível de dificuldade, e pressione o botão de play!</Text>
            </ion-col>

            <ion-col size="12" class="ion-text-center select-style-1" v-if="!isLoading && !isQuestionGenerated">
              <ion-select placeholder="Selecione a Tecnologia" v-model="selectedTech">
                <ion-select-option v-for="tech in techOptions" :value="tech" :key="tech">{{ tech }}</ion-select-option>
              </ion-select>
            </ion-col>

            <ion-col size="12" class="ion-text-center select-style-2" v-if="!isLoading && !isQuestionGenerated">
              <ion-select placeholder="Selecione a Dificuldade" v-model="selectedDifficulty">
                <ion-select-option v-for="difficulty in difficultyOptions" :value="difficulty" :key="difficulty">{{ difficulty }}</ion-select-option>
              </ion-select>
            </ion-col>

            <ion-col size="12" class="ion-text-center button-style" v-if="!isLoading && !isQuestionGenerated">
              <CustomButton @click="startLoading" :icon="playSharp" texto="Play" />
            </ion-col>

            <ion-col v-if="isLoading" size="12" class="ion-text-center text-style-4">
              <Text>Sua pergunta está sendo gerada por uma IA...</Text>
            </ion-col>

            <ion-col v-if="isLoading" size="12" class="ion-text-center image-style-3">
              <Image imagem="../public/codeshow.png" />
            </ion-col>



            <ion-col size="12" class="ion-text-center text-style-5" v-if="!isLoading && isQuestionGenerated && questionData">
              <Text>{{ questionData.question }}</Text>
            </ion-col>


            <ion-col size="12" class="ion-text-center" v-if="!isLoading && isQuestionGenerated && questionData">
              <div v-for="(option, index) in questionData.alternatives" :key="index" class="question-option">
                <input type="radio" :id="'option'+index" :value="option" v-model="selectedAnswer" class="question-input">
                <label :for="'option'+index" class="question-label">{{ option }}</label>
              </div>
              <CustomButton class="button-style" @click="submitAnswer" :icon="playSharp" texto="Submeter" />
            </ion-col>
            
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonItem, IonIcon, IonList, IonRadio, IonLabel } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { playSharp } from 'ionicons/icons';
import axios from 'axios';

import Image from '@/components/Image.vue';
import Text from '@/components/Text.vue';
import CustomButton from '@/components/Button.vue';
import { StatusBar } from '@capacitor/status-bar';
import { useStore } from 'vuex'

const techOptions = ['JavaScript', 'Java', 'Python', 'Golang'];
const difficultyOptions = ['Fácil', 'Médio', 'Difícil'];

let selectedTech = ref('');
let selectedDifficulty = ref('');
let isLoading = ref(false);

let isQuestionGenerated = ref(false);

let questionData = ref({
  id: '',
  userId: '',
  question: '',
  answer: '',
  alternatives: [''],
  message: ''
});

let selectedAnswer = ref(null);

const store = useStore()
const user = store.getters.user

onMounted(() => {
  StatusBar.setOverlaysWebView({ overlay: true });
});

defineExpose({
  selectedTech,
  selectedDifficulty,
  user
});

async function startLoading() { // Adicionamos async para fazer chamadas assíncronas
  isLoading.value = true;

  // Aqui, colocamos o código da chamada à API
  try {
    const response = await axios.post('http://localhost:3000/api/v1/question', {
      nivel: selectedDifficulty.value,
      tecnologia: selectedTech.value
    },{
      headers: {
        Authorization: `Bearer ${user.authToken}`
      }
    });

    questionData.value = response.data; // Exibindo a resposta no console
    isQuestionGenerated.value = true; // Quando a pergunta é gerada, setamos isQuestionGenerated como true

  } catch (error) {
    console.error(error); // Tratamento de erro
  } finally {
    isLoading.value = false; // Garantindo que isLoading será definido como false mesmo se houver um erro
  }
}

function submitAnswer() {
  // Aqui você pode tratar o envio da resposta selecionada
  console.log('Resposta selecionada:', selectedAnswer.value);
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

.custom-item-background {
  background-color: #fff !important;
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

.text-style-5 {
  font-size: 20px;
  margin-top: 80px;
}

.image-style {
  margin-top: 20px;
  margin-left: 120px;
}

.image-style-3 {
  margin-top: 50px;
  animation: spin 3s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.main-row {
  min-height: 100%;
}

.input-style {
  margin-top: 30px;
}

.question-option {
  font-size: 24px; 
  margin-bottom: 20px; 
  margin-top: 30px;
}

.question-input, .question-label {
  margin-left: 10px; 

  padding: 10px;
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

.custom-ion-item {
  --ion-background-color: white !important;
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
