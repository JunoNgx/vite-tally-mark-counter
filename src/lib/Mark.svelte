<script lang="ts">
    import { onDestroy } from "svelte"
    import { savedCount, previewCount } from  "./../store"

    export let value: Number = 0
    export let isFifth: Boolean = false
    let isCounted: Boolean = false

    function saveCountValue() {
        savedCount.set(value)
    }

    const unsubscribeSavedCount = savedCount.subscribe(newCountValue => {
        isCounted = value <= newCountValue
    });

    onDestroy(unsubscribeSavedCount)

</script>

<template lang="pug">
    .mark(
        class!="{isCounted ? 'is-counted' : ''}"
        on:click!="{saveCountValue}"
    )
        //- a {value}
        //- a {isCounted}
</template>

<style lang="sass">
    .mark
        border: solid 1px cyan
        align-self: center
        width: 7px
        height: 60px
        cursor: pointer

        &:hover
            background-color: cyan

        &.is-counted
            border-color: indianred
            background-color: indianred
</style>
