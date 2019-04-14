const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Task=require('../../src/models/task')
const User=require('../../src/models/user')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id:userOneId,
    name: 'Mike',
    email: 'mike@sample.com',
    password: '54what!!!',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}
const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id:userTwoId,
    name: 'utsav',
    email: 'utsav@sample.com',
    password: '99house!!!',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}
const taskOne={
    _id:new mongoose.Types.ObjectId(),
    description:'First Task',
    completed:false,
    owner:userOne._id
}
const taskTwo={
    _id:new mongoose.Types.ObjectId(),
    description:'Second Task',
    completed:false,
    owner:userOne._id
}
const taskThree={
    _id:new mongoose.Types.ObjectId(),
    description:'Third Task',
    completed:false,
    owner:userTwo._id
}
const setupDatabase=async()=>{
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports={
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}