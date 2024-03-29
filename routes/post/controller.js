const model = require('./model')
const jwt = require('jsonwebtoken')
const userModel = require('../user/model')

module.exports = {
    newpost: (req,res) => {
        let user_id = jwt.decode(req.body.auth_token).id

        userModel.findById(user_id)
                .then(result =>{
                if(!result){
                    res.send({ success: false, msg: "No user was found" })
                    return
                }

                let newpost = new model({
                user_id: user_id,
                display_name: result.officename + ' : ' + result.name,
                image: req.body.image,
                desc: req.body.desc
                //,timestamp: new Date().getTIme()
                //,timestamp: Date.now()
            })
            newpost.save()
            .then(result =>{
               res.send({success: true, result: result})
               res.status(200).send({msg:'Successfully Upoloaded',user_id:result._id})
            })
            .catch(err =>{
                if(err) res.send({ success: false, error:err })
                res.status(401).send({msg:'Error in Uploading'})
            })
        })
    },
    getposts: (req,res)=>{
        model.find()
        .then(result =>{
            result = result.sort(function(a,b){
                return b.timestamp - a.timestamp
            })
            res.send(result)
        })
        .catch(err =>{
            console.log(err)
            res.status(401).send({msg:'No Posts'})
        })
    }
}
