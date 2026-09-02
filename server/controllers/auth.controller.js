import genToken from "../config/token.js"
import User from "../models/user.model.js"

export const googleAuth = async (req, res) => {
    try {
        const { name, email } = req.body

        // Check if user already exists
        let user = await User.findOne({ email })

        // If user doesn't exist, create new user
        if (!user) {
            user = await User.create({
                name,
                email
            })
        }

        // Generate JWT token
        const token = await genToken(user._id)

        // Store token inside cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json(user)

    } catch (error) {

        console.log("GOOGLE AUTH ERROR:", error)

        return res.status(500).json({
            message: "Google authentication error",
            error: error.message
        })
    }
}


export const logout = async (req, res) => {
    try {

        res.clearCookie("token", {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        })

        return res.status(200).json({
            message: "Logout successfully"
        })

    } catch (error) {

        console.log("LOGOUT ERROR:", error)

        return res.status(500).json({
            message: "Logout error",
            error: error.message
        })
    }
}