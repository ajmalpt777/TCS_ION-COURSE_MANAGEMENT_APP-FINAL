const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictak.vcicb.mongodb.net/CourseDb?retryWrites=true&w=majority');


const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: String,
    duration:String,
    image:String,
    professor:String,
    email:String,
    details:String,
    qualification:String,
    type:String,
    startdate:String,
    level:String
    
});

var Coursedata = mongoose.model('coursedata',CourseSchema);

module.exports = Coursedata;