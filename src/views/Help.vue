<template>
    <md-empty-state
        md-rounded
        md-icon="help"
        md-label="Help"
        md-description="Anything you snooze will go here until it's time for it to return to the inbox.">
    </md-empty-state>
</template>


<script>

  export default {
    name: 'Help',
    mounted() {
        document.title = 'Help mounted';
    }
    }
</script>


<style lang="scss">

</style>