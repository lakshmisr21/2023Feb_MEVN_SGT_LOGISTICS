<template>


  <div style="margin:5%; padding-bottom:0px">
      
          <div>
              <img src="../../assets/swastiknew.jpg" alt="" style="display: block;  margin-left: auto;  margin-right: auto;  width: 5%;">
            
                <h4 style="text-align: center;color:blue;font-weight: bold;">SHREE GURU TRANSPORT</h4>
                <p style="text-align: center;font-size: small;line-height: 10%;">Head Office:60/1,Old Taragupet,BANGALORE-53</p>
                <p style="text-align: center;font-size: small;line-height: 10%;">Branch Office:24/4,4th Main Road,New Taragupet,BANGALORE-53</p>
                        
            </div>   
            <div style="align-items: center;">
                   <h5 style="color:blue;text-align: center;border: 2px solid ;border-radius: 12px;padding: 5px;width: 20%;margin:auto;">New Trip Sheet</h5>
            </div>  
            <br>
      
        
    <table> 
      <tr>
        <th>Enter Vehicle Number</th>
      </tr>
      <tr>
        <td><input style="width:30%" type="text" v-model="vehicleno"/></td>
      </tr> 
      <div>
        <p class="btp">From Bangalore To: </p> 
        
      <p class="btp">
      <label for="Sira">
        <input v-model="place" type="radio" value="Sira" id="Sira" />
        <span>Sira</span>
      </label>
    </p>
    <p class="btp">
      <label for="Hiriyur">
        <input v-model="place" type="radio" value="Hiriyur" id="Hiriyur" name="place"/>
        <span>Hiriyur</span>
      </label>
    </p>
    <p class="btp">
      <label for="Challakere">
        <input v-model="place" type="radio" value="Challakere" id="Challakere" name="place"/>
        <span>Challakere</span>        
      </label>      
    </p>
   
  </div>

    
  </table>

    <table>
    <tr>
      
      <th>Sl.No</th>
      <th>GC.No</th>
      <th>Consigner</th>
      <th>Consignee</th>
      <th>quantity</th>
      <th>To Pay</th>
      <th>Paid</th>
      <th>Add</th>
      <th>Delete</th>
      
    </tr>

    <tr v-for="(tablerow, index) in tablerows" :key="index">      
      <td> {{ tablerow.slno=index + 1 }} </td>  
      
      <td><input type="text" v-model="tablerow.gcno"/></td>
      <td><input type="text" v-model="tablerow.consigner"/></td>
      <td><input type="text" v-model="tablerow.consignee"/></td>
      <td><input type="text" v-model="tablerow.quantity"/></td>
      <td><input type="text" v-model="tablerow.topay"/></td>
      <td><input type="text" v-model="tablerow.paid"/></td>
      <td @click="add"> <i class="fa fa-plus" style="cursor: pointer;"></i> </td>
      <td @click="remove"><i class="fa fa-minus-circle" style="cursor: pointer;"></i> </td>
      
    </tr>
    </table>
    <br>
    
    <div style="align-items: center;">
                   <h5 style="color:blue;text-align: center;border: 2px solid ;border-radius: 12px;padding: 5px;width: 20%;margin:auto;">Expenses</h5>
            </div>  
            <br>
     <table>         
        
      <tr>      
      <th>Lorry Rent</th>
      <th>Cash</th>
      <th>Unloading</th>
      <th>Righter</th>
      <th>Amaali</th>   
      <th>Miscellaneous</th>   
      </tr>
      
      <tr>
      <td><input type="text" v-model="lorryrent"/></td>   
      <td><input type="text" v-model="cash"/></td>       
      <td><input type="text" v-model="unload"/></td>
      <td><input type="text" v-model="righter"/></td>
      <td><input type="text" v-model="amaali"/></td>
      <td><input type="text" v-model="miscellaneous"/></td>
    </tr>
    </table>
    <br>  

    <table>      
      <tr>             
              <th style="text-align: center;color:blue;font-weight: bold;">To Pay Total</th>         
              <th style="text-align: center;color:blue;font-weight: bold;">Paid Total</th> 
              <th style="text-align: center;color:blue;font-weight: bold;">Balance</th>     
      </tr>            

              <td style="text-align: center;font-weight: bold;"><span style="align-items: right;"> {{topaytotal}} </span> </td>  
              <td style="text-align: center;font-weight: bold;"><span style="align-items: right;"> {{paidtotal}} </span> </td>
              <td style="text-align: center;font-weight: bold;"><span style="align-items: right;">  {{balance}} </span> </td>
    </table> 
    <br>
      
      <button @click="create" class="btn green">SUBMIT</button>   <router-link to="/tripsheet">Cancel ?</router-link>            
         
      <div>
          <h4>DISPLAY ENTERED ITEMS</h4>
          {{ vehicleno }}
          {{ place }}
          
          <ul>
          <li v-for="tablerow in tablerows" :key="tablerow.gcno">
          {{ tablerow.slno}}
          {{ tablerow.gcno }}
          {{ tablerow.consigner }}
          {{ tablerow.consignee }}
          {{ tablerow.quantity }}
          {{ tablerow.topay }}
          {{ tablerow.paid }}
          </li>
         </ul>
         {{ lorryrent }}
      </div>
  </div>    

