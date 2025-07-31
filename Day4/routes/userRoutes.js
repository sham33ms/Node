const express = require('express');
const router = express.Router();
const User = require('../models/User');
const usercontroller = require('../controller/usercontroller');

// POST /user
router.post('/', usercontroller.createuser);
// GET /user
router.get('/', usercontroller.getuser );
// GET /users/:id 
router.get('/:id',usercontroller.getuserbyid);
// PUT /users/:id 
router.put('/:id',usercontroller.updateuser );
//PATCH /users/:id to change the name
router.patch('/:id', usercontroller.edituser );
// DELETE /users/:id 
router.delete('/:id', usercontroller.deleteuser );

module.exports = router;
