const prisma = require('../config/prisma');
const bcrypt = require('bcrypt');

const authController = {
    register: async (req, res) => {
        const { name, email, password, avatar_url } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = await prisma.users.create({
          data: {
            name: name,
            email: email,
            password: hashedPassword,
            avatar_url: avatar_url,
          },
        });
        req.session.userId = newUser.id;
        res.status(200).json(newUser);
        console.log('Пользователь создан:', newUser);
        } catch (error) {
        console.error('Ошибка при создании пользователя:', error);
        res.status(500).json({ message: 'Ошибка при создании пользователя' });
        }
    },
  login: async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await prisma.users.findUnique(email);
    if (!existingUser) {
      res.status(401).json({ message: 'Неверное имя пользователя или пароль' });
    } else {
      const passwordValid = await bcrypt.compare(password, existingUser.password);
      if (passwordValid) {
        req.session.userId = existingUser.id;
        res.json(existingUser);
      } else {
        res.status(401).json({ message: 'Неверное имя пользователя или пароль' });
      }
    }
  },
  checkAuth: (req, res) => {
    if (req.session.userId) {
      res.json({ authenticated: true });
    } else {
      res.json({ authenticated: false });
    }
  },
};

module.exports = authController;