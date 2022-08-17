<script lang="ts">
    import { onDestroy } from "svelte"
    import { savedCount, previewCount } from  "./../store"

    export let value: number = 0
    export let isFifth: boolean = false
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
        isPreviewed  = value <= newCountValue
    });

    onDestroy(unsubscribeSavedCount)
    onDestroy(unsubscribePreviewCount)

</script>

<template lang="pug">
    .mark(
        class!=[
            "{isCounted ? 'is-counted' : ''}", 
            "{isPreviewed ? 'is-previewed' : ''}", 
        ]
        on:click!="{saveCountValue}"
        on:mouseenter!="{showPreviewCount}"
        on:mouseleave!="{hidePreviewCount}"
    )
</template>

<style lang="sass">
    .mark
        border: solid 1px white
        align-self: center
        width: 15px
        height: 60px
        cursor: pointer

        &.is-counted
            border-color: indianred
            background-color: indianred

        &.is-previewed
            border-color: cyan
            background-color: cyan

        &.is

</style>
