const mongoose = require("mongoose")
const {Schema} = mongoose;

const addressSchema = Schema({
    street: String, 
    city: String
})

const userSchema = new Schema({
    name: String, 
    age: {
        type: Number, 
        min: 1, 
        max: 100,
        //Validate age to make sure it's even
        validate: {
            validator: v => v % 2 === 0,
            message: props => `${props.value} is not an even number`
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        //default will call function to get the current date
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        //default will call function to get the current date
        default: () => Date.now()
    }, 
    //Relationship attribute
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema
})

module.exports = mongoose.model("User", userSchema)