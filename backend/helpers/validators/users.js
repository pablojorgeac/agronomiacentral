const {validationResult} = require ('express-validator')

const validateResult =(req,res,next)=>{
    try {
        validationResult(req)
        return next()
        
    } catch (err) {
        res.status (403)
        res.send({errors:err.array()})   
    }
}

module.exports ={validateResult}