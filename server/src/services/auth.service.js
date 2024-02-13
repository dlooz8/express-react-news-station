// const prisma = require('../config/prisma');


// const getAuth = async () => {
//     const { username, password } = req.body;
//   // Хеширование пароля
//   const hashedPassword = await bcrypt.hash(password, 10);
//   // Создание пользователя в базе данных
//   const user = await prisma.user.create({
//     data: {
//       username,
//       password: hashedPassword,
//     },
//   });
//   // Установка идентификатора пользователя в сессию
//   req.session.userId = user.id;
//   res.json(user);
// }

// module.exports = {
//     getAuth,

// }