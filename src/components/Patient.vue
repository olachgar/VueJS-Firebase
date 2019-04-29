<template>
    <md-card md-with-hover>
        
            <md-card-header>
                <md-avatar>
                <img :src="patient.photo" alt="Avatar">
                </md-avatar>

                <div class="md-title">{{ patient.firstName + ' ' +  patient.lastName}}</div>
                <div class="md-subhead">Subtitle here</div>
            </md-card-header>

            <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
            </md-card-content>

            <md-card-actions>

                <md-button class="md-icon-button">
                <md-icon style="color:black;">attach_file</md-icon>
                <md-tooltip md-direction="top">Documents</md-tooltip>
                </md-button>        

                <md-button class="md-icon-button">
                    <router-link class="my-router-link" :to="{ name: 'patient-details', params: { id: patient.id }}">
                        <md-icon style="color:black;">notifications_none</md-icon>
                    </router-link>
                </md-button>        

                <md-button class="md-icon-button">
                <md-icon style="color:green;">event_available</md-icon>
                <md-tooltip md-direction="top">Prochains rendez-vous </md-tooltip>
                </md-button>        
                
                <md-button class="md-icon-button">
                <md-icon style="color:red;">restaurant_menu</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                <md-icon style="color:blue;">info</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                <md-icon>history</md-icon>
                </md-button>

            </md-card-actions>

    </md-card>
</template>


<script>

  export default {
        name: 'Patient',
        props: ['patient']
    }

</script>


<style lang="scss" scoped>

.md-card {
    width: 300px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  .my-router-link {
    text-decoration: none !important;
  }
</style>