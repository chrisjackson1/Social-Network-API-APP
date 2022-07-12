const { connect, connection } = require('mongoose');

const connectionString = process.env.MONGO_URI || `mongodb://localhost:27017/socialmedia`;

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection;

