<script lang="ts">
    import { onDestroy } from "svelte"
    import { savedCount, previewCount } from  "./../store"

    export let value: number = 0
    const isFifth: boolean = (value % 5 === 0)
    let isCounted: boolean = false
    let isPreviewed: boolean = false

    function saveCountValue() {
        savedCount.set(value)
    }

    function showPreviewCount() {
        previewCount.set(value)
    }

    function hidePreviewCount() {
        previewCount.set(0)
    }

    const unsubscribeSavedCount = savedCount.subscribe(newCountValue => {
        isCounted = value <= newCountValue
    });

    const unsubscribePreviewCount = previewCount.subscribe(newCountValue => {
        isPreviewed = value <= newCountValue
    });

    onDestroy(unsubscribeSavedCount)
    onDestroy(unsubscribePreviewCount)

</script>

<template lang="pug">
    .mark(
        class!=[
            "{isCounted ? 'is-counted' : ''}", 
            "{isPreviewed ? 'is-previewed' : ''}",
            "{isFifth ? 'is-fifth' : ''}"
        ]
        on:click!="{saveCountValue}"
        on:mouseenter!="{showPreviewCount}"
        on:mouseleave!="{hidePreviewCount}"
    )
</template>

<style lang="sass">

    @mixin trans
        transition: background-color 0.3s ease-out

    .mark
        margin: 0
        // border: solid 1px white
        background-color: white
        align-self: center
        width: 12px
        height: 60px
        cursor: pointer
        +trans

        &.is-fifth
            position: absolute
            transform: rotate(82deg)
            height: 130px
        
        &:not(.is-fifth)
            z-index: 1

        &.is-counted
            // border-color: indianred
            background-color: indianred
            +trans

        &.is-previewed
            // border-color: DarkSeaGreen
            background-color: DarkSeaGreen
            +trans

</style>
