<template>

<div class="container" style="margin:10%">   
  <form @submit.prevent="updatetrip" class="col s12">
        <h5 >Edit Trip Sheet Number:   <span style="font-size:28px;color:blue;text-transform: uppercase;"> {{ trip.tripsheetno }} </span></h5>


<div class="form-row" v-for="trip in trip.trip" :key="trip._id">
    <label for="gcno">Gc Number:</label>  {{trip.gcno}}
    <div>
     <input class="form-control" style="width:40%; margin-left: 1rem;" type="number" v-model="trip.gcno" placeholder="Gc Number">   
   </div>
   
   <i style="font-size:28px;color:red;cursor: pointer;" class="fa fa-trash-alt"> <button type="submit" @click="removetrip"></button> </i>                            

</div>
<br>
</form>
     <button @click="updatetrip" type="submit" class="btn red" style="margin-right: 16px;border-radius: 12px;">Update</button>
     <button @click="goBack" type="submit" class="btn blue" style="margin-right: 16px;border-radius: 12px;">Back</button>
     <router-link to="/tripsheet" class="btn blue" style="border-radius: 12px;">Cancel</router-link>
   
  </div>



 

</template>

<script>
import axios from 'axios'
export default {
name:'edit-tripsheet',
data(){
    return{
        trip:[],
        //vehicleno:null,
        //gcno:null,
        tablerows:[
        {
      gcno:''
    }
    ],  
        
    }
},
async mounted(){
         const path=this.$router.currentRoute.value.path
        //console.log(path)        
        const response =await  axios.get('http://localhost:3000' + path)
        //console.log(response.data)
        this.trip = response.data    
    },
methods:{
  async updatetrip(){

   /* try {
            alert('Update Button Clicked')
            const path=this.$router.currentRoute.value.path
            //console.log(path)
 
            const tableValues = this.tablerows.map(value => {
        return {  
        gcno:value.gcno
        }
            })
            let URL = this.$store.state.api_url;
            const jwt = localStorage.getItem('jwt');
            const values= {
              tablerows: tableValues,
              auth_token: jwt
            }

            await axios.put('http://localhost:3000'+path, {values})
                 console.log('Tripsheet Updated Successfully')
        } catch (e) {
          console.error("Error Updating document: ", e);
        }
        this.$router.push({ name: 'Tripsheet' })
        */
   
        
       try {
            const tableValues = this.tablerows.map(value => {
        return {  
        gcno:value.gcno
            }
      
         });
         alert('Update Button Clicked')
       
       //let URL = this.$store.state.api_url;
       //console.log('URL:',URL)
          const jwt = localStorage.getItem('jwt')
          const values =
           {
            //vehicleno: this.vehicleno,
            tablerows: tableValues,
            auth_token: jwt
           };
            const path=this.$router.currentRoute.value.path
            console.log('Path:',path)
           //await axios.put('http://localhost:3000'+path,values).then(response=>{
           // axios.put('http://localhost:3000'+path, values).then(response=>{
            axios.put('http://localhost:3000'+path,values).then(response=>{
            console.log(response)
            alert('Successfully Updated')
           })
    } catch (e) {
          console.error("Error Updating document: ", e);
        }
        this.$router.push({ name: 'Tripsheet' })
        

      },

    async removetrip(){
    if(confirm){
    alert('Are you sure want to delete?')
    //console.log(this.gcno)
    const path=this.$router.currentRoute.value.path
    //console.log(path)    
    //DELETING COMPLETE TRIPSHEET
    await axios.delete('http://localhost:3000'+path)
    console.log('User Successfully Deleted')
    this.$router.push({ name: 'Tripsheet' })
    }
  },
  goBack() {
      window.history.back();
    },
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