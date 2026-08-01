import userService from "../services/userService";

const getUserData = async (req, res) => {
    try {
        const getUser = await userService.getUserData(req);
        res.status(200).json(getUser);
    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message
        });
    }
}

export default {
    getUserData
}