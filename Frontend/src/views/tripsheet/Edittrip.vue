<template>

<div class="container" style="margin:10%">   
  <form @submit.prevent="updatetrip" class="col s12">
        <h5 >Edit Trip Sheet Number:   <span style="font-size:28px;color:blue;text-transform: uppercase;"> {{ trip.tripsheetno }} </span></h5>


<!--
  <div class="form-row">
    <label for="vehicleno" class="form-label">{{ trip.vehicleno }}</label>
    <input class="form-control" style="width:40%;float: left; margin-left: 1rem;" type="text" v-model="vehicleno" placeholder="Vehicle Number"> 
    <br>
   
</div>
 -->
<div v-for="trip in trip.trip" :key="trip._id">
    <label for="gcno"></label>  {{trip.gcno}} 
    <!--<div>
     <input class="form-control" style="width:40%; margin-left: 1rem;" type="number" v-model="trip.gcno" placeholder="Gc Number">   
   </div>
   -->
</div>
<br>
    <button type="submit" class="btn" style="margin-right: 16px;border-radius: 12px;">Update</button>
      <router-link to="/tripsheet" class="btn blue" style="border-radius: 12px;">Cancel</router-link>
 </form>
    </div>



    
<!--
  <div style="margin:10%">
  <table>        
      <tr>
      <th> GC No</th>
      <th>Consigner</th>
    </tr>    
    <td> <input type="number" v-model="gcno"> </td>
     <td> <input type="text" v-model="consigner"> </td>
    </table>
    
    <div class="row" style="position:abosolute">
    <form @submit.prevent="updatetrip" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="number" v-model="gcno" placeholder="GC Number">
          </div>
      </div>


    <button type="submit" class="btn" style="margin-right: 16px;border-radius: 12px;">Update</button>
      <router-link to="/tripsheet" class="btn blue" style="border-radius: 12px;">Cancel</router-link>
       </form>
    </div>

  
  </div>

  
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
        trip:[],
        vehicleno:null,
        tablerows:[
        {
      gcno:''
    }
    ],  
        
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
        
        //let api_url = this.$store.state.api_url
        //console.log(api_url)
        //const response =await axios.get(api_url + 'tripsheet/gettrips')
        const path=this.$router.currentRoute.value.path
        //console.log(path)        
        const response =await  axios.get('http://localhost:3000' + path)
        console.log(response.data)
        
        
        
        
        
},
methods:{
  async updatetrip(){
    console.log('Update Button Clicked')
  }
}
}
</script>

<style>
 #product-list-two{
       background: white;
       box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
       margin-bottom: 30px;
       padding: 10px 20px;
       
   }
   #product-list-two ul{
       padding: 0;
       list-style-type: none;
      }
   #product-list-two li{
       margin-right: 10px;
       margin-top: 10px;
       padding: 20px;
       background: rgba(254, 255, 255, 0.7);
       
   }
   
   .container{
     justify-content: center;
   }
   
   .input {
     width: 100%;
     padding: 12px 20px;
     margin: 8px 0;
     border: none;
     border-bottom: 2px solid rgb(0, 26, 255);
   }

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

  .form-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-label {
  margin-right: 1rem;
}

</style>