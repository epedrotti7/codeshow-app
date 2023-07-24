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
                <IonIcon :icon="peopleOutline" slot="start" class="input-icon" />
                <input type="text" placeholder="Nome" class="input-field">
              </IonItem>
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
                <IonIcon :icon="lockClosedOutline" slot="start" class="input-icon" />
                <input type="password" v-model="password" placeholder="Senha" class="input-field">
              </IonItem>
            </ion-col>

            <ion-col size="12" class="ion-text-center input-style">
              <IonItem class="input-item">
                <IonIcon :icon="lockClosedOutline" slot="start" class="input-icon" />
                <input type="password" v-model="confirmPassword" @blur="validatePasswords" placeholder="Confirme sua senha" class="input-field">
                <p v-if="passwordError" class="error-text">{{ passwordError }}</p>
              </IonItem>
            </ion-col>

            <ion-col size="12" class="ion-text-center button-style">
              <CustomButton texto="Criar conta" :icon="logInOutline" />
            </ion-col>
          </ion-row>

        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonItem, IonIcon } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { mailOutline, lockClosedOutline, peopleOutline } from 'ionicons/icons';

import Image from '@/components/Image.vue';
import IconBack from '@/components/IconBack.vue';

import CustomButton from '@/components/Button.vue';
import logInOutline from '../../public/log-in-outline.svg'
import arrowBack from '../../public/arrow-back.svg'

import { StatusBar } from '@capacitor/status-bar';

let email = ref('');
let password = ref('');
let confirmPassword = ref('');
let emailError = ref('');
let passwordError = ref('');

function validateEmail() {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email.value).toLowerCase())) {
    emailError.value = 'Por favor, insira um email válido';
  } else {
    emailError.value = '';
  }
}

function validatePasswords() {
  if (password.value !== confirmPassword.value) {
    passwordError.value = 'As senhas não coincidem';
  } else {
    passwordError.value = '';
  }
}

onMounted(() => {
  StatusBar.setOverlaysWebView({ overlay: true });
});

defineExpose({
  email,
  password,
  confirmPassword,
  emailError,
  passwordError,
  validateEmail,
  validatePasswords,
});
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cherry+Cream+Soda&display=swap');

.custom-bg {
  height: 100%;
  background-color: #161927;
}

.icon-row {
  margin-top: 60px;
  margin-right: 280px;
}

.image-style {
  margin-top: 60px;
  padding-bottom: 10px;
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
  margin-top: 30px;
}

.error-text {
  color: red;
  font-size: 0.8rem;
}
</style>
