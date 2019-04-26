<template>
    <div>
        <md-autocomplete
        v-model="selectedPatient"
        :md-options="allPatients"
        md-layout="box"
        md-dense>
        <label>Patients</label>
        </md-autocomplete>

        <Patient v-for="patient in allPatients" :key="patient.id" :patient="patient" ></Patient>

    </div>
</template>


<script>

import Patient from './Patient.vue'

  export default {
        name: 'Patients',
        data: () => ({
            selectedPatient: null
        }),
        components:{
            Patient
        },
        computed: {
            allPatients () {
                return this.$store.getters.usersAll
            } 
        }
    }
</script>


<style lang="scss">

</style>