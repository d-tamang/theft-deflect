const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const Pin = require('./models/pin');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const seedPins = [
  
]

const seedDB = async () => {
  await Pin.deleteMany({});
  await Pin.insertMany(seedPins);
}

seedDB().then(() => {
  mongoose.connection.close();
})