<template>
    <md-empty-state
        md-rounded
        md-icon="dashboard"
        md-label="Dashboard"
        md-description="Anything you snooze will go here until it's time for it to return to the inbox.">
    </md-empty-state>
</template>


<script>
  export default {
        name: 'Dashboard',
        mounted() {
            document.title = 'Dashboard mounted';
        }
    }
</script>


<style lang="scss">

</style>