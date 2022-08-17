<script lang="ts">
    import { onDestroy } from "svelte"
    import { savedCount, previewCount } from "./store"
    import Counter from "./lib/Counter.svelte"
</script>

<template lang="pug">
    .container
        .counter.counter-actual {$savedCount}
        .counter.counter-preview
            +if('$previewCount > 0')
                | {$previewCount}

        .tally-marks-container
            - for (let i =  0; i < 21; i++)
                Counter(serialNumber=i)
</template>

<style lang="sass">
    .container
        padding: 12px
        border: 2px solid white
        width: 720px
        height: 768px
        display: flex
        flex-flow: column nowrap
        justify-content: space-around

        .counter
            width: 100%
            height: 64px
            font-size: 4rem
            display: grid
            place-items: center center

            &.counter-actual
                color: indianred

            &.counter-preview
                color: DarkSeaGreen
                opacity: 0.2
                
        .tally-marks-container
            width: 100%
            display: flex
            flex-flow: row wrap
            justify-content: space-between
            gap: 10px
</style>