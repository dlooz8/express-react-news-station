const prisma = require('../config/prisma');
const bcrypt = require('bcrypt');

const postRegister = async (req, res) => {
    const { name, email, password, avatar_url } = req.body;

    const existingUser = await prisma.users.findUnique({ where: { email } });
    if (existingUser) {
        throw new Error('Этот email уже занят!');
    }
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
        throw new Error('Неверный пароль!');
    } else { 
        throw new Error('Пользователь с таким email не зарегистрирован!'); 
    }
}

module.exports = {
    postRegister,
    postLogin
}

