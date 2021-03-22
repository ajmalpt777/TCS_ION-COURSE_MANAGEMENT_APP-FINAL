const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictak.vcicb.mongodb.net/CourseDb?retryWrites=true&w=majority');


const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    message: String,
    c_id:String,
    time:String   
});

var Notificationdata = mongoose.model('notificationdata',NotificationSchema);

module.exports = Notificationdata;