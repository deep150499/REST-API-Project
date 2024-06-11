const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please add the name"]
    },
    email : {
        type : String,
        required : [true, "Please add the email address"]
    },
    phone : {
        type : Number,
        required : [true, "Please add the phone number"]
    },  
},{
    timeStamps : true,
});

module.exports = mongoose.model("Contact",contactSchema);