<script lang="ts">
    export let value: Number = 0
    export let isFifth: Boolean = false
</script>

<template lang="pug">
    .mark
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
