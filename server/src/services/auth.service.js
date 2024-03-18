const prisma = require('../config/prisma');
const bcrypt = require('bcrypt');
const { body } = require('express-validator');
const createEmailChain = () => body('email').isEmail();


const postRegister = async (req, res) => {

    const { name, email, password, avatar_url } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.users.create({
        data: {
        name: name,
        email: email,
        password: hashedPassword,
        avatar_url: avatar_url,
        },
    });
    req.session.userId = newUser.id;
    const { password: excludedPassword, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
}

const postLogin = async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await prisma.users.findUnique({ where: { email } });
    if (existingUser) {
        const passwordValid = await bcrypt.compare(password, existingUser.password);
        if (passwordValid) {
            req.session.userId = existingUser.id;
            const { password: excludedPassword, ...userWithoutPassword } = existingUser;
            return userWithoutPassword;
        }
    throw new Error('Неверное имя пользователя или пароль');
    }
}

module.exports = {
    postRegister,
    postLogin
}

