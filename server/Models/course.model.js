const { Schema } = require('mongoose');
const mongoose = require('mongoose');

// Define a new schema for the second model
const otherModelSchema = new Schema({
    course: {
        type: String,
        required: true,
        // trim: true,
      },
      username: {
        type: String,
        required: true,
        // unique: true,
      },
});

// Create the model for the second schema
const OtherModel = mongoose.model('OtherModel', otherModelSchema);

module.exports = OtherModel;
