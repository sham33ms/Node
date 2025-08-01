const {User,Post} = require('../models');
const sequelize = require('../config/db');
const { Op } = require('sequelize');


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
exports.postuser = async (req, res) => {
  await sequelize.sync({ force: false }); // recreate tables
  // const user = await User.create({ name: 'Shamem', email:"sthhdhm@gl.com" });
  const { title, content, userId } = req.body;
  const post1 = await Post.create({ title, content, userId});

  // const result = await User.findOne({
  //   where: { id: user.id },
  //   include: Post
  // });

  res.send(post1);
}

exports.opertaor = async (req, res) => {
  
    const opp = await User.findAll({
      where: {
        name: {
          [Op.like]: 'Sh%',
        },email:{[Op.like]:'%@g%'}
      },
    });
    res.json(opp);} // Send actual data, not just "op"
  

exports.leftjoin =async(req,res)=>{
  const user = await Post.findAll({
    include:{
      model:User,
      required:false
    }
  })
  res.json(user);
}

