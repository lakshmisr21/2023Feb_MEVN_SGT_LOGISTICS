<template>
  <div>    
    <!--<p style="text-align: center;color: blue;">Welcome ! {{ name }}</p>-->     
    <Sidebar v-if="isAuthenticated"/>
    <div :style="{ 'margin-left': sidebardWidth }"></div>
      <Header v-if="isAuthenticated"/>        
      <router-view :key="$route.fullPath"></router-view>   
  </div> 
</template>

<script>
import axios from 'axios'
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/sidebar/Sidebar.vue'
import { sidebardWidth } from './components/sidebar/state'

export default {
  name: 'App',
  components:{
    Navbar,
    Header,
    Footer,
    Sidebar,
  },
   setup() {
    return { sidebardWidth }
  },
  data(){
    return{
     // feed:[],
     user:[],
     name:''
    }
  },
  async mounted() {
     this.$store.commit('isAuthenticated')
     let api_url = this.$store.state.api_url
                await axios.get(api_url + 'user/getusers', {
                auth_token: localStorage.getItem('jwt'),                
            })
            .then(response =>{
                //this.name = response.data
                //return this.$store.state.user
                this.name = response.data
                
            })
  },
  //async mounted() {
   // const response = await axios.get('http://localhost:3000/post/getposts')
    //this.feed = response.data
 // },
  computed:{
    isAuthenticated(){
      //return false;
       return this.$store.state.isAuthenticated    
       
    }
  },
  beforeMount() {
    this.$store.commit('isAuthenticated')
  },
}
</script>


<style>
body{
  margin:0;
  padding:0;
  background-color:white;
}

#app{
  width: 100vw;
  min-height: 100vh;
}
/*@import './assets/scss/main.scss'*/
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 
#nav {
  padding: 30px;
}
 
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
 
#nav a.router-link-exact-active {
  color: #42b983;
}
*/

</style>