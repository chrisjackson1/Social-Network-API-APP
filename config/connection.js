const { connect, connection } = require('mongoose');

const connectionString = process.env.MONGO || `mongodb://localhost:27017`;

connect(connectionString)