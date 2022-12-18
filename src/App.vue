<template>
  <n-config-provider :theme="darkTheme">
    <n-message-provider>
      <n-popup-provider>
        <div class="app">
          <ElonMap />
          <div class="actions">
            <n-button tertiary type="success" class="custom" @click="showAbout = true">
              <template #icon>
                <n-icon>
                  <cafe-outline />
                </n-icon>
              </template>
              By me a coffee
            </n-button>
            <n-popup v-model:show="showAbout" trigger="click" title="About">
              <template #trigger>
                <n-button tertiary type="success" class="custom">
                  <template #icon>
                    <n-icon>
                      <book-outline />
                    </n-icon>
                  </template>
                  About this app
                </n-button>
              </template>
              <Coffee />
              <Impressum />
            </n-popup>
            <!-- <footer>
              <span class="text">
                Made with ❤️ by <a target="_blank" href="https://twitter.com/MauriceConrad">Maurice Conrad</a>
                
              </span>
            </footer> -->
          </div>
        </div>
      </n-popup-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, NMessageProvider, NIcon, NButton, darkTheme } from 'naive-ui'
import { NPopup, NPopupProvider } from 'naive-tools'
import 'naive-tools/style.css'
import ElonMap from './components/ElonMap.vue'
import { CafeOutline, BookOutline } from '@vicons/ionicons5'
import Impressum from './components/Impressum.vue'
import Coffee from './components/Coffee.vue'
import { ref } from 'vue'

const showAbout = ref(false);

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body, html, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Jost', sans-serif;
  background-color: rgb(14, 14, 14);
}

</style>

<style scoped lang="scss">
.n-config-provider {
  height: 100%;
  --popup-background-color: rgb(28, 28, 30);
  color: #fff;
}
.app {
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto max-content;
  .elon-map {
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
  }
  .actions {
    border-radius: 12px 12px 0 0;
    
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    //pointer-events: none;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 22px 20px 20px 20px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    display: grid;
    grid-template-columns: auto auto;
    @media screen and (max-width: 600px) {
      grid-template-columns: auto;
    }
    gap: 20px;
    ::v-deep(.trigger-wrapper) {
      width: 100%;
    }
    > footer {
      grid-column: 1 / span 2;
      @media screen and (max-width: 600px) {
        grid-column: 1 / span 1;
      }
      color: #fff;
      text-align: center;
      a {
        color: inherit;
      }
    }
  }
}
</style>


<style lang="scss">
.n-button.custom {
  width: 100%;
  pointer-events: all;
  padding: 20px;
  color: #333 !important;
  background-color: rgb(18, 228, 158) !important;
  border-radius: 8px;
}
</style>