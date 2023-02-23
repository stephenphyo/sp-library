const mongoose = require('mongoose');

let attempt = 0;
const connectMongo= (API_URL) => {
    mongoose
        .connect(API_URL)
        .then((res) => {
            console.log(`Successfully connected to MongoDB =>\n` +
                `Host: ${res.connection.host}\n` +
                `Port: ${res.connection.port}\n` +
                `Database: ${res.connection.name}`);
        })
        .catch((err) => {
            attempt++;
            console.error(`Attempt #${attempt} => Error: ${err.message}`);
            setTimeout(retryMongooseConn, 5000);
        })
};

module.exports = connectMongo;