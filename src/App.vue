<template>
  <div id="app">
    <TheNatigation />
      <router-view/>
  </div>
</template>
<script>
import TheNatigation from '@/components/TheNavigation'
export default {
  name: 'App',
  components :{ TheNatigation}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  margin: 0 auto;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #49cf14;
}
.input{
  border: 1px solid green;
  padding: 10px;
  margin-bottom: 20px;
}
.btn{
  background-color: green;
  color: white;
  padding: 10px;
}
*{
  text-decoration: none;
}
</style>
