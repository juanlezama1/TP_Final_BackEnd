import userModel from "../models/users.js"

const getAllUsers = async (req, res) => {
    const all_users = await userModel.find()
    return all_users
}

export {getAllUsers}