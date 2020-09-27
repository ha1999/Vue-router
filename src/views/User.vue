<template>
    <div>
        <h1> User page</h1>
        <h2>Welcome {{username}}</h2>
        <button @click="logOut" class="btn">Logout</button>
    </div>
</template>

<script>
import Store from '@/store'
    export default {
        data(){
            return {
                username: Store.user
            }
        },
        methods:{
            logOut(){
                Store.user = null
                this.$router.push('/')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>