const mongoose = require('mongoose');
const URI = "mongodb+srv://JorgeL:Santy2014@ejemplo.wkh3kxj.mongodb.net/?retryWrites=true&w=majority"
// const URI = "mongodb+srv://ppaz:Paulo.123@pazp.ip7t9kd.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(URI)
.then(() => console.log("BD conectada"))
.catch((err) => console.log(err));

module.exports = mongoose;