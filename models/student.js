const mongoose=require('mongoose');

// const bcrypt=require('bcrypt');

// Define the person Schema
const studentSchema= new mongoose.Schema ({
    name: {
        type: String,
        require: true 
    },
    age: {
        type: Number,
        require: false
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    phone: {
        type: String ,
        required: false
    },
    address: {
        type: String ,
        required: false
    },
    photo: {
        type: String // store base64 encoded data  means the uploaded photo
    }

});


const student=mongoose.model('student',studentSchema); // 'student' name is store in database 
module.exports = student;