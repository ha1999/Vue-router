<template>
    <div>
        <h1>Not Found</h1>
        <p>
            We could't find that page request. Try going!
            <router-link :to="{name: 'Home'}"> Home page</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>