const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictak.vcicb.mongodb.net/CourseDb?retryWrites=true&w=majority');


const Schema = mongoose.Schema;

const EnrollSchema = new Schema({
    c_name: String,
    c_professor:String,
    p_email:String,
    s_name:String,
    s_email:String,
    s_education:String,
    status:String,
    c_id:String
    

});

var Enrolldata = mongoose.model('enrolldata',EnrollSchema);

module.exports = Enrolldata;