const mongoose = require("mongoose");
const dbURI = "mongodb://clbi:clbipw@ds235785.mlab.com:35785/clbi_webapp";

module.exports.initialize = () => {
    console.log("initializing connection to mongoDB on mlab");
    console.log("dbURI: " + dbURI);
    return new Promise((resolve, reject) => {
        let db = mongoose.createConnection(dbURI);
    });
};

