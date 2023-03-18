

const mongoose = require('mongoose');
// const uuid = require('uuid')
const { v4: uuid } = require('uuid');


const employeeSchema = new mongoose.Schema({
    name: {
        type: String, required: true
      },
      email_address: {
        type: String,  required: true
      },
      phone_number: {
        type: Number, required: true
      },
      gender: {
        type: String,
        enum : ['Male', 'Female'],
        required: true
      },
      // id: {
      //   type: String
      // },
      CafeName: {
        type: String
      },
      start_date: {
        type: Date,
        default: Date.now
      },
      _id: {
        type: String,
        default: () => uuid(6),
      },
      
      // _ownerId:{
      //   type: mongoose.Types.ObjectId,
      //   required: true
      //   }
},

    {
        collection: 'employee',  timestamps: true
    })


module.exports = mongoose.model('employee', employeeSchema)

