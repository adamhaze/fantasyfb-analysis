// Set up our connection to the MongoDB database

const mongoose = require('mongoose');
let MONGO_URL;
const MONGO_LOCAL_URL = 'mongodb://localhost:27017/fantasyfb';


// Connect to the database
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true});
    MONGO_URL = process.env.MONGODB_URI
} else {
    mongoose.connect(MONGO_LOCAL_URL, { useNewUrlParser: true }) // local mongo url
    MONGO_URL = MONGO_LOCAL_URL
}

mongoose.Promise = global.Promise;
var db = mongoose.connection
db.on('error', err => {
    console.log(`There was an error connecting to the database: ${err}`)
})
db.once('open', () => {
    console.log(
        `You have successfully connected to your mongo database: ${MONGO_URL}`
    )
})

module.exports = db;
// export default db;


// TODO: 
// https://www.tutsmake.com/insert-data-into-mongodb-using-node-js/
// create an express app and see what it looks like
// create Player data tables (maybe divide into historical vs current day?)