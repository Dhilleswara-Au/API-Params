import { User } from "../models/user.js";

// export const staticGetUser = async (req,res) => {
//         const {id} = req.query;
//         const user = await User.findById(id);
    
//         res.json({
//             success: true,
//             user
//         })
//     }

export const getAllUsers = async (req, res) => {
    const users = await User.find({});  //Returns all users
    // console.log(req.query);
    const keyword = req.query.keyword;
    console.log(keyword);

    res.json({
        success: true,
        users
    });
}

export const special = (req,res) => {
    res.json({
        success: true,
        message: "just joking",
    })
}

export const getUserById = async (req,res) => {
    const {id} = req.params;
    const user = await User.findById(id);
    
    res.json({
        success: true,
        user
    })
}

export const updateUser = async (req,res) => {
    const {id} = req.params;
    const user = await User.findById(id);
    
    res.json({
        success: true,
        message: "User Updated"
    })
}

export const deleteUser = async (req,res) => {
    const {id} = req.params;
    const user = await User.findById(id);
    
    res.json({
        success: true,
        message: "User Deleted"
    })
}

export const register = async (req, res) => {
    const {name, email, password} = req.body;

    const users = await User.create({
        name,email,passwordN
    }) 
    res.status(201).cookie("temp","lol").json({
        success: true,
        users,
    });
}