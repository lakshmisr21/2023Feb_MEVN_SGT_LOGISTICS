<template>
    <div style="width;:15%;margin:9%;line-height: 10%;">
              <h4 style="text-align: center;color:blue;font-weight: bold;">SHREE GURU TRANSPORT</h4>
              <p style="text-align: center;font-size: small;line-height: 10%;">Head Office:60/1,Old Taragupet,BANGALORE-53</p>
              <p style="text-align: center;font-size: small;line-height: 10%;">Branch Office:24/4,4th Main Road,New Taragupet,BANGALORE-53</p>
              <p style="text-align: center;font-size: small;line-height: 10%;">RMC Yar, Challakere-577522</p>  
              <p style="text-align: center;font-size: small;line-height: 10%;">Sira</p>  

              
                <p class="alignleft" style="color:red;font-weight:bold;">GC No: </p>
                <p class="alignright" style="color:red;font-weight:bold;">GC Date: </p>
               
        
             
             
              <div class="row" style="margin:2%;display: flex;line-height: 10%;">   
              <div class="col s12 m6 l8">
                <input type="text" v-model="consignors" size=30 placeholder="Consignors" />
              </div>
              <div class="col s12 m6 l8">
                <input type="text" v-model="consignee" size=30 placeholder="Consginee" />
              </div>
              <div class="col s12 m6 l8">
                <input type="text" v-model="place" size=30 placeholder="Place" />
              </div>              
              </div>    
              <!--
              <div class="row">                           
                <div class="seperator"> <h5></h5> </div>
                
                <p>Number of Articles</p>                               
                <div class="col s12 m6 l5">
                <div class="verticalLine"></div>                                       
                </div>  
                           
                <p>Description</p>                                                     
                <div class="col s12 m6 l5">
                <div class="verticalLine"></div>          
                </div>                

                <p>Mark Inv.No</p>                                                     
                <div class="col s12 m6 l5">
                <div class="verticalLine"></div>          
                </div> 
                 
              <div class="seperator"> <h5></h5> </div>    
              <img src="../../assets/GC_No_ACPL-tracker.jpg" alt="" style="display: block;  margin-left: auto;  margin-right: auto;  width: 5%;">        
              </div>    
              
              <div class="seperator"> <h5></h5> </div>
              <div class="row separator" style="text-align: center;margin:2%;display: flex;line-height: 10%;">
                
                <div class="col s12 m6 l2 verticalLine" ><p>Number of Articles</p></div>
                <div class="col s12 m6 l2 verticalLine"><p>Description of Goods</p><p>(Said to Contain)</p></div>
                <div class="col s12 m6 l2 verticalLine"><p>Mark Inv.No.</p></div>
                <div class="col s12 m6 l2 verticalLine"><p>Topay</p></div>
                <div class="col s12 m6 l2 verticalLine"><p>Paid</p></div>
                <div class="col s12 m6 l2 verticalLine"><p></p></div>
                <div class="seperator"> <h5></h5> </div>
              </div>  
              <div class="seperator"> <h5></h5> </div>  
              -->
              
              <table > 
              <tr style="align-items:center;align-content: center;">
                <th><p>No. of </p>
                <p>Articles</p>
                </th>
                <th>
                  <p>
                  Description of Goods</p> 
                  <p>(Said to Contain)</p>
                  </th>
                <th><p>Mark</p>
                <p>
                  Inv.No.
                </p>
              </th>
                <th><p>ToPay</p></th>
                <th><p>Paid</p></th>
              </tr>
              <tr>
                <td> <input type="text" v-model="quantity" size=10 placeholder="Quantity" /></td>
                <td> <input style="margin:2%" type="text" v-model="description" size=10 placeholder="Description" />
                   <div  style="margin:2%;display: flex;line-height: 10%;">
                    <img src="../../assets/truck-1.png" alt="" style="display:flex;  margin-left: auto;  margin-right: auto;  width: 16%;">        
                  </div>
                  <p style="text-align: center;font-size: small;line-height: 10%;">We are not responsible for under value of bill made by Consignor & Consignee</p>
                </td>
                <td> <input style="margin:2%" type="text" v-model="mark" size=10 placeholder="Mark" />
                  <th></th>
                  <input style="margin:2%" type="text" v-model="value" size=10 placeholder="Value" /> 
                </td>
                <td>
                  <input style="margin:2%" type="number" v-model="topay" size=10 placeholder="Topay"/> 
                </td>
                <td>
                  <input style="margin:2%" type="number" v-model="paid" size=10 placeholder="Paid"/> 
                </td>                
              </tr>
              </table>
              <table>
                <tr>
                <td style="height: 100%;">
                 <p style="text-decoration: underline;font-weight: bold;">Booked at owners risk as per General Conditions:</p>
                  <p>Please check up the part's Name & Mark's Particulars of this slip immediately. Strictly</p>
                   <p> enquiries will not be entertained after 10 days regarding delivery of the goods of this L.R. Demmurge</p>
                    <p>Charges & penalty if imposted by the check post CTO- Commercial Tax Officer will have to bared by owner's risk only
                  </p>
                </td>  
                <td><p>Signature of</p>
                <p>the Transport</p>
                </td>
                <th></th>
              </tr>
              </table>
              <table>
                <tr style="margin: 2%;width: 100%;">
                <td>
                  <p>Working Hours 10:00 AM to 7:00 PM SUNDAY HOLIDAY</p>
                </td>
                <td style="font-weight: bolder;font-size: xx-large;">GSTIN:29AUBPS9744C1ZA</td>
                <td><p>DELIVERY SERVICE - BANGALORE,SIRA, HIRIYUR, CHALLAKERE</p>
                </td>
              </tr>
              </table>
    </div>     
    
   
</template>

<script>
import axios from 'axios';
export default {
    name:'Gc',
    components: {

    },
    data() {
        return {
            consignors:'',
            consignee:'',
            place:'',
            quantity:'',
            description:'',
            mark:'',
            topay:'',
            paid:''
        }
    },
}
</script>
<style>
 .alignleft {
      float: left;
  }
  .alignright {
      float: right;
  }
  .aligncenter {
      align-content: center;
      
  }

  .seperator h5 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
}

.seperator h5::before,
.seperator h5::after {
  content: "";
  display: block;
  flex-grow: 1;
  height: 1px;
  background: #ccc;
}

.seperator h5 span {
  padding: 0 2em;
}

.verticalLine {
            height: 150px;
            border-left: 1px solid #000900;
            position: relative;
            left: 30%;
}

</style>