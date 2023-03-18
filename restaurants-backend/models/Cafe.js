// var personSchema = new Schema({
//     name: { type: String, default: 'anonymous' },
//     age: { type: Number, min: 18, index: true },
//     bio: { type: String, match: /[a-zA-Z ]/ },
//     date: { type: Date, default: Date.now },
// });

const uuid = require('uuid')

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cafeSchema = new Schema({
  name: {
    type: String, required: true
  },
  description: {
    type: String,  required: true
  },
  logo: {
    type: Buffer
  },
  location: {
    type: String,  required: true
  },
  // id: {
  //   type: String
  // },
  _id: {
    type: String,
    default: () => uuid(6),
  },
  employees: {
    type: String
  },

  // _ownerId:{
  //   type: mongoose.Types.ObjectId,
  //   required: true
  //   }
},{
    collection: 'cafe'
});

module.exports = mongoose.model('cafe', cafeSchema);