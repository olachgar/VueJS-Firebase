<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">

        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        
        <span class="md-title">My App</span>

        <div class="md-toolbar-section-end">
          
          <md-badge class="md-primary md-square" md-position="bottom" md-content="12">
            <md-menu md-size="medium" md-align-trigger>
          <md-button md-menu-trigger class="md-icon-button">
            <md-avatar>
              <img :src="photo" alt="People">
            </md-avatar>
          </md-button>

            <md-menu-content>
              <md-menu-item>
                <md-icon>insert_comment</md-icon>
                <span>Log out</span>
              </md-menu-item>
              <md-menu-item>
                <md-icon>verified_user</md-icon>
                <span>Log out</span>
              </md-menu-item>
              <md-menu-item>
                <md-icon>settings_power</md-icon>
                <span>Log out</span>
              </md-menu-item>
            </md-menu-content>
          </md-menu>

          </md-badge>
          
          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>

        </div>

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
                <md-icon style="color:red;">calendar_today</md-icon>
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
                <md-icon style="color:orange;">settings</md-icon>
                <span class="md-list-item-text">Configuration</span>
              </router-link>
            </md-list-item>

            <md-list-item>
              <md-icon style="color:pink;">business</md-icon>
              <span class="md-list-item-text">Cabinet</span>
              <md-badge class="md-square" md-content="not available" />
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
      menuVisible: false,
      photo: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/02/13/gettyimages-469954510.jpg?w968h681',
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