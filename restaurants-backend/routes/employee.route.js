const express = require('express');
const app = express();
const employeeRoutes = express.Router();
let Employee = require('../models/Employee');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// http://localhost:4000/owner/addOwner/ 
employeeRoutes.route('/add').post((req, res) => {
  (new Employee(req.body))
    .save()
    .then((myclass) => res.send(myclass))
    .catch((error) => console.log(error))
})

// http://localhost:4000/owner/ 
employeeRoutes.route('/').get(function (req, res) {
  ;
  Employee.find(function (err, businesses) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

employeeRoutes.route('/:ownersId').get((req, res) => {
    Employee.findOne({ _id: req.params.ownersId })
    .then(myclass => res.send(myclass))
    .catch((error) => console.log(error))
})


employeeRoutes.route('/:ownerId').patch((req, res) => {
    Employee.findOneAndUpdate({ '_id': req.params.ownerId }, { $set: req.body })
    .then((myclass) => res.send(myclass))
    .catch((error) => console.log(error))
})

// app.delete('/myclass/:myclassId/students/:studentId', (req, res) => {
//   student.findOneAndDelete({ _id: req.params.studentId, _classId: req.params.myclassId }).then((student) => res.send(student))
//     .catch((error) => console.log(error))
// })
employeeRoutes.route('/delete/:id').get(async function (req, res) {
  var ObjectId = Schema.ObjectId 

  var curid = new ObjectId(req.params.id);
  //  curid = curid.replace(/\s/g, '');
   Employee.findByIdAndRemove(curid)
     .then(result => {
        res.status(200).json({
        message: 'Address Deleted',
        result
     });
   })
   .catch(err => {
      console.log(err);
      res.status(500).json({
      message: 'Error Occured',
      error: err
    });
  });
})
module.exports = employeeRoutes;