</template>
    
<script>
//Materialize Initialization
/*document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });*/

import axios from 'axios'
export default{
  name:'newtripsheet',
  data(){
    return{
      //tripsheet
      place:'',
      vehicleno:'',
      //gc entry
      slno:'',
      gcno:'',
      consigner:'',
      consignee:'',
      quantity:'',
      topay:'',
      paid:'',
      //Expenses
      lorryrent:0,
      cash:'',
      unload:'',
      righter:'',
      amaali:'',
      miscellaneous:'',
      tablerows:[
        {slno:'',
      gcno:'',
      consigner:'',
      consignee:'',
      quantity:'',
      topay:0,
      paid:0,}
    ],    
      
          }      
  },
  methods: {
   //ADD NEW GC RECORD
    add(){      
      this.tablerows.push({
      slno:'',
      gcno:'',
      consigner:'',
      consignee:'',
      quantity:'',
      topay:0,
      paid:0,        
      })      
    },
    //REMOVE GC RECORD
    remove(index, tablerow){
     var idx= this.tablerows.indexOf(tablerow)
     console.log(idx,index)
     if(idx = -1){
      this.tablerows.splice(idx, 1)
     }
     this.topaytotal;
     this.paidtotal
    },
//SUBMIT TRIP SHEET
    create(){
      const tableValues = this.tablerows.map(value => {
        return {
        slno:value.slno,     
        gcno:value.gcno,
        consigner:value.consigner,
        consignee:value.consignee,
        quantity:value.quantity,
        topay:value.topay,
        paid:value.paid
      }
      });
      const jwt = localStorage.getItem('jwt');
      let URL = this.$store.state.api_url;
      const values = {
        //Trip Sheet Entry
        place:this.place,
        vehicleno:this.vehicleno,   
        //GC Entry        
      //   tablerows:[{
      //   slno:this.tablerows.slno,     
      //   gcno:this.gcno,
      //   consigner:this.consigner,
      //   consignee:this.consignee,
      //   quantity:this.quantity,
      //   topay:this.topay,
      //   paid:this.paid
      // }],
      tablerows: tableValues,
        //Expenses
        lorryrent:this.lorryrent,
        cash:this.cash,
        unload:this.unload,
        righter:this.righter,
        amaali:this.amaali,
        miscellaneous:this.miscellaneous, 

        auth_token: jwt
      };
      axios.post(URL + 'tripsheet/newtripsheet',values).then(respoonse=>{
        console.log(respoonse)
        alert('Sucessfully Created')
        this.$router.push('/tripsheet')
        
      }).catch(err=>{
        console.log(err)
        alert('Error In Creating')
      })
    }
  },
  computed:{
    
    topaytotal: function(){
      let sum = 0;
      this.tablerows.forEach(function(tablerow) {
         sum += (parseFloat(tablerow.topay));
      });
     return sum;
    },
    
    paidtotal: function(){
      let sum = 0;
      this.tablerows.forEach(function(tablerow) {
         sum += (parseFloat(tablerow.paid));
      });
     return sum;
    },
    balance: function(){
      let due = this.paidtotal-this.topaytotal-this.lorryrent
      return due
    }
  }
}
</script>

<style scoped lang="css">
 #customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  #customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
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
  
  .alignleft {
      float: left;
  }
  .alignright {
      float: right;
  }

  table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #92ccc0;
  text-align: left;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #f9fbfa;
}

.btp{
  display: inline;
}
  
</style>

