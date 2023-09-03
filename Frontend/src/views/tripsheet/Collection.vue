<template>

    <div class="admin" style="margin:10%" >      
      <div class="container">   
          
                 <i class="fa fa-search-plus" style="font-size:22px;color:blue;"> </i>
                <input class="input" style="text-align: center;width:40%;" v-model="search" placeholder="Search Trip Sheet Number"/>
    
                 
      
     
      <ul class="collapsible" style="margin:7%" >
        <li v-for="trip in filteredTrips" :key="trip._id">
          <div class="collapsible-header" style="padding-right:50px" :id="trip._id">
            <i class="fa fa-truck"></i>
            <br>
           
           
  
           <div style="align-items: center;text-align: center;color:blue">
            <p class="alignleft" style="color:blue;font-weight:bold;">Trip Sheet No: {{trip.tripsheetno}}</p>
            
                           
           </div>
           <router-link class="secondary-content" v-bind:to="{ name: 'Collection', params: { trip_id: trip._id }}"><i class="fa fa-edit" style="font-size:16px;color:red"></i></router-link> 
           
            
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
                  <!--<th>CONSIGNER</th>-->
                  <th>CONSIGNEE</th>
                  <th>QUANTITY</th>
                  <th>TO PAY</th>
                  <th>PAID</th>
                  
                </tr>
               
                <tbody>
                 
                <tr v-for="(trip,index) in trip.trip" :key="trip._id">                    
                  
                  
                  <td>  {{ index+1 }}    </td>
                  <td> {{trip.gcno}}  
                   
                  </td>      
                  <!--<td> {{trip.consigner}}  </td>-->
                  <td> {{trip.consignee}} </td>
                  <td> {{trip.quantity}} </td>
                  <td style="align-items: right">{{trip.topay}} </td>
                  <td><input type="text" v-model="trip.paid"/></td>
                 </tr>
              </tbody>    
            </table>  
  
            <div>
              
            </div>    
  
  
              <h6 style="text-align: center;color:blue;font-weight: bold;">EXPENSES</h6>
              <br>
              <table id="customers">
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
                <td><input type="text" v-model="unload"/></td>
                <td><input type="text" v-model="righter"/></td>
                <td><input type="text" v-model="amaali"/></td>
                <td><input type="text" v-model="miscellaneous"/></td>
               
              </tr>
              </table>   
                <br> 
              <table id="customers">      
        <tr>             
                <th style="text-align: center;color:blue;font-weight: bold;">To Pay Total</th>         
                <th style="text-align: center;color:blue;font-weight: bold;">Paid Total</th> 
                <th style="text-align: center;color:blue;font-weight: bold;">Collection Due</th>     
        </tr>            
  
                <td style="text-align: center;font-weight: bold;"><span style="align-items: right;"> {{trip.topaytotal}} </span> </td>  
                <td style="text-align: center;font-weight: bold;"><span style="align-items: right;"> {{trip.paidtotal}} </span> </td>
                <td style="text-align: center;font-weight: bold;"><span style="align-items: right;">  {{trip.balance}} </span> </td>
          </table> 
              <br>
          <button @click="save" class="btn green">SAVE</button>              
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
      //import { userInfo } from 'os'
    export default {
      name: 'Collection',
      components: {  
      },
      data(){
        return{
          trips:[],
          search:'',
          paid:0,
          unload:'',
          righter:'',
          amaali:'',
          miscellaneous:'',
          tablerows:[
        {paid:0}
    ],    

           }
      },
      computed:{
          filteredTrips: function(){
            return this.trips.filter((trip)=>{
                return trip.tripsheetno.toLowerCase().match(this.search.toLowerCase())
            })
          },         
      },
      paidtotal: function(){
      let sum = 0;
      this.tablerows.forEach(function(tablerow) {
         sum += (parseFloat(tablerow.paid))
      })
        return sum
      },
      //expenses: function(){
      //let exp=0
      //exp = -this.balance-this.topaytotal+this.paidtotal    
      //return exp
   // },
    balance: function(){
      let due = topaytotal-this.paidtotal//-this.lorryrent-this.cash-this.unload-this.righter-this.amaali-this.miscellaneous
      return due
    },
       mounted() {
        $('.collapsible').collapsible();
        let api_url = this.$store.state.api_url;
                    axios.get(api_url + 'tripsheet/gettrips', {
                    auth_token: localStorage.getItem('jwt'),                
                })
                .then(response =>{
                    this.trips = response.data
                }).catch(function(error) {
                  console.log(error);
              });
      },
      methods: 
      
  {
        
        
    async save(){
        try{
       this.tablerows.push({
         paid:0,        
      })     

            const tableValues = this.tablerows.map(value => {
            return {
                  paid:value.paid
                 }
              })
            const jwt = localStorage.getItem('jwt')
            let URL = this.$store.state.api_url;
            const values = 
            {
              tablerows: tableValues,
              //Paid
              paid:this.paid,
              //unload:this.unload,
              //Expenses
              //amaali:this.amaali,
              //righter:this.righter,
              //Total
              //miscellaneous:this.miscellaneous,
              //paidtotal:this.paidtotal,
              //topaytotal:this.topaytotal,
              //balance:this.balance,
              //expenses:this.expenses,
               auth_token:jwt,
            }                
            
            axios.put(URL + 'tripsheet/newtripsheet',values).then(response=>{
              console.log(response)
              alert('Sucessfully Updated')
            this.$router.push('/collection')     
            })
         }
        catch(e) {
            console.error("Error Updating document: ", e)
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
  
  
    #expenses th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: center;
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