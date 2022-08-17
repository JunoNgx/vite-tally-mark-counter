<script lang="ts">
    import { savedCount, previewCount } from  "./../store"

    export let value: Number = 0
    export let isFifth: Boolean = false  

    function saveCountValue() {
        savedCount.set(value)
    }
</script>

<template lang="pug">
    .mark(
        on:click!="{saveCountValue}"
    )
        a {value}
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
</style>
