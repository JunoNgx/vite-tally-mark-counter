<script lang="ts">
    import Counter from "./lib/Counter.svelte"

    let counter = 1;
</script>

<template lang="pug">
    .container
        .counter {counter}
        - var i = 0
        .tally-marks-container
            while i < 20
                Counter(serialNumber=i++)
</template>

<style lang="sass">
    .container
        padding: 12px
        border: 2px solid white
        width: 720px
        height: 720px
        display: flex
        flex-flow: column nowrap
        justify-content: space-around

        .counter
            width: 100%
            height: 64px
            font-size: 4rem
            display: grid
            place-items: center center

        .tally-marks-container
            background-color: indianred
            width: 100%
            display: flex
            flex-flow: row wrap
            justify-content: space-between
            gap: 10px
</style>