const { MongoClient } = require("mongodb");

const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {});

let _db;

module.exports = {
    connectToServer: function (callback) {
        // Attempt to connect to the MongoDB server
        client.connect()
            .then(() => {
                console.log("MongoDB client connected successfully.");
                _db = client.db("Users");
                console.log("In Users");
                console.log("In fetch users now");
                const collection = _db.collection("Users.users");

                // Example: Fetch all users
                collection.find({}).toArray(function (err, result) {
                    if (err) {
                        console.error("Error fetching users:", err);
                        return callback(err, null);
                    }
                });
                return callback(null);
            })
            .catch((err) => {
                console.error("Error connecting to MongoDB:", err);
                return callback(err);
            });
    },

    getDb: function () {
        console.log("GetDb");
        return _db;
    },
};
