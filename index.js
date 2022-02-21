const mongoose = require('mongoose')
const User = require("./User")

require('dotenv').config()
const uri = process.env.MONGODB_URI

mongoose.connect(uri)
run()

async function run(){
    //One way to create user
    // const user = new User({
    //     name: "Kyle", 
    //     age: 26
    // })
    // await user.save()

    //Another way to create user
    // const user = await User.create({
    //     name: "Jon",
    //     age: 26
    // })
    // console.log(user)

    try {
        const user = await User.create({
            name: "Kyle",
            age: "27",
            email: "kyle@email.com",
            hobbies: ["Weight Lifting", "Bowling"],
            address: {
                street: "Main Street"
            }
        })
        console.log(user);
    }
    catch (e) {
        console.log(e.message)
    }
}


