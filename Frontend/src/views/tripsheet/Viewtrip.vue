<template>
    <div class="container" style="margin:10%">    
        <h5 >View & Edit Trip Sheet Number:   <span style="font-size:28px;color:blue;text-transform: uppercase;"> {{ trip.tripsheetno }} </span>
        </h5>



  <div class="form-row">
    <label for="vehicleno" class="form-label">Vehicle Numeber :{{ trip.vehicleno }}</label>
    <!--<input class="form-control" style="width:40%;float: left; margin-left: 1rem;" type="text" v-model="vehicleno" placeholder="Vehicle Number">--> 
    <br>
</div>
<div v-for="trip in trip.trip" :key="trip._id">
    <label for="gcno">Gc Number</label>  {{trip.gcno}} 
    <div v-for="tablerow in tablerows" :key="tablerow._id">
      <router-link class="secondary-content" v-bind:to="{ name: 'edit-tripsheet', params: { trip_id: trip._id }}"><i class="fa fa-edit" style="font-size:16px;color:red"></i></router-link> 
    <!--<input class="form-control" style="width:40%; margin-left: 1rem;" type="number" v-model="tablerow.gcno" placeholder="Gc Number">   -->
   </div>
</div>
          <!--
        <div id="product-list-two"> 
           <ul>       
               <li>            
               <label for="vehicleno">Vehicle Number:   {{trip.vehicleno}}  <input type="text" v-model="vehicleno" placeholder="Vehicle Number">    </label>
              </li>                
           </ul> 
        </div>


     
        <table id="customers">
            <tr>
                <td>TRIP SHEET NUMBER</td>
            </tr>
            <tr>
                <th>{{ trip.tripsheetno }}</th>
            </tr>
        </table>
        -->
    <!--
         <div class="row" style="position:abosolute">
    <form @submit.prevent="updatetrip" class="col s12">
      <div class="row">
        <div class="input-field col s12">
            <label for="vehicleno"></label>  {{trip.vehicleno}} 
            <input type="text" v-model="vehicleno" placeholder="Vehicle Number">   
          </div>
      </div>
      <table id="customers" >     
                    
                    <tr>
                      <th>GC NO</th>                   
                    </tr>
                   
                    <tbody>                     
                    <tr v-for="trip in trip.trip" :key="trip.gcno">                       
                        <router-link class="secondary-content" v-bind:to="{ name: 'edit-tripsheet', params: { trip_id: trip._id }}"><i class="fa fa-edit" style="font-size:26px;color:red"></i></router-link> 
                        <td> <label for="vehicleno"></label>  {{trip.gcno}} 
                        <input type="text" v-model="vehicleno" placeholder="Vehicle Number">                 
                         </td>   
                        </tr>
                  </tbody>    
            </table>  
             </form>
              </div>
-->

                <br>
    <button type="submit" class="btn" style="margin-right: 16px;border-radius: 12px;">Update</button>
      <router-link to="/tripsheet" class="btn blue" style="border-radius: 12px;">Cancel</router-link>
      
   <!--<router-link class="secondary-content" v-bind:to="{ name: 'edit-tripsheet'}"><i class="fa fa-edit" style="font-size:26px;color:blue"></i></router-link> 
   <button type="submit" @click="removetrip"><i style="font-size:28px;color:red;cursor: pointer;" class="fa fa-trash-alt"></i></button>        -->                         

     </div>
    
   </template>
   
   <script>
   import axios from 'axios'
   export default {
       name:'view-tripsheet',
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
      async mounted() {
      
       const path=this.$router.currentRoute.value.path
       //console.log(path)
       const response = await axios.get('http://localhost:3000' + path)
       //console.log(response.data)
       this.trip = response.data
       
     },
     methods: {

        async updatetrip(){
        try {
            const tableValues = this.tablerows.map(value => {
        return {          
        vehicleno:this.vehicleno,
        gcno:value.gcno
      }
      })
      console.log('Update Button Clicked')
            const path=this.$router.currentRoute.value.path
            console.log(path)
            await axios.put('http://localhost:3000'+path,{
              tableValues                
            })

    } catch (e) {
          console.error("Error Updating document: ", e);
        }
        this.$router.push({ name: 'view-user' })
        }
            
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