<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      
        <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
          <md-toolbar class="md-transparent" md-elevation="0">
            <span>Navigation</span>

            <div class="md-toolbar-section-end">
              <md-button class="md-icon-button md-dense" @click="toggleMenu">
                <md-icon>keyboard_arrow_left</md-icon>
              </md-button>
            </div>
          </md-toolbar>

          <md-list>

            <md-list-item>
              <router-link class="md-list-item-content my-router-link" :to="{ name: 'dashboard'}">
                <md-icon style="color:green;">dashboard</md-icon>
                <span class="md-list-item-text">Tableau de bord</span>
              </router-link>
            </md-list-item>

            <md-list-item>
              <router-link class="md-list-item-content my-router-link" :to="{ name: 'calendar'}">
                <md-icon>calendar_today</md-icon>
                <span class="md-list-item-text">Agenda</span>
              </router-link>
            </md-list-item>

            <md-list-item>
              <router-link class="md-list-item-content my-router-link" :to="{ name: 'records'}">
                <md-icon>folder_shared</md-icon>
                <span class="md-list-item-text">Patients</span>
              </router-link>
            </md-list-item>

            <md-list-item>
              <router-link class="md-list-item-content my-router-link" :to="{ name: 'settings'}">
                <md-icon>settings</md-icon>
                <span class="md-list-item-text">Configuration</span>
              </router-link>
            </md-list-item>

            <md-list-item>
              <md-icon style="color:pink;">business</md-icon>
              <span class="md-list-item-text">Cabinet</span>
            </md-list-item>

            <md-list-item>
              <router-link class="md-list-item-content my-router-link" :to="{ name: 'help'}">
                <md-icon>help</md-icon>
                <span class="md-list-item-text">À propos</span>
              </router-link>
            </md-list-item>

          </md-list>
        </md-app-drawer>



      <md-app-content>
        
        <transition name="fade">
          <router-view></router-view>
        </transition>

      </md-app-content>

    </md-app>
  </div>
</template>

<script>

  export default {
    name: 'PersistentMini',
    data: () => ({
      menuVisible: false
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
  }
</script>

<style lang="scss">
  .md-app {
    min-height: 500px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .my-router-link {
    padding:0px !important;
    text-decoration: none !important;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>