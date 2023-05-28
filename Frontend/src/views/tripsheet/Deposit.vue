<template>
 <div style="margin: 5%;">
    
    <div>

     
              <img src="../../assets/swastiknew.jpg" alt="" style="display: block;  margin-left: auto;  margin-right: auto;  width: 5%;">
            
                <h4 style="text-align: center;color:blue;font-weight: bold;">SHREE GURU TRANSPORT</h4>
                <p style="text-align: center;font-size: small;line-height: 10%;">Head Office:60/1,Old Taragupet,BANGALORE-53</p>
                <p style="text-align: center;font-size: small;line-height: 10%;">Branch Office:24/4,4th Main Road,New Taragupet,BANGALORE-53</p>
                        
    </div>   
            <div style="align-items: center;">
                   <h5 style="color:blue;text-align: center;border: 2px solid ;border-radius: 12px;padding: 5px;width: 20%;margin:auto;">Deposit to Bank</h5>
            </div>  
            <br>
            
           <!--
            <i class="fa fa-search-plus" style="margin: 5%;font-size:22px;color:blue;"> </i>
              <input class="input" style="text-align: center;width:40%;" v-model="search" placeholder="Search Tripsheet Number"/>
            -->
              <br>
               <div style="margin-left: 12%;width: 40%;">
              <input type="date" v-model="startDate">
              <input type="date" v-model="endDate">
              </div>
              <br>

      <ul>
          <li v-for="trip in filteredTrips" :key="trip.trip_date">           
            <table id="customers">
              <tr>   
                <th style="width:10%">Trip Sheet Number</th>            
              <th style="width:10%">Trip Date</th>
                                  
              </tr> 
            <tbody>
            <tr>
              <td>{{ trip.tripsheetno }}</td>
              <td>{{timestampToDate(trip.trip_date)}} </td>
             
            </tr>
             </tbody>
            </table> 
            <table id="customers">
            <tr>
              <th style="color: blue;">Enter Bank Deposit Amount</th>   
              <th style="color: red;">Deposit Due</th>   
            </tr>
            <tbody>
              <tr>
              <td><input type="number" v-model="deposit"/></td> 
              <td>{{ trip.topaytotal }}</td>   
            </tr>
            </tbody>
          </table>

          </li>
          <br>         
          <button @click="Submit" class="btn green">SUBMIT</button> 
        
        </ul>
 </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Deposit',
    components: {  
    },
    data(){
      return{
       trips:[],
       deposit:'',
       search:'',
       startDate: '',
       endDate: ''
      }
    },

    computed:{
     
        filteredTrips: function(){
           /*
          return this.trips.filter((trip)=>{
            return trip.tripsheetno.toLowerCase().match(this.search.toLowerCase())
          })
            */

          /*  if (this.startDate && this.endDate) {
        return this.trips.filter(trip_date => trip_date >= this.startDate && trip_date <= this.endDate);
      } else {
        return this.trips;
      }*/

      if (this.startDate && this.endDate) {
        return this.trips.filter((trip)=>{
          return trip_date => trip_date >= this.startDate && trip_date <= this.endDate
        })
      } else {
        return this.trips;
      }
           
        /*
        if (!this.startDate && !this.endDate) {
          return this.trips
          }
          return this.trips.filter(trip => {
          const tripDate = new Date(trip_date);
          const start = new Date(this.startDate);
          const end = new Date(this.endDate);
          return tripDate >= start && tripDate <= end                       
         })
         */
         
        /*
        let filterType = this.selectedType
        if (!filterType) return this.trips;

       let startDate = this.startDate && new Date(this.startDate);
       let endDate = this.endDate && new Date(this.endDate);
       return this.trips.filter(trip => {
        return trip.type == filterType;
      }).filter(trip => {
        const itemDate = new Date(trip_date)
        if (startDate && endDate) {
          return startDate <= itemDate && itemDate <= endDate;
        }
        if (startDate && !endDate) {
          return startDate <= itemDate;
        }
        if (!startDate && endDate) {
          return itemDate <= endDate;
        }
        return true;  // when neither startDate nor endDate selected
      })
      */





}
    },
    mounted(){
        let api_url = this.$store.state.api_url;
         axios.get(api_url + 'tripsheet/gettrips', {
                  auth_token: localStorage.getItem('jwt'),                
              })
              .then(response =>{
                  this.trips = response.data
                  //console.log(this.trips);
              }).catch(function(error) {
                console.log(error);
            });
    },
    methods:{
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
        //let hour = d.getHours()
        //let minute = d.getMinutes()
  
        return day + '/' + month + '/' + year
      }, 
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