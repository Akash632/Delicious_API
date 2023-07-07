const categoryModel = require("../models/categoryModel");
const slugify = require("slugify");

const addCategoryController = async (req,res)=>{
    try{
        const {name}=req.body;

        if(!name){
            return res.status(403).send({
                success:false,
                message:"Please enter valid category name"
            })
        }
    
        const existingCategory = await categoryModel.find({slug:slugify(name)});
    
        if(existingCategory.length>0){
            return res.status(403).send({
                success:false,
                message:"Category already exists"
            })
        }
    
        await categoryModel({name:name,slug:slugify(name)}).save();
    
        res.status(200).send({
            success:true,
            message:"Category added successfully"
        })
    }catch(err){
        res.status(500).send({
            success:false,
            message:"Internal Server Error"
        })
    }
}

const getCategoryController=async(req,res)=>{
    try{
        const categories = await categoryModel.find({});

        res.status(200).send({
            success:true,
            message:"All categories",
            categories: categories
        })
    }catch(err){
        res.status(500).send({
            success:false,
            message:"Internal Server Error"
        })
    }
}

const updateCategoryController = async (req,res)=>{
    try{
        const {name}=req.body;
        const {id} = req.params;

        await categoryModel.updateOne({_id:id},{$set:{name:name,slug:slugify(name)}});

        res.status(200).send({
            success:true,
            message:"Category updated successfully"
        })

    }catch(err){
        res.status(500).send({
            success:false,
            message:"Internal Server Error"
        })
    }
}
const deleteCategoryController=async(req,res)=>{
    try{
        const {id} = req.params;

        await categoryModel.deleteOne({_id:id});

        res.status(200).send({
            success:true,
            message:"Categpry deleted successfully"
        })
    }catch(err){
        console.log(err);
        res.status(500).send({
            success:false,
            message:"Internal Server Error"
        })
    }
}
module.exports = {addCategoryController,getCategoryController,deleteCategoryController,updateCategoryController}