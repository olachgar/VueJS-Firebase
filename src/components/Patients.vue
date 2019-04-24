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

var patients = [
        {
            id: 12345,
            firstName: 'Ryan',
            lastName: 'Howard',
            birthDate: '01/01/2000'
        },
        {
            id: 12345,
            firstName: 'Dwight',
            lastName: 'Schrute',
            birthDate: '01/01/1968'
        },
        {
            id: 12345,
            firstName: 'Kelly',
            lastName: 'Kapoor',
            birthDate: '01/01/1978'
        },
        {
            id: 12345,
            firstName: 'Angela',
            lastName: 'Martin',
            birthDate: '01/01/1999'
        },
        {
            id: 12345,
            firstName: 'Pam',
            lastName: 'Beesly',
            birthDate: '01/01/2005'
        },
        {
            id: 12345,
            firstName: 'Michael',
            lastName: 'Scott',
            birthDate: '01/01/1998'
        },
        {
            id: 12345,
            firstName: 'Oscar',
            lastName: 'Nunez',
            birthDate: '01/01/1985'
        },
        {
            id: 12345,
            firstName: 'Creed',
            lastName: 'Bratton',
            birthDate: '01/01/1994'
        }
      ]

  export default {
        name: 'Patients',
        data: () => ({
            selectedPatient: null,
            allPatients: patients
        }),
        components:{
            Patient
        }
    }
</script>


<style lang="scss">

</style>