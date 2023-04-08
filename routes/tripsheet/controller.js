const {tripModel,tripsheetDetailsModel} = require('./model');
const jwt = require('jsonwebtoken');
const userModel = require('../user/model');

module.exports= {
    
    newtripsheet: (req,res) => {
        let user_id = jwt.decode(req.body.auth_token).id

        userModel.findByIdAndUpdate(user_id)
                .then(result =>{
                if(!result){
                    res.send({ success: false, msg: "No user was found" })
                    return
                }

                
                    // req.body.tablerows.map( (value) => {
                    //      const sheet = new tripsheetDetailsModel({
                    //         // slno:value.slno,
                    //                 gcno:value.gcno,
                    //                 consigner:value.consigner,
                    //                 consignee:value.consignee,
                    //                 quantity:value.quantity,
                    //                 topay:value.topay,
                    //                 paid:value.paid,
                    //         });
                    //         sheet.save();
                    //         trips.push(sheet._id);
                            
                    // });

                
                
                tripModel.countDocuments(async (err, count) => {
               
                    let newtripsheet = new tripModel({
                        tripsheetno: count + 1,
                        vehicleno:req.body.vehicleno,
                        place:req.body.place, 
                         
                                           
                          // Tripsheet Entries
                        // trip:[trips],
                    // trip: req.body.tablerows.map(async value => {
                    //     const sheet = new tripsheetDetailsModel({
                    //         // slno:value.slno,
                    //                 gcno:value.gcno,
                    //                 consigner:value.consigner,
                    //                 consignee:value.consignee,
                    //                 quantity:value.quantity,
                    //                 topay:value.topay,
                    //                 paid:value.paid,
                    //         });
                    //         await sheet.save();
                    //         trips.push(sheet._id);
                    // }),
                    trip: req.body.tablerows.map( value => {
                        return {
                            // slno:value.slno,
                                    gcno:value.gcno,
                                    consigner:value.consigner,
                                    consignee:value.consignee,
                                    quantity:value.quantity,
                                    topay:value.topay,
                                    paid:value.paid,
                            };
                    }),
                    //Expenses
                    lorryrent:req.body.lorryrent,
                    cash:req.body.cash,
                    unload:req.body.unload,
                    righter:req.body.righter,
                    amaali:req.body.amaali,
                    miscellaneous:req.body.miscellaneous, 
                    //Total
                    topaytotal:req.body.topaytotal,     
                    paidtotal:req.body.paidtotal,
                    //expenses:req.body.expenses,
                    balance:req.body.balance     
                   })
                    newtripsheet.save()
                    .then(result =>{
                        
                        console.log(result)
                        res.status(200).send({msg:'Generated Successfully',result:result})
                    })
                    .catch(err =>{
                        console.log(err)
                        res.status(401).send({msg:'Unsuccessful'})
                    })
                })                
        })
    },
    gettrips: (req,res)=>{
        tripModel.find({})
        .then(result =>{
           // result = result.sort(function(a,b){
               // return b.timestamp - a.timestamp
          //  })
            res.send(result)
        })
        .catch(err =>{
            console.log(err)
            res.status(401).send({msg:'No Tripsheet'})
        })
    },
    
    getTripsheet: (req, res) => {
        tripModel.findById(req.query.id).then(result => {
            // tripsheetDetailsModel.find({}).then(response => console.log(response, '++'))
            // const trips = result.trip.map(v => v._id);
            console.log(result.trip, '==');
            // return tripsheetDetailsModel.find({'_id': { $in: trips }})
        })
        // .then(result => console.log(result));
        // tripsheetDetailsModel.findById(req.query.id).then(result => console.log(result));
        res.json({'abc': 'def'})
    },      

    gettripid:(req,res) =>{
        tripModel.findById(req.params.id)
        .then(result =>{           
            res.send(result)           
        })
 },

 deletetripid:async (req,res) =>{
    try {
 res.status(200).json((await tripModel.findByIdAndDelete(req.params.id)))
} catch (e) {
  res.status(500).json(e)
  console.log(e)
}
},

updatetripid:async (req,res)=>{
   
     try {

        trip: req.body.tablerows.map( value => {
            return {                
                        gcno:value.gcno,                        
                };
        });
         const {
            vehicleno,         
            
         } = req.body
         
         res.status(200).json((await tripModel.findByIdAndUpdate(req.params.id, {
            vehicleno, 
            
         })))
     } catch (e) {
         res.status(500).json(e)
     }
 },

}




  
