import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import states from "./data/states.js";
import User from "./models/userModel.js";
import States from "./models/stateModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    // const sampleProducts = products.map((product) => {
    //   return { ...product, user: adminUser };
    // });
    const stateData = states.map((state) => {
      return { ...state };
    });

    await States.insertMany(stateData);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // await Product.deleteMany();
    await User.deleteMany();
    await States.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
