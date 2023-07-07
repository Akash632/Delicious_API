const restrauntModel = require("../models/restrauntModel");

const addRestroController = async (req,res)=>{
    try{
        const {name,image_url,details} = req.body;
    
        if(!name || !image_url||!details){
            return res.status(400).send({
                success:false,
                message:"Please enter valid fields"
            })
        }
    
        if(!details.address||!details.contact||!details.rating){
            return res.status(400).send({
                success:false,
                message:"Please enter valid contact details"
            })
        }
    
        const result = await restrauntModel({name,image_url,details}).save();
    
        res.send(result);
    }catch(err){
        res.status(500).send({
            success:false,
            message:"Internal Server Error"
        })
    }
}

const getRestroController = async (req,res)=>{
    try{
        const {rating} = req.params;

        if(!rating){
            
        }
    }catch(err){
        res.status(500).send({
            success:false,
            message:"Internal Server Error"
        })
    }
}
module.exports = {addRestroController,getRestroController}