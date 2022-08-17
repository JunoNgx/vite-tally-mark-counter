<script lang="ts">
    export let parentSn: Number = 0
    export let position: Number = 0
    export let isFifth: Boolean = false
    const value = position + 99
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
