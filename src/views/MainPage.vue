<template>
  <ion-page>
    <ion-content :fullscreen="true">

      <div class="custom-bg">
        <ion-grid>
          <ion-row style="height: 100%;">

            <ion-col size="12" class="ion-text-center text-style-1">
              <Text>Bem vindo ao Codeshow!</Text>
            </ion-col>

            <ion-col size="12" class="ion-text-center image-style">
              <Image imagem="../public/codeshow.png" width="150px" height="150px" />
            </ion-col>

            <ion-col size="12" class="ion-text-center button-style">
              <CustomButton @click="goToLogin" texto="Login" :icon="logInOutline" />
            </ion-col>

            <ion-col size="12" class="ion-text-center text-style-2">
              <Text @click="goToRegister">Cadastre-se</Text>
            </ion-col>

          </ion-row>
        </ion-grid>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import Image from '@/components/Image.vue';
import Text from '@/components/Text.vue';
import CustomButton from '@/components/Button.vue';
import logInOutline from '../../public/log-in-outline.svg'

import { onMounted } from 'vue';
import { StatusBar } from '@capacitor/status-bar';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
  console.log('Foi pro login')
  router.push('/login');
};

const goToRegister = () => {
  router.push('/register');
};

onMounted(() => {
  StatusBar.setOverlaysWebView({ overlay: true });
});
</script>

<style scoped>
.custom-bg {
  height: 100%;
  background-color: #161927;
}

.text-style-1 {
  font-size: 25px;
  padding-top: 125px;
}

.text-style-2 {
  margin-top: 30px;
  font-size: 25px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.image-style {
  margin-top: 80px;
  padding-bottom: 10px;
}

.button-style {
  margin-top: 90px;
}
</style>
