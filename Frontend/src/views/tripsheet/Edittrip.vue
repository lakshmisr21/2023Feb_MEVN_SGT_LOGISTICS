<template>

  <div style="margin:10%">
  <table>
    <!--<tr v-for="(trip) in trips" :key="trip.tripsheetno"> -->
      
      <tr>
      <th> GC No</th>
      <th>Consigner</th>
    </tr>    
    <td> <input type="number" v-model="gcno"> </td>
     <td> <input type="text" v-model="consigner"> </td>
    </table>
    <button type="submit" class="btn" style="margin-right: 16px;border-radius: 12px;">Update</button>
      <router-link to="/tripsheet" class="btn blue" style="border-radius: 12px;">Cancel</router-link>
  </div>
  <!--
   <div style="margin:10%">
      <h3>Update TripSheet:</h3> 
        
    <div class="row" style="position:abosolute">
    <form @submit.prevent="updatetrip" class="col s12">
      <table>
      <div class="row">
        <div class="input-field col s12">
          <tr>
            <td> <label for="gcno">GC Number:</label> </td>
        </tr>
        <tr v-for="trip in trips" :key="trip._id">  
          <td>{{ this.gcno }}</td>  
          <td> <input type="text" v-model="gcno"> </td> 
        </tr>
        </div>
      </div>
        </table>     

      <button type="submit" class="btn" style="margin-right: 16px;border-radius: 12px;">Update</button>
      <router-link to="/tripsheet" class="btn blue" style="border-radius: 12px;">Cancel</router-link>
    </form>
  </div>
</div>



  <div class="admin" style="margin:10%">      
  <div class="container">       
       <div id="product-list-two"> 
        <ul>         
            <li>           
             <label for="gcno">GC No:</label>
        <div class="row">
          <div class="input-field col s12">
          <input type="text" v-model="gcno">
        </div>
      </div>
            
      </li>         
    </ul>       
  </div>
  </div>
  <button type="submit" class="btn" style="margin-right: 16px;border-radius: 12px;">Update</button>
  <router-link to="/tripsheet" class="btn blue" style="border-radius: 12px;">Cancel</router-link>
   </div>
  
-->
 

</template>

<script>
import axios from 'axios'
export default {
name:'edit-tripsheet',
data(){
    return{
        trips:[],
        tripsheetno:null,
        gcno:null,
        consigner:null,
    }
},
async mounted(){
  /*let api_url = this.$store.state.api_url
  
                  axios.get(api_url + 'tripsheet/gettrips', {
                  auth_token: localStorage.getItem('jwt'),                
              })
              .then(response =>{
                  this.trips = response.data
                 console.log(this.trips)      
                 //this.tripsheetno = response.data.tripsheetno,
                 this.gcno = response.data.gcno   
                 this.consigner = response.data.consigner    
              }, 
                  ).catch(function(error) {
                console.log(error);
            });
            */
        
        let api_url = this.$store.state.api_url
        //console.log(api_url)
        const path=this.$router.currentRoute.value.path
        console.log(path)
        const response =await axios.get(api_url + 'tripsheet/gettrips')
        this.trips = response.data
        console.log(this.trips)
        this.gcno = response.data.gcno,
        this.consigner = response.data.consigner
        
        
},
methods:{
  async updatetrip(){

  }
}
}
</script>

<style>
 #customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  #customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    /*display: inline-block;*/
  }
  
  #customers tr:nth-child(even){background-color:white}
  
  #customers tr:hover {background-color: #ccdcf5;}
  
  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #ecf8f2;
    color: rgb(21, 20, 20);
  }

</style>