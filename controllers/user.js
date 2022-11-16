const { users } = require("../data");

const getAllUsers = (req, res) => {
    res.status(200).json(users);
}

const getSingleUser = (req, res) => {
    const user = users.find(user => user.id === Number(req.params.id));

    if (!user) {
        res
            .status(404)
            .json({ message: "No user found" });
    }
    res.status(200).json(user);
}

module.exports = {
    getAllUsers,
    getSingleUser,
}