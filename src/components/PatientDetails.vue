<template>
    <div>

    <md-card style="with:100%;">
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
      <md-tab id="tab-home" md-label="Home"></md-tab>
      <md-tab id="tab-pages" md-label="Pages"></md-tab>
      <md-tab id="tab-posts" md-label="Posts"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
    </md-tabs>
    
    </div>
</template>


<script>
   
  export default {
      name: 'PatientDetails',
      props: ['id']
    }

</script>


<style lang="scss">

  
</style>