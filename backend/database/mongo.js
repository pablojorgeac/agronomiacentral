const mongoose = require('mongoose');

const connectionDB = async () => {
  const connectionString = process.env.MONGO_URL;
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected');
  } catch (error) {
    console.log(error);
    throw new Error('Error when starting the database failed to connect');
  }
};

module.exports = { connectionDB };
