<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="custom-bg">
        <ion-grid>

          <ion-row class="icon-row">
            <ion-col size="12" class="ion-text-center">
              <IconBack :iconSource="arrowBack" />
            </ion-col>
          </ion-row>

          <ion-row class="main-row" style="height: 100%;">
            <ion-col size="12" class="ion-text-center image-style">
              <Image imagem="../public/codeshow.png" width="150px" height="150px" />
            </ion-col>

            <ion-col size="12" class="ion-text-center input-style">
              <IonItem class="input-item">
                <IonIcon :icon="mailOutline" slot="start" class="input-icon" />
                <input type="text" v-model="email" @blur="validateEmail" placeholder="Email" class="input-field">
                <p v-if="emailError" class="error-text">{{ emailError }}</p>
              </IonItem>
            </ion-col>

            <ion-col size="12" class="ion-text-center input-style">
              <IonItem class="input-item">
                <IonIcon :icon="lockClosedOutline" slot="start" class="input-icon"/>
                <input type="password" placeholder="Senha" class="input-field">
              </IonItem>
            </ion-col>

            <ion-col size="12" class="ion-text-center text-style-1">
              <Text>Esqueci minha senha</Text>
            </ion-col>

            <ion-col size="12" class="ion-text-center button-style">
              <CustomButton @click="createSession" texto="Entrar" :icon="logInOutline" />
            </ion-col>

          </ion-row>

        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonItem, IonIcon } from '@ionic/vue';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';

import Image from '@/components/Image.vue';
import IconBack from '@/components/IconBack.vue';
import Text from '@/components/Text.vue';

import CustomButton from '@/components/Button.vue';
import logInOutline from '../../public/log-in-outline.svg'
import arrowBack from '../../public/arrow-back.svg'

import { ref, onMounted } from 'vue';
import { StatusBar } from '@capacitor/status-bar';
import { useRouter } from 'vue-router';
import axios from 'axios';
import store from '@/store';

onMounted(() => {
  StatusBar.setOverlaysWebView({ overlay: true });
});

let email = ref('');
let emailError = ref('');
let password = ref('');

function validateEmail() {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email.value).toLowerCase())) {
    emailError.value = 'Por favor, insira um email válido';
  } else {
    emailError.value = '';
  }
}

const router = useRouter();

async function createSession() {
    const response = await axios.post('http://localhost:3000/api/v1/session', {
      email: String(email.value),
      password: String(password.value)
    });

    store.dispatch('setUser', response.data)
    router.push('/tabs/playpage');
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cherry+Cream+Soda&display=swap');

.custom-bg {
  height: 100%;
  background-color: #161927;
}

.text-style-1 {
  padding-top: 30px;
}

.icon-row {
  margin-top: 60px;
  margin-right: 280px;
}

.image-style {
  margin-top: 120px;
  padding-bottom: 10px;
}

.input-style {
  margin-top: 30px;
}

.input-item {
  --padding-start: 0; /* remove o padding esquerdo */
  --padding-end: 0; /* remove o padding direito */
  --background: transparent; /* remove a cor de fundo */
  --color: #16CE92; /* altera a cor do texto */
  width: 70%; /* reduzido para 70% */
  margin: 0 auto; /* centraliza o item */
  border-bottom: 1px solid #16CE92; /* altera a cor da linha inferior */
}

.input-icon {
  color: #16CE92; /* altera a cor do ícone */
}

.input-field {
  font-family: 'Cherry Cream Soda', cursive;
  color: #16CE92;
  width: 100%; /* Preenche todo o espaço disponível */
  border: none; /* Remove a borda padrão */
  background: transparent; /* Define o fundo como transparente */
}

.input-field::placeholder {
  font-family: 'Cherry Cream Soda', cursive;
  color: #16CE92;
}

.error-text {
  color: red;
  font-size: 0.8rem;
}

.input-field:focus {
  outline: none;
}

.button-style {
  margin-top: 40px;
}
</style>
