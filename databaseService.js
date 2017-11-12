var mongoose = require('mongoose');
const dbURI = 'mongodb://clbi:clbi@ds235785.mlab.com:35785/clbi_webapp';
var db = mongoose.createConnection(dbURI);

var options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
};
var Schema = mongoose.Schema;

var userSchema = new Schema({
    'username': String,
    'password': String,
    'joinedDate': Date
});
var blogSchema = new Schema({
    'title': String,
    'postDate': Date,
    'author': String,
    'content': String,
    'contentLength': Number
});
var user = db.model('webapp_user', userSchema);
var blog = db.model('webapp_blog', blogSchema);

mongoose.connect(dbURI, options, (err) => {
    if (err) { console.log(err) }
})

module.exports.createPost = (_title, _author, _content) => {
    return new Promise((resolve, reject) => {
        var tempPost = new blog({
            title: _title,
            postDate: new Date(),
            author: _author,
            content: _content,
            contentLength: _content.length
        });
        tempPost.save((err) => {
            if (err) {
                reject("There was an error saving the comment " + err);
            }
            else {
                resolve("saved");
            }
        });
    })
}
module.exports.createUser = (_username, _password) => {
    return new Promise((resolve, reject) => {
        var tempUser = new user({
            username: _username,
            password: _password,
            joinedDate: new Date()
        });
        tempUser.save((err) => {
            if (err) {
                reject("There was an error creating the user " + err);
            }
            else {
                resolve("created");
            }
        });
    })
}
module.exports.userLogin = (_username, _password) => {
    return new Promise((resolve, reject) => {
        user.findOne({ username: _username })
        .exec()
        .then((user) => {
            if (!user) {
                console.log("No user could be found");
            } else {
                console.log('Found user, authenticating...')
                if (user.password == _password) {
                    console.log("Authenticated");
                    resolve();
                } else {
                    console.log("Wrong pw");
                }
            }
        })
        .catch((err) => {
            console.log('There was an error: ${err}');
        });
    });
}

