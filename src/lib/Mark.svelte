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
        isCounted = value > 0 && value <= newCountValue
    });

    const unsubscribePreviewCount = previewCount.subscribe(newCountValue => {
        isPreviewed = value > 0 && value <= newCountValue
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
    .mark
        margin: 0
        border: solid 1px white
        align-self: center
        width: 12px
        height: 60px
        cursor: pointer

        &.is-fifth
            position: absolute
            transform: rotate(82deg)
            height: 180px

        &.is-counted
            border-color: indianred
            background-color: indianred

        &.is-previewed
            border-color: cyan
            background-color: cyan

</style>
