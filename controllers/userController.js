const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const singUpController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    if (!name || !email || !password || !phone || !address) {
      return res.status(400).send({
        success:false,
        message: "Fields can't be empty",
      });
    }

    const existingUser = await userModel.find({"$or":[{ email: email },{phone:phone}]});
    if (existingUser.length > 0) {
      return res.status(400).send({
        success:false,
        message: "Email/Phone already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newuser = await userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    }).save();

    res.status(200).send({
        success:true,
      message: "User created successfully",
    });
  } catch (err) {
    res.status(500).send({
        success:false,
      message: "Internal server Error",
    });
  }
};

const logInController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        success:false,
        message: "Enter valid details",
      });
    }

    const user = await userModel.find({ email: email });
    if (user.length === 0) {
      return res.status(400).send({
        success:false,
        message: "Email does not exist",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user[0].password);

    if (!isPasswordCorrect) {
      return res.status(400).send({
        success:false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        email: email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).send({
        success:true,
        message:"Login Successfull",
        token:token
    })


  } catch (err) {
    res.status(500).send({
        success:false,
      message: "Internal Server Error",
    });
  }
};
module.exports = { singUpController ,logInController};
