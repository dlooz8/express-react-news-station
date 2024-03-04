const prisma = require('../config/prisma');
const bcrypt = require('bcrypt');

const authController = {
  register: async (req, res) => {
    const { name, email, password, avatar_url } = req.body;
    try {
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
        const { password: excludedPassword, ...userWithoutPassword } = newUser;
        res.status(200).json(userWithoutPassword);
      } catch (error) {
        res.status(422).json({ toast: 'Ошибка при создании пользователя' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при хешировании пароля' });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await prisma.users.findUnique({ where: { email } });
    if (!existingUser) {
      res.status(422).json({ message: 'Неверное имя пользователя или пароль' });
    } else {
      try {
        const passwordValid = await bcrypt.compare(password, existingUser.password);
        if (passwordValid) {
          req.session.userId = existingUser.id;
          const { password: excludedPassword, ...userWithoutPassword } = existingUser;
          res.status(200).json(userWithoutPassword);
        } else {
          res.status(401).json({ message: 'Неверное имя пользователя или пароль' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Ошибка хеширования пароля' });
      }
    }
  },
  checkAuth: (req, res) => {
    if (req.session.userId) {
      res.status(200).json({ id: req.session.userId });
    } else {
      res.status(401).json({ message: 'Пользователь не авторизован' });
    }
  },
  logout: (req, res) => {
    try {
        req.session.destroy();
        console.log('Пользователь вышел из аккаунта');
        res.status(200).json({ message: 'Вы вышли из аккаунта' });
    } catch (error) {
        res.status(401).json({ message: 'Не удалось выйти из аккаунта' });
    }
  }
};

module.exports = authController;