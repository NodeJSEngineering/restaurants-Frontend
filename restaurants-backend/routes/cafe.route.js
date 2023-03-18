const express = require('express');
const app = express();
const cafeRoutes = express.Router();
const path = require('path');


// Require Business model in our routes module
let Cafe = require('../models/Cafe');

// http://localhost:4000/business/add  
cafeRoutes.route('/add').post(function (req, res) {
  let cafeData = new Cafe(req.body);
console.log(cafeData)
  cafeData.save(function (err, savedJob) {
    if (err) {
      return res.status(400).send("unable to save to database" + err);
    } else {
      return res.status(200).json({ 'business': 'business in added successfully' });
    }
  })
});

// http://localhost:4000/business 
cafeRoutes.route('/').get(function (req, res) {
  ;
  Cafe.find(function (err, businesses) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

//
cafeRoutes.route('/cafes').get(function (req, res) {
  console.log(req.query)

  Cafe.find(function (err, businesses) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(businesses)

      // res.json(businesses);
    }
  }
  );
});


// Defined edit route
// cafeRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   Cafe.findById(id, function (err, business) {
//     res.json(business);
//   });
// });

cafeRoutes.route('/edit/:id').put(function (req, res) {
  let id = req.params.id;
  let updatedCafeData = new Cafe(req.body);
  Cafe.findById(id, function (err, business) {
    updatedCafeData.update(function (err, savedJob) {
      if (err) {
        return res.status(400).send("unable to save to database" + err);
      } else {
        return res.status(200).json({ 'business': 'business in added successfully' });
      }
    })
    // res.json(business);
  });
});

//  Defined update route
cafeRoutes.route('/update/:id').post(function (req, res) {
  Cafe.findById(req.params.id, function (err, business) {
    // if (!business)
    //   return next(new Error('Could not load Document'));
    // else {
      business.person_name = req.body.person_name;
      business.business_name = req.body.business_name;
      business.business_gst_number = req.body.business_gst_number;

      business.save().then(business => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    // }
  });
});

// Defined delete | remove | destroy route
// cafeRoutes.route('/delete/:id').get(async function (req, res) {
//   // res.send('Delete by ID API')
//   try {
//     const id = req.params.id;
//     const data = await Cafe.findByIdAndDelete(id)
//     res.send(`Document with ${data.name} has been deleted..`)
// }
// catch (error) {
//     res.status(400).json({ message: error.message })
// }

  // Cafe.findByIdAndRemove({ _id: req.params.id }, function (err, business) {
  //   console.log(business, req.params.id , 'fvs')
  //   if (err) res.json(err);
  //   else res.json('Successfully removed');
  // });

  //  Cafe.findByIdAndDelete(req.params.id).then((dvd)=>{
  //   console.log(dvd , 'Successfully deleted ');    
  //  });
// });

//Delete by ID Method
cafeRoutes.delete('/delete/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const data = await Cafe.findByIdAndDelete(id)
      res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})


module.exports = cafeRoutes;
