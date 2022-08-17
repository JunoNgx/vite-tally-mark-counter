<script lang="ts">
    import Mark from "./Mark.svelte"

    export let serialNumber = 0
</script>

<template lang="pug">
    - var i = 1
    .counter-container
        while i < 6
            Mark(value=i++)
</template>

<style lang="sass">
    .counter-container
        border: 2px solid white
        width: 150px
        height: 75px
        display: flex
        flex-flow: row nowrap
        justify-content: space-around

</style>
