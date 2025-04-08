const express = require('express');
const router = express.Router();
const Student=require('./../models/student'); 


// Route to create a new student
router.post('/create', async(req,res) =>{
    try{
        const {name, age, email, phone , address}= req.body;

        const newStudent = new Student({ // Student is an object

            name,
            age,
            email,
            phone,
            address
        });
        const response=await newStudent.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(404).json({message: "Internal server error"});
    }
});

module.exports= router;