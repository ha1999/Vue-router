<template>
    <span class="go-back">
        <button @click="goBack">Go back</button>
    </span>
</template>

<script>
    export default {
        methods:{
            goBack(){
                return this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
.go-back{
    cursor: pointer;
    display: flex;
}
button{
    border:  0;
    padding: 10px 20px;
    background-color: yellow;
    cursor: pointer;
}
</style>