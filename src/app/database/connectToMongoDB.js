module.exports = {
  connectToMongoDB: () => {
    const mongoURI = process.env.MONGO_URI;

    if(mongoURI) {
      mongoose.connect(mongoURI);
      const db = mongoose.connection;
      db.on('error', (error) => console.error(error));
      db.once('open', () => console.log('Connected to MongoDB'));
    }
  }
}