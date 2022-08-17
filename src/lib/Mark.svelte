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
        align-self: center
        background-color: cyan
        width: 7px
        height: 60px
        
</style>
