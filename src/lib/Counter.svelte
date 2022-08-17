<script lang="ts">
    import Mark from "./Mark.svelte"
    export let serialNumber: number = 0
</script>

<template lang="pug">
    .counter-container
        +each("Array(5).fill().map((_, i) => i) as index")
            //- - const isFifth = (i % 5) === 0
            Mark(value!="{index + serialNumber * 5}")
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
