import express from "express";
import { getAllUsers, special, register, getUserById, updateUser, deleteUser } from "../controllers/user.js";

const router = express.Router();

// Dynamic Special routes should be written first because of the waterfall effect if we write special route after dynamic route we may face error as no such special id is present in database. 
router.get("/userid/special", special);

// Static method of sending id
// app.get("/userid", staticGetUser)

// Dynamically sending id
// userid/anyid,   userid/dhagkhdsf,   userid/abhishek


// router.get("/userid/:id", getUserById);
// router.put("/userid/:id", updateUser);
// router.delete("/userid/:id", deleteUser);

// Above three routes can be combined into one
router.route("./userid/:id").get(getUserById).put(updateUser).delete(deleteUser)

router.get("/all", getAllUsers);

router.post("/new", register);


export default router;