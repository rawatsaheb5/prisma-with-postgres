import prisma from "../db/config.js";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        //console.log(req.body)
        const user = await prisma.user.findUnique({
            where: {
                email:email
            }
        })

        if (user) {
            return res.status(400).json({message:"user is already registered"})
        }

        const u = await prisma.user.create({
            data: {
                email: email,
                name: name,
                password:password
            }
        })
        res.status(201).json({message:"user registered successfully!"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"internal server error"})
    }
}
export const login = async (req, res) => {
    try {
        const {  email, password } = req.body;
        //console.log(req.body)
        const user = await prisma.user.findUnique({
            where: {
                email: email,
                password:password
            }
        })
        if (user === null) {
            return res.status(400).json({message:"invalid credentials"})
        }  
        res.status(200).json({message:"user login successfully!"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"internal server error"})
    }
}