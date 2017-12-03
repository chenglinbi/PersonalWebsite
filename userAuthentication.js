module.exports.userLogin = (user, pass) => {
    return new Promise((req, res) => {
        user.findOne({ username: user })
        .exec()
        .then((user) => {
            if (!user) {
                console.log("No user could be found");
            } else {
                console.log('Found user, authenticating...')
                if (user.password == pass) {
                    console.log("Authenticated");
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