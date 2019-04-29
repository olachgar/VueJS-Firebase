<template>
    <div>

    <md-card>
      <md-card-header>
        <div class="md-title">Card without hover effect {{$route.params.id}} </div>
      </md-card-header>

      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
      </md-card-content>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>

    <md-tabs class="md-transparent" md-alignment="fixed">
      <md-tab id="tab-home" md-label="Home">
        Home
      </md-tab>
      <md-tab id="tab-pages" md-label="Pages">
        Pages
      </md-tab>
      <md-tab id="tab-posts" md-label="Posts">
        Posts
      </md-tab>
      <md-tab id="tab-favorites" md-label="Favorites">
        Favorites  
      </md-tab>      
      <md-tab id="tab-favorite" md-label="Favorite">
        Favorite
      </md-tab>
      <md-tab id="tab-favorite01" md-label="Favorite01">
        <md-icon>thumb_up</md-icon>
      </md-tab>
    </md-tabs>
    
    </div>
</template>


<script>
   
  export default {
      name: 'PatientDetails',
      props: ['id']
    }

</script>


<style lang="scss" scoped>
.md-card{
  width: 95%;
  align-items: center;
}
  
</style>