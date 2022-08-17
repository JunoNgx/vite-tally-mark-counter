<script lang="ts">
    import { onDestroy } from "svelte"
    import { savedCount, previewCount } from "./store"
    import Counter from "./lib/Counter.svelte"

    // let savedCountValue
    // let previewCountValue

    // const unsubscribeSavedCount = savedCount.subscribe(value => {
    //     savedCountValue = value
    // })

    // // const unsubscribePreviewCount = previewCountValue.subscribe(value => {
    // //     previewCountValue = value
    // // })

    // onDestroy(unsubscribeSavedCount)
    // // onDestroy(unsubscribePreviewCount)
</script>

<template lang="pug">
    .container
        .counter.counter-actual {$savedCount}
        .counter.counter-preview
            +if('$previewCount > 0')
                | {$previewCount}

        .tally-marks-container
            - for (let i =  0; i < 20; i++)
                Counter(serialNumber=i)
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

            &.counter-actual
                color: indianred

            &.counter-preview
                color: cyan
                opacity: 0.2
                
        .tally-marks-container
            width: 100%
            display: flex
            flex-flow: row wrap
            justify-content: space-between
            gap: 10px
</style>