const mongoose = require("mongoose")
const {Schema} = mongoose;

const addressSchema = Schema({
    street: String, 
    city: String
})

const userSchema = new Schema({
    name: String, 
    age: Number,
    email: {
        type: String,
        required: true 
    },
    createdAt: Date, 
    updatedAt: Date, 
    //Relationship attribute
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema
})

module.exports = mongoose.model("User", userSchema)