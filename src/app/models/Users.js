const mongoose = require('mongoose');

module.exports = {
  userModel: () => {
    const Schema = mongoose.Schema;

    const userSchema = new Schema({
    email: { type: 'string', required: true, index: true },
    hash: { type: 'string', required: true},
    },
    {timestamps: true});

    return mongoose.model('User', userSchema);
  }
}

 
