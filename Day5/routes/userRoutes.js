const express = require('express');
const router = express.Router();
const {User,Post} = require('../models');
const usercontroller = require('../controller/usercontroller');

// POST /user to create a new user
router.post('/', usercontroller.createuser);
// GET /user to gett all the rows
router.get('/', usercontroller.getuser );

//
router.get('/with-sh', usercontroller.opertaor)
//
router.get('./leftjoin', usercontroller.leftjoin)
// GET /users/:id to get elements by thier id
router.get('/:id',usercontroller.getuserbyid);
// PUT /users/:id to replace the values
router.put('/:id',usercontroller.updateuser );
//PATCH /users/:id to change the values
router.patch('/:id', usercontroller.edituser );
// DELETE /users/:id to dlelete a user  using the id 
router.delete('/:id', usercontroller.deleteuser );
//
router.post('/post-create', usercontroller.postuser)


module.exports = router;
