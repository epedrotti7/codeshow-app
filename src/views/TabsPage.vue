<template>
  <ion-page>
    <ion-tabs :selected-tab="selectedTab">
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom" class="custom-tab-bar">
        
        <ion-tab-button @click="navigateTo('/tabs/playpage')" 
                        :class="{ 'selected-icon': selectedTab === '/tabs/playpage' }">
          <ion-icon aria-hidden="true" :icon="play" />
        </ion-tab-button>

        <ion-tab-button @click="navigateTo('/tabs/scorepage')" 
                        :class="{ 'selected-icon': selectedTab === '/tabs/scorepage' }">
          <ion-icon aria-hidden="true" :icon="speedometer" />
        </ion-tab-button>

        <ion-tab-button @click="navigateTo('/tabs/perfilpage')" 
                        :class="{ 'selected-icon': selectedTab === '/tabs/perfilpage' }">
          <ion-icon aria-hidden="true" :icon="peopleOutline" />
        </ion-tab-button>

        <ion-tab-button @click="navigateTo('/tabs/historypage')" 
                        :class="{ 'selected-icon': selectedTab === '/tabs/historypage' }">
          <ion-icon aria-hidden="true" :icon="time" />
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { peopleOutline, time, speedometer, play } from 'ionicons/icons';

let selectedTab = ref('')
const router = useRouter();

function navigateTo(route: string) {
  router.push(route);
  selectedTab.value = route;
}
</script>

<style scoped>
ion-tab-bar {
  --background: #161927;
  --border-width: 0;
  --box-shadow: none;
  --color: #fff; /* Cor dos ícones */
}

.selected-icon {
  --color: #16CE92; /* Cor do ícone quando selecionado */
}
</style>
