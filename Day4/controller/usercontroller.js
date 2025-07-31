const User = require('../models/User');

//post to create user
exports.createuser=async (req, res) => {
  const { name, email } = req.body;

 
    if (!name || !email) {
      return res.json({ msg: 'Name and email are required' });
    }
    const newUser = await User.create({ name, email });
    res.json(newUser);
}
//get to get all the user
exports.getuser=async (req, res) => {
  
    const users = await User.findAll();
    res.json(users);
  
}
//get the user using thier id
exports.getuserbyid= async (req, res) => {
  const { id } = req.params;
    const user = await User.findByPk(id); 

    if (!user) {
      return res.json({ msg: 'User not found' });
    }
    res.json(user);
}
//put to update user
exports.updateuser=async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      return res.json({ msg: 'User not found' });
    }

    
    user.name = name || user.name;
    user.email = email || user.email;

    await user.save();

    res.json({ msg: ' User updated successfully', user });
  
}
//patch to edit user
exports.edituser=async (req, res) => 
  {
    const { id } = req.params;
    const  {name , email}= req.body;
    const user =await User.findByPk(id);
    if (!user){
      return res.json({ msg: 'User not found' });
    }
    user.name = name || user.name;
    user.email= email || user.email;
    await user.save();
    res.json({user})
  }
// delete to delete user
 exports.deleteuser= async (req, res) => {
  const { id } = req.params;

 
    const user = await User.findByPk(id);

    if (!user) {
      return res.json({ msg: 'User not found' });
    }

    await user.destroy();
    res.send({ msg: ' User deleted successfully' });
 
}