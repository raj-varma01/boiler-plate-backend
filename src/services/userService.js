import User from "../models/User";

const getUserData = async (req) => {
    const { page, limit, search } = req.query;
    const skip = (page - 1) * limit;
    try {
        const users = await User.find({ name: { $regex: search, $options: 'i' } }).skip(skip).limit(limit);
        const totalUsers = await User.countDocuments({ name: { $regex: search, $options: 'i' } });
        // instead of sending all records send only required one
        return {
            users,
            totalUsers
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export default {
    getUserData
}