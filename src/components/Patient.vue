<template>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{ patient.firstName + ' ' +  patient.lastName}}</div>
          <div class="md-subhead">
          
          <md-icon style="color:red;font-size: 10px;">brightness_1</md-icon>
              Homme ne le {{ patient.birthDate }}
          </div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>
              <md-icon>build</md-icon>
          </md-button>
          <md-button>
              <md-icon>local_hospital</md-icon>
          </md-button>
          <md-button>
              <md-icon>https</md-icon>
          </md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
</template>


<script>

  export default {
    name: 'Patient',
    props: ['patient']
    }
</script>


<style lang="scss">
.md-card {
    width: 300px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>