import User from "../models/user.model"

export default register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            message: "User created",
            user
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
};
