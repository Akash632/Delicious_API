const foodItemsModel = require("../models/foodItemsModel");

const addFoodItemController = async (req,res)=>{
    try{
        const {name,image_url,description,serves_for,price,rating} = req.body;
        const {id,category}=req.query;
    
        if(!name||!image_url||!description||!serves_for||!price||!rating){
            return res.status(403).send({
                success:false,
                message:"Please enter valid fields"
            })
        }
    
        if(!id||!category){
            return res.status(403).send({
                success:false,
                message:"Invalid query parameters. Refer documentaion for query parameters."
            })
        }
    
        await foodItemsModel({name,image_url,description,serves_for,category:category,restro_id:id,price,rating}).save();
    
        res.status(200).send({
            success:true,
            message:"food Item added successfully"
        })
    }catch(err){
        console.log(err)
        res.status(500).send({
            success:false,
            message:"Internal Server Error"
        })
    }
}

const getFoodItemsController = async(req,res)=>{
    try{
        const {category,rating} = req.query;

        if(!category&&!rating){
            const foodItems = await foodItemsModel.find({});

            return res.status(200).send({
                success:true,
                message:"Food Items List",
                food_items:foodItems
            })
        }

        if(category&&!rating){
            const foodItems = await foodItemsModel.find({category:category});

            if(foodItems.length===0){
                return res.status(403).send({
                    success:false,
                    message:"No such category found"
                })
            }

            return res.status(200).send({
                success:true,
                message:`food Items list in ${category}`,
                food_items:foodItems
            })
        }

        if(rating&&!category){
            const foodItems = await foodItemsModel.find({rating:rating});

            if(foodItems.length===0){
                return res.status(403).send({
                    success:false,
                    message:"No food item found with the rating"
                })
            }

            return res.status(200).send({
                success:true,
                message:`food Items list with ${rating}`,
                food_items:foodItems
            })
        }

        if(category&&rating){
            const foodItems = await foodItemsModel.find({$and:[{category:category},{rating:rating}]});

            if(foodItems.length===0){
                return res.status(403).send({
                    success:false,
                    message:"Invalid category / rating"
                })
            }

            return res.status(200).send({
                success:true,
                message:`food Items list in ${category} with ${rating}`,
                food_items:foodItems
            })
        }

    }catch(err){
        return res.status(500).send({
            success:false,
            message:"Internal Server Error"
        })
    }
}

const updateFoodItemController = async (req,res)=>{
    try{
        const {id}=req.params;

        const result = await foodItemsModel.updateOne({_id:id},{$set:req.body});

    }catch(err){
        res.status(500).send({
            success:false,
            message:"Internal Server Error"
        })
    }
}
const deleteFoodItemController = async (req,res)=>{

}
module.exports ={addFoodItemController,getFoodItemsController,updateFoodItemController,deleteFoodItemController}