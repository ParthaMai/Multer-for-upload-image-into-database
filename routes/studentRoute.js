const express = require('express');
const router = express.Router();
const Student=require('./../models/student'); 
const multer=require('multer');


// set up multer to store files in upload folders
const storage= multer.diskStorage({
    destination: (req,file, cb) =>{ //cb is callback
        cb(null,'uploads/'); // add the image into this uploads folder
    },
    filename: (req, file,cb)=>{
        const suffix=Date.now(); // this is add bec same rename image problemmm..so we add a date then date is not same  
        cb(null,suffix + '-' + file.originalname);
    }
});

const upload= multer({storage});

// Route to create a new student
router.post('/create',upload.single('photo'), async(req,res) =>{ // upload.single('photo'), this is middleware
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