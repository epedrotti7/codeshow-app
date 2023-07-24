<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="custom-bg">
        <ion-grid>

          <ion-row class="main-row" style="height: 100%;">

            <ion-col size="12" class="ion-text-center text-style-1">
              <Text>Oi, Eliton.</Text>
            </ion-col>

          </ion-row>

        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>
  
<script setup lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonItem, IonIcon } from '@ionic/vue';
import { onMounted } from 'vue';
import Text from '@/components/Text.vue';

import { StatusBar } from '@capacitor/status-bar';

onMounted(() => {
  StatusBar.setOverlaysWebView({ overlay: true });
});

</script>
  
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cherry+Cream+Soda&display=swap');

.custom-bg {
  height: 100%;
  background-color: #161927;
}
</style>
  