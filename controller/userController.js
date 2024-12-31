import User from "../model/userModel.js";

export const create = async (req, res)=>{
    try {
      const userData = new User(req.body);
      const { email } = userData;

      const userExist = await User.findOne({ email });
      if (userExist) {
        return res.status(400).json({ message: "User already exists" });
      }
      const savedUser = await userData.save();
      res.status(200).json(savedUser);
    } catch (error) {
      res.status(400).json({ error: "Internal error occured " + error });
    }
}
export const fetch = async (req, res) => {
  console.log("Inside fetch()");
    try{
      const users = await User.find();
      if (users.length === 0) {
        return res.status(404).json({ message: "User Not Found!..." });
      }
      res.status(200).json(users);
    }
    catch(error)
    {
        res.status(400).json({error:"Internal error occured"});
    }
}

export const fetchByemail = async (req, res) => {
  try {
    const email = req.body.email;
    
    const users = await User.find({email});
    if(users.length === 0)
    {
        return res.status(404).json({ message: "User Not Found!..." });
    }
    return res.status(200).json(users);
    // return res.status(200).json("Hello getting error");
  } catch (error) {
    res.status(400).json({ error: "Internal error occured" });
  }
};