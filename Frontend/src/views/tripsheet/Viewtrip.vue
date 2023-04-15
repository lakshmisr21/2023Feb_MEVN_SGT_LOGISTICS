<template>
    <div class="container" style="margin:10%">    
        <h5 >View & Edit Trip Sheet Number:   <span style="font-size:28px;color:blue;text-transform: uppercase;"> {{ trip.tripsheetno }} </span>
        </h5>



  <div class="form-row">
    <!--<label for="vehicleno" class="form-label">Vehicle Numeber :{{ trip.vehicleno }}</label>
    <input class="form-control" style="width:40%;float: left; margin-left: 1rem;" type="text" v-model="vehicleno" placeholder="Vehicle Number">--> 
    <br>
</div>
<div class="form-row" v-for="trip in trip.trip" :key="trip._id">
    <label for="gcno">Gc Number</label>  {{trip.gcno}} 
    <div style="flot: left;margin: left;"  v-for="tablerow in tablerows" :key="tablerow._id">
      
      <router-link class="secondary-content" v-bind:to="{ name: 'edit-tripsheet', params: { tablerow_id: tablerow._id }}"><i class="fa fa-edit" style="font-size:16px;color:red"></i></router-link> 
    
      <!--<input class="form-control" style="width:40%; margin-left: 1rem;" type="number" v-model="tablerow.gcno" placeholder="Gc Number">   -->
   </div>
</div>
        
                <br>
   
      <router-link to="/tripsheet" class="btn blue" style="border-radius: 12px;">Cancel</router-link>
      
   
     </div>
    
   </template>
   
   <script>
   import axios from 'axios'
   export default {
       name:'view-tripsheet',
      data(){
       return{
         trip:[],
         //vehicleno:null,
         tablerows:[
        {
      gcno:''
    }
    ],  
       }
     },
      async mounted() {
      
       const path=this.$router.currentRoute.value.path
       //console.log(path)
       const response = await axios.get('http://localhost:3000' + path)
       //console.log(response.data)
       this.trip = response.data
       
     },
     methods: {

                    
   },

        timestampToDate (timestamp) {
         timestamp = new Number(timestamp)
         let d = new Date(timestamp)
         let year = d.getFullYear()
         let month = d.getMonth() + 1
         if(month < 10){
           month = "0" + month
         }
         let day = d.getDate()
         if(day < 10){
           day = "0" + day
         }
         let hour = d.getHours() 
         let minute = d.getMinutes() 
   
         return day + '/' + month + '/' + year + ' ' + hour + ':' + minute
       }, 
        async removetrip(){
       if(confirm){
       alert('Are you sure?')
       const path=this.$router.currentRoute.value.path
       console.log(path)    
       await axios.delete('http://localhost:3000'+path)
       console.log('Trip Sheet Successfully Deleted')
       this.$router.push({ name: 'tripsheet' })
       }
       },
     }
    
   
   </script>
   
   <style>
   /* List */
   
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