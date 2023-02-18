const model = require('./model');
const jwt = require('jsonwebtoken');
const userModel = require('../user/model');
const tripModel = require('./model');


module.exports= {
    
    newtripsheet: (req,res) => {
        let user_id = jwt.decode(req.body.auth_token).id

        userModel.findById(user_id)
                .then(result =>{
                if(!result){
                    res.send({ success: false, msg: "No user was found" })
                    return
                }

                tripModel.countDocuments((err, count) => {
                    let newtripsheet = new model({
                        tripsheetno: count + 1,
                        slno: req.body.slno
                        
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
                });
                
        })
    }

       
 }




  
