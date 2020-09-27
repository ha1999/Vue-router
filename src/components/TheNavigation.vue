<template>
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link v-for="destination in destinations" 
      :key="destination.name"
      :to="{
          name: 'DestinationDetails',
          params: { slug: destination.slug }
      }"
      >
        {{destination.name}}
      </router-link> 
      <router-link to='/user'>Dashboard</router-link>
    </nav>
</template>
<script>
import Store from '@/store.js'
export default {
    data(){
        return {
            destinations: Store.destinations
        }
    }
}
</script>
<style scoped>
    #nav{
        display: flex;
        align-items: center;
        margin: 0 auto;
    }
</style>