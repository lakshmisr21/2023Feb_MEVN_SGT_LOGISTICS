<template>

  <div class="admin" style="margin:10%" >      
    <div class="container">   
        
               <i class="fa fa-search-plus" style="font-size:22px;color:blue;"> </i>
              <input class="input" style="text-align: center;width:40%;" v-model="search" placeholder="Search Tripsheet Number"/>
  
               <div class="fixed-action-btn">
                 <router-link to="/newtripsheet" >
                  <i class="fas fa-plus-circle" style="font-size:40px;color:green"></i>
                 </router-link>
                </div>
    
   
    <ul class="collapsible" style="margin:7%" >
      <li v-for="trip in filteredTrips" :key="trip._id">
        <div class="collapsible-header" style="padding-right:50px" :id="trip._id">
          <i class="fa fa-truck"></i>

         <div style="align-items: center;text-align: center;color:blue">
          {{ trip.tripsheetno }}
         </div>
        </div>
  
          <div class="collapsible-body" style="border:1px solid black" >
         
    
          <div>
            <img src="../../assets/swastiknew.jpg" alt="" style="display: block;  margin-left: auto;  margin-right: auto;  width: 5%;">
          
              <h4 style="text-align: center;color:blue;font-weight: bold;">SHREE GURU TRANSPORT</h4>
              <p style="text-align: center;font-size: small;line-height: 10%;">Head Office:60/1,Old Taragupet,BANGALORE-53</p>
              <p style="text-align: center;font-size: small;line-height: 10%;">Branch Office:24/4,4th Main Road,New Taragupet,BANGALORE-53</p>
  
                          
              <div style="line-height: 1%">
                <p class="alignleft" style="color:red;font-weight:bold;">Trip Sheet No: {{trip.tripsheetno}}</p>
                <p class="alignright" style="color:red;font-weight:bold;">Date:  {{timestampToDate(trip.trip_date)}} </p>
              </div> 
             
              <div style="clear: both;"></div>
              
              <div style="line-height: 1%">
                <p class="alignleft" style="color:blue;font-weight:bold;">From Bangalore To: {{trip.place}} </p>
                <p class="alignright" style="color:blue;font-weight:bold;">Vehicle No:{{trip.vehicleno}}</p>
              </div> 
            
              <div style="clear: both;"></div>
          </div>
          
         <div >      
           
             <table id="customers" >     
                    
              <tr>
                <th>SL NO</th>
                <th>GC NO</th>
                <th>CONSIGNER</th>
                <th>CONSIGNEE</th>
                <th>QUANTITY</th>
                <th>TO PAY</th>
                <th>PAID</th>
              </tr>
             
              <tbody>
              <tr v-for="(trip, key) in trip.trip" :key="trip.gcno">  
                <!-- <td> {{ trip }}</td> -->
                <td>  {{ key+1 }}  </td>
                <td> {{trip.gcno}}  </td>      
                <td> {{trip.consigner}}  </td>
                <td> {{trip.consignee}} </td>
                <td> {{trip.quantity}} </td>
                <td>{{trip.topay}} </td>
                <td>{{trip.paid}} </td> 
                </tr>
            </tbody>    
          </table>  
          <br>
            
          <h6 style="text-align: center;color:blue;font-weight: bold;">EXPENSES</h6>
            <br>
            <table id="expenses">
              <tr>               
              <th>LORRY RENT</th>
              <th>CASH</th>
              <th>UNLOAD</th>
              <th>RIGHTER</th>
              <th>AMAALI</th>
              <th>MISCELLANEOUS</th>
            </tr>
            <tr>
              <td>{{ trip.lorryrent }}</td>
              <td>{{ trip.cash }}</td>
              <td>{{ trip.unload }} </td>
              <td>{{ trip.righter }}</td>
              <td>{{ trip.amaali }}</td>
              <td>{{ trip.miscellaneous }} </td>
            </tr>
            </table>   

                  
             <table>
              <tr>               
              <th>Total</th>
              <td></td>
              <td></td>
              <td><span style="align-items: right;"> {{this.totaltopay}} </span> </td>
            </tr>             
            </table>   
            
            
          </div>
        </div>         
        </li>        
    </ul>
   </div>
  </div>  

  
  </template>
  
  <script>
    $(document).ready(function(){
      
    })
  
    import axios from 'axios'
  export default {
    name: 'Tripsheet',
    components: {  
    },
    data(){
      return{
        trips:[],
        search:'',
        totaltopay:0
      }
    },
    computed:{
        filteredTrips: function(){
          return this.trips.filter((trip)=>{
            return trip.tripsheetno.toLowerCase().match(this.search.toLowerCase())
          })
        }
    },
     mounted() {
      $('.collapsible').collapsible();
      let api_url = this.$store.state.api_url;
      // $('.collapsible').collapsible({
      //   onOpenStart: function(el) {
      //     const tripId = $(el).find('.collapsible-header').attr('id');
      //     axios.get(api_url + `tripsheet/getTripsheet?id=${tripId}`, {
      //             auth_token: localStorage.getItem('jwt'),                
      //         })
      //         .then(response =>{
      //             // this.trips = response.data
      //             console.log(response);
      //         }).catch(function(error) {
      //           console.log(error);
      //       });
      //   }
      // });
      // let api_url = this.$store.state.api_url
                  axios.get(api_url + 'tripsheet/gettrips', {
                  auth_token: localStorage.getItem('jwt'),                
              })
              .then(response =>{
                  this.trips = response.data
                  console.log(this.trips);
              }).catch(function(error) {
                console.log(error);
            });
    },
    methods: {

       total(){
        this.totaltopay=0
        this.topays.forEach((topay)=>{
          this.totaltopay+=topay
          console.log(totaltopay)
        })
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
    },
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
    /*display: inline-block;*/
  }
  
  #customers tr:nth-child(even){background-color:white}
  
  #customers tr:hover {background-color: #ccdcf5;}
  
  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #ecf8f2;
    color: rgb(21, 20, 20);
  }


  #expenses th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #f8f6ec;
    color: rgb(21, 20, 20);
  }
  
  .alignleft {
      float: left;
  }
  .alignright {
      float: right;
  }
  

  
  
  </style>