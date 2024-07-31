import userModel from "../models/usersModel.js"

const getAllUsers = async () => {
    const all_users = await userModel.find()
    return all_users
}

export {getAllUsers}